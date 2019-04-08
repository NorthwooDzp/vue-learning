<template>
    <div class="container">
        <form class="form-group pt-3">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email"
                       id="email"
                       class="form-control"
                       @change="$v.email.$touch()"
                       v-model="email"
                >
            </div>
            <pre>
                {{ $v.email }}
            </pre>
        </form>
    </div>

</template>

<script>
    import {required, email} from 'vuelidate/lib/validators'

    export default {
        name: 'app',
        data() {
            return {
                email: ''
            }
        },
        validations: {
            email: {
                required,
                email
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
