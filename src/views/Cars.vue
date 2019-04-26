<template>
    <div>
        <h1>Cars page</h1>
        <ul>
            <router-link tag="li"
                         v-for="car of cars"
                         :to="$route.path + '/' + car"
                         :key="car"
            >
                {{car}}
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Cars',
        data() {
            return {
                cars: [
                    'Audi',
                    'BMW',
                    'Ford',
                    'Toyota'
                ]
            };
        }
    };
</script>

<style scoped>
    ul {
        text-align: left;
    }
    li {
        cursor: pointer;
    }
</style>