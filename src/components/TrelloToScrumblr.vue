<template>
    <div>
        <h1>Trello to Scrumblr</h1>

        <section>
            <h2>Import from Trello</h2>

            <p>Export your Trello board as JSON, then drop it here:</p>

            <input type="file" ref="trelloExportInput" @change="selectedTrelloFile"><br>
        </section>

        <section v-if="trelloExport">
            <h2>Export to Scrumblr</h2>

            <h3>Only columns</h3>
            <p>
                Unselect Trello columns you want to ignore (i.e "Done" column):
            </p>
            <ul>
                <li v-for="exportList in exportLists" :key="exportList.list.id">
                    <label>
                        <input type="checkbox" v-model="exportList.export" />
                        {{ exportList.list.name }} ({{ cardsInList(exportList.list).length }} cards)
                    </label>
                </li>
            </ul>

            <h3>Update Scrumblr board</h3>
            <p>
                <i>Ignore this if you are creating a new board.</i>
                <br>
                To update an already exported board using this tool,
                export the Scrumblr board you want to update and drop it here:
            </p>
            <input type="file" ref="scrumblrExportInput" @change="selectedScrumblrFile"><br>

            <div v-if="scrumblrExport">
                <h3>How to handle deleted cards in Trello ?</h3>
                <p>
                    If you deleted some Trello cards since the last time
                    you exported it to Scrumblr, how to handle obsolete post-its?
                </p>
                <select v-model="deletedCardsPolicy">
                    <option :value="'change-color'">Change post-it color</option>
                    <option :value="'delete'">Delete post-it</option>
                </select>
            </div>

            <br>

            <button @click="downloadScrumblrExport">Download Scrumblr export</button>
        </section>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { webFileService } from '../services/WebFileService';
import {
    TrelloList,
    TrelloCard,
    TrelloExport,
    trelloToScrumblrService,
    ExportOptions,
    ScrumblrExport,
} from '../services/TrelloToScrumblrService';

@Options({
    props: {
        msg: String,
    },
})
export default class TrelloToScrumblr extends Vue {
    trelloExport: null|TrelloExport = null;
    scrumblrExport: null|ScrumblrExport = null;

    exportLists: {list: TrelloList; export: boolean}[] = [];
    deletedCardsPolicy: ExportOptions['deletedCardsPolicy'] = 'change-color';

    selectedTrelloFile(): void {
        webFileService
            .loadJsonFromInputFile(this.$refs.trelloExportInput as HTMLInputElement)
            .then(trelloToScrumblrService.checkTrelloExport)
            .then(trelloExport => {
                this.trelloExport = trelloToScrumblrService.checkTrelloExport(trelloExport);

                this.exportLists = this.trelloExport.lists
                    .filter(list => !list.closed)
                    .map(list => ({
                        list,
                        export: true,
                    }))
                ;
            })
            .catch(alert)
        ;
    }

    selectedScrumblrFile(): void {
        webFileService
            .loadJsonFromInputFile(this.$refs.scrumblrExportInput as HTMLInputElement)
            .then(trelloToScrumblrService.checkScrumblrExport)
            .then(scrumblrExport => this.scrumblrExport = scrumblrExport)
            .catch(alert)
        ;
    }

    cardsInList(list: TrelloList): TrelloCard[] {
        if (!this.trelloExport) {
            throw new Error('Trello export not yet loaded');
        }

        return this.trelloExport.cards
            .filter(card => !card.closed)
            .filter(card => card.idList === list.id)
        ;
    }

    downloadScrumblrExport() {
        if (null === this.trelloExport) {
            throw new Error('Trello export not yet loaded');
        }

        const options: ExportOptions = {
            idLists: this.exportLists
                .filter(exportList => exportList.export)
                .map(exportList => exportList.list.id)
            ,
            deletedCardsPolicy: this.deletedCardsPolicy,
        };

        const result = trelloToScrumblrService.generateScrumblrFromTrello(
            this.trelloExport,
            options,
            this.scrumblrExport,
        );

        webFileService.downloadAsTextFile(
            JSON.stringify(result),
            'trello-to-scrumblr.json',
        );
    }
}
</script>

<style scoped lang="stylus">
h1
    text-align center

h2
    border-bottom 1px solid rgba(0, 0, 0, 0.2)

h3
    margin-top 2.5em

section
    margin 3em 0

ul
    list-style-type none
    padding 0

a
    color #42b983

button
    margin 2em 0
    font-size 1.5em
</style>
