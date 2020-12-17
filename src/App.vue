<template>
    <div>
        <main>
            <TrelloToScrumblr />
        </main>

        <footer>
            Julien Maulny
            -
            <a href="https://twitter.com/alcalyn_" target="_blank">@alcalyn</a>
            -
            <a href="https://github.com/alcalyn/trello-to-scrumblr" target="_blank">See project on Github</a>
        </footer>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TrelloToScrumblr from './components/TrelloToScrumblr.vue';

@Options({
    components: {
        TrelloToScrumblr,
    },
})
export default class App extends Vue {}
</script>

<style lang="stylus">
#app
    font-family Avenir, Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    color #2c3e50
    margin 60px auto
    max-width 600px

footer
    margin-top 8em
    text-align center
    font-size 0.7em

    a
        text-decoration none

        &:hover
            text-decoration underline
</style>
