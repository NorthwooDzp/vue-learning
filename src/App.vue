<template>
    <div class="container">
        <form class="form-group pt-3">
            <div>
                <label for="email">Email</label>
                <input type="email"
                       id="email"
                       class="form-control"
                       v-model="email"
                >
            </div>
        </form>
    </div>

</template>

<script>


    export default {
        name: 'app',
        data() {
            return {
                email: ''
            }
        }
    };
</script>

<style lang="scss">
    .form-group {
        div {
            padding: 16px;
            border-radius: 5px;
            border: 1px solid lightblue;
        }
    }
</style>
