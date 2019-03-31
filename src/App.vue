<template>
    <div id="app">
        <h2>{{title}}</h2>
        <h2>{{title | lowercase}}</h2>
        <h2>{{title | uppercase}}</h2>
        <p>
            <input type="text" v-model="searchName">
        </p>
        <ul>
            <li v-for="name of filteredNames">{{name}}</li>
        </ul>

        <hr>
        <List/>
    </div>
</template>

<script>

    import List from './components/List';
    import ListMixin from './ListMixin';

    export default {
        name: 'app',
        components: {List},
        mixins: [ListMixin],
        data() {
            return {
                title: `Hello! I'm VUE!!`
            };
        },
        filters: {
            lowercase(value) {
                return (value && value.length !== 0) ? value.toLowerCase() : '';
            }
        }
    };
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
