<template>
    <div class="container">
        <form class="pt-3">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email"
                       id="email"
                       class="form-control"
                       @blur="$v.email.$touch()"
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
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password"
                       id="password"
                       class="form-control"
                       :class="{'is-invalid': $v.password.$error}"
                       v-model="password"
                       @blur="$v.password.$touch()"
                >
                <div class="invalid-feedback"
                     v-if="$v.password.$error && !$v.password.minLength"
                >
                    Password should contains at least {{$v.password.$params.minLength.min}} symbols. Now it has {{password.length}} symbols.
                </div>
                <div class="invalid-feedback"
                     v-if="$v.password.$error && !$v.password.required"
                >
                    Required field
                </div>
            </div>
            <div class="form-group">
                <label for="passwordConfirmation">Re-enter Password</label>
                <input type="password"
                       id="passwordConfirmation"
                       class="form-control"
                       :class="{'is-invalid': $v.passwordConfirmation.$error}"
                       v-model="passwordConfirmation"
                       @blur="$v.passwordConfirmation.$touch()"
                >
                <div class="invalid-feedback"
                     v-if="$v.passwordConfirmation.$error && !$v.passwordConfirmation.sameAs"
                >
                    Passwords does not match
                </div>
                <div class="invalid-feedback"
                     v-if="$v.passwordConfirmation.$error && !$v.passwordConfirmation.required"
                >
                    Required field
                </div>
            </div>
        </form>
        <pre>
            {{$v}}
        </pre>
    </div>

</template>

<script>
    import { required, email, minLength, sameAs } from 'vuelidate/lib/validators';

    export default {
        name: 'app',
        data() {
            return {
                email: '',
                password: '',
                passwordConfirmation: ''
            };
        },
        validations: {
            email: {
                required,
                email
            },
            password: {
                required,
                minLength: minLength(6)
            },
            passwordConfirmation: {
                required,
                // sameAs: sameAs('password')
                sameAs: sameAs((vue) => vue.password) // correct way
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
