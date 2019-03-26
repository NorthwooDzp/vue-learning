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
        <CarNew
            :carName="'Mazda'"
        >
            <h2 slot="title">Mazda + html</h2>
            <p slot="text">Lorem ipsum dolor sit amet.</p>
            {{carName}} from App.vue
        </CarNew>
    </div>
</template>

<script>
    import Car from './components/Car';
    import Counter from './components/Counter';
    import CarNew from './components/CarNew';

    export default {
        name: 'app',
        components: {
            Car,
            Counter,
            CarNew
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

    h4 {
        font-style: italic;
    }
</style>
