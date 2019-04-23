<template>
    <div>
        <h2>
            Car - {{car}}
        </h2>
    </div>
</template>

<script>
    export default {
        name: 'Car',
        data() {
            return {
                car: this.$route.params['id']
            };
        },
        created() {
            console.log(this.$route);
            // this.$route === this.$router.currentRoute
        },
        watch: {
            $route(toR, fromR) {
                console.log(toR);
                console.log(fromR);
                this.car = toR.params['id']
            }
        }
    };
</script>

<style scoped>

</style>