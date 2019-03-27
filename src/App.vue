<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <h2 v-colored:background.font="'red'" v-if="visible">{{title}}</h2>
        <h2 v-colored:color.delay.font="'gold'" v-if="visible">{{title}}</h2>
        <h3 v-italic>Local Directive</h3>
        <button @click="visible = !visible">Toggle "Visible"</button>
        <button @click="title = 'new title'">change title</button>
    </div>
</template>

<script>

    import ItalicFont from './directives/fontStyle'

    export default {
        name: 'app',
        data() {
            return {
                title: `Hello, I'm Vue`,
                visible: true
            };
        },
        directives: {
            italic: ItalicFont
        }
    };
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
