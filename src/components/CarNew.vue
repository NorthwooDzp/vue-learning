<template>
    <div>
        <h2>{{carName}}</h2>
        <slot name="title"></slot>
        <hr>
        <hr>
        <slot name="text"></slot>
    </div>
</template>

<script>
    export default {
        name: 'CarNew',
        props: ['carName']
    };
</script>

<style scoped>
    div {
        padding: 16px;
        border: 1px solid gray;
        border-radius: 5px;
    }
</style>
