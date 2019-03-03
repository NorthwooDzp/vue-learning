<template>
    <div id="app">
        <Car :carName="carName"
        @nameChanged="changeName($event)"
        :changeFunc="changeNameToAudi"/>
    </div>
</template>

<script>
    import Car from './components/Car';

    export default {
        name: 'app',
        components: {
            Car
        },
        data() {
            return {
                carName: 'Ford'
            }
        },
        methods: {
            changeName(name) {
                this.carName = name;
            },
            changeNameToAudi() {
                this.carName = 'Audi'
            }
        }
    };
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
