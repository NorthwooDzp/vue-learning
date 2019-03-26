<template>
    <div id="app">
        <Counter
            :counter="counter"
        />
        <Car
            :carName="carName"
            :changeFunc="changeNameToAudi"
            :counter="counter"
            @nameChanged="changeName($event)"
            @counterUpdated="counter = $event"
        />
    </div>
</template>

<script>
    import Car from './components/Car';
    import Counter from './components/Counter';

    export default {
        name: 'app',
        components: {
            Car,
            Counter
        },
        data() {
            return {
                carName: 'Ford',
                counter: 0
            };
        },
        methods: {
            changeName(name) {
                this.carName = name;
            },
            changeNameToAudi() {
                this.carName = 'Audi';
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
