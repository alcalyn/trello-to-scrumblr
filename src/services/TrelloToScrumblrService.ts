// Trello types
export type TrelloExport = {
    cards: TrelloCard[];
    lists: TrelloList[];
};

export type TrelloCard = {
    id: string;
    name: string;
    closed: boolean;
    idList: string;
};

export type TrelloList = {
    id: string;
    name: string;
    closed: boolean;
};

// Scrumblr types
export type ScrumblrExport = {
    cards: ScrumblrCard[];
    columns: [];
    theme: 'smallcards'|'bigcards';
    size: {
        width: number;
        height: number;
    };
};

export type ScrumblrCard = {
    id: string;
    colour: 'white'|'green'|'yellow'|'blue';
    rot: number;
    x: number;
    y: number;
    text: string;
    sticker: null;
};

// Export options
export type ExportOptions = {
    // Export only these lists, null for all lists
    idLists: null|string[];

    // How to handle deleted Trello cards, delete to delete in Scrumblr, change-color to highlight deleted post-it
    deletedCardsPolicy: 'change-color'|'delete';
};

class TrelloToScrumblrService {
    public static DEFAULT_OPTIONS: ExportOptions = {
        idLists: null,
        deletedCardsPolicy: 'change-color',
    };

    public createNewScrumblrExport(): ScrumblrExport {
        return {
            cards: [],
            columns: [],
            theme: 'smallcards',
            size: {
                width: 1110,
                height: 466,
            },
        };
    }

    public checkTrelloExport(json: object): TrelloExport {
        const trelloExport = json as TrelloExport;
        const parseError = new Error('This file seems not to be a JSON Trello export');

        if (!trelloExport.cards || !Array.isArray(trelloExport.cards)) {
            throw parseError;
        }

        if (!trelloExport.lists || !Array.isArray(trelloExport.lists)) {
            throw parseError;
        }

        return trelloExport;
    }

    public checkScrumblrExport(json: object): ScrumblrExport {
        const scrumblrExport = json as ScrumblrExport;
        const parseError = new Error('This file seems not to be a JSON Scrumblr export');

        if (!scrumblrExport.cards || Array.isArray(!scrumblrExport.cards)) {
            throw parseError;
        }

        if (!scrumblrExport.columns || Array.isArray(!scrumblrExport.columns)) {
            throw parseError;
        }

        return scrumblrExport;
    }

    public generateScrumblrFromTrello(trelloExport: TrelloExport, options: null|ExportOptions = null, fromScrumblrExport: null|ScrumblrExport = null): ScrumblrExport {
        if (null === fromScrumblrExport) {
            fromScrumblrExport = this.createNewScrumblrExport();
        }

        if (null === options) {
            options = TrelloToScrumblrService.DEFAULT_OPTIONS;
        }

        const scrumblrExport = fromScrumblrExport;

        const lists: {[key: string]: TrelloList} = {};
        trelloExport.lists.forEach(list => {
            lists[list.id] = list;
        });

        // Remove closed cards, or cards in closed lists
        let trelloCards = trelloExport.cards
            .filter(card => !lists[card.idList].closed)
            .filter(card => !card.closed)
        ;

        // Remove cards in user unwanted lists
        if (null !== options.idLists) {
            trelloCards = trelloCards
                .filter(card => options?.idLists?.includes(card.idList))
            ;
        }

        // Add/Update cards from Trello to Scrumblr
        trelloCards.forEach(trelloCard => {
            const oldPostit = scrumblrExport.cards
                .filter(postit => postit.id === trelloCard.id)
                .pop()
            ;

            // New postit: add it
            if (!oldPostit) {
                scrumblrExport.cards.push(this.createPostit(trelloCard.id, trelloCard.name));
                return;
            }

            // Already existing postit: update it
            oldPostit.text = trelloCard.name;
        });

        // Handle cards deleted in Trello but still on scrumblr
        const trelloCardIds = trelloCards.map(trelloCard => trelloCard.id);

        if ('delete' === options.deletedCardsPolicy) {
            scrumblrExport.cards = scrumblrExport.cards
                .filter(card => trelloCardIds.includes(card.id))
            ;
        }

        if ('change-color' === options.deletedCardsPolicy) {
            scrumblrExport.cards
                .filter(card => !trelloCardIds.includes(card.id))
                .forEach(card => card.colour = 'yellow')
            ;
        }

        return scrumblrExport;
    }

    private createPostit(id: string, text: string): ScrumblrCard {
        return {
            id,
            colour: 'blue',
            rot: 0,
            x: 1,
            y: 1,
            text,
            sticker: null,
        };
    }
}

const trelloToScrumblrService = new TrelloToScrumblrService();

export {
    trelloToScrumblrService,
    TrelloToScrumblrService,
};
