<template>
    <div>
        <h3>List Names</h3>

        <p>
            <input type="text" v-model="searchName">
        </p>
        <ul>
            <li v-for="name of filteredNames">{{name}}</li>
        </ul>
    </div>
</template>

<script>
    import ListMixin from '../ListMixin'

    export default {
        name: 'List',
        mixins: [ListMixin]
    };
</script>

<style scoped>

</style>
