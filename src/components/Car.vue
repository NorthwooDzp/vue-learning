<template>
    <div class="car">
        <h4>Name: {{carName}} \ {{reverseName}} </h4>
        <h4><i>Year: {{year}}</i></h4>
        <button @click="emitName('not ford')">Change name</button>
        <button @click="changeFunc()"> Change name from parent</button>
        <button @click="updateCounter">Update Counter</button>
        <button @click="updateCounterEE">Update Counter with Event Emitter</button>
    </div>
</template>

<script>
    import { eventEmitter } from '../main';

    export default {
        name: 'Car',
        props: {
            'carName': {
                type: String,
                required: false,
                default: 'some name'
            },
            changeFunc: Function,
            counter: Number
        },
        data() {
            return {
                year: 2018
            };
        },
        computed: {
            reverseName() {
                return this.carName.split('').reverse().join('');
            }
        },
        methods: {
            emitName(name) {
                this.$emit('nameChanged', name);
            },
            updateCounter() {
                this.$emit('counterUpdated', this.counter + 1);
            },
            updateCounterEE() {
                eventEmitter.$emit('counterUpdatedEE', 3);
            }
        }
    };
</script>

<style lang="scss" scoped>
    .car {
        border: 3px solid yellow;
        padding: 14px 24px;
        border-radius: 9px;
        background-color: aqua;
    }
</style>
