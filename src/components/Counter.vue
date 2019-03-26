<template>
    <div>

        <h4>Counter: {{counter}}</h4>
        <h4>Counter2: {{counter2}}</h4>
    </div>
</template>

<script>
    import { eventEmitter } from '../main';

    export default {
        name: 'Counter',
        props: ['counter'],
        data() {
            return {
                counter2: 0
            };
        },
        methods: {
            updateCounter2(num) {
                this.counter2 += num;
            }
        },
        created() {
            eventEmitter.$on('counterUpdatedEE', num => {
                this.updateCounter2(num);
            })
        }
    };
</script>

<style scoped>

</style>
