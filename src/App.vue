<template>
    <div class="container">
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <router-link to="/"
                             tag="a"
                             class="nav-link"
                             exact active-class="active"
                >
                    Home
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :to="'/cars'"
                             tag="a"
                             class="nav-link"
                             active-class="active"
                >
                    Cars
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/about"
                             tag="a"
                             class="nav-link"
                             active-class="active"
                >
                    About
                </router-link>
            </li>
        </ul>
        <div class="content">
            <router-view/>
        </div>
    </div>
</template>

<script>
    export default {
        beforeCreate() {
            // console.log(process.env);
        }
    };
</script>

<style>

    .content {
        text-align: center;
    }

</style>
