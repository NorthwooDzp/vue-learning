<template>
    <div class="container">
        <form class="pt-3">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email"
                       id="email"
                       class="form-control"
                       @change="$v.email.$touch()"
                       v-model="email"
                       :class="{'is-invalid': $v.email.$error}"
                >
                <div class="invalid-feedback"
                     v-if="$v.email.$error && !$v.email.email"
                >
                    Type a correct email
                </div>
                <div class="invalid-feedback"
                     v-if="$v.email.$error && !$v.email.required"
                >
                    Required field
                </div>
            </div>
            <pre>
                {{$v.email}}
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
            padding: 16px;
            border-radius: 5px;
            border: 1px solid lightblue;
    }
</style>
