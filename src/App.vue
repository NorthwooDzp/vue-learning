<template>
    <div id="app">
        <h2>Form inputs</h2>
        <div>
            <h4>text input</h4>
            <input type="text" v-model.lazy="name">
            <hr>
            <p>{{name}}</p>
        </div>
        <div>
            <h4>textarea</h4>
            <textarea v-model.lazy="textarea"></textarea>
            <hr>
            <p>{{textarea}}</p>
        </div>
        <div>
            <h4>single checkboxes</h4>
            <label><input type="checkbox" v-model="checkboxes.vk">VK</label>
            <label><input type="checkbox" v-model="checkboxes.ok">OK</label>
            <label><input type="checkbox" v-model="checkboxes.fb">FB</label>
            <hr>
            <p>{{JSON.stringify(checkboxes)}}</p>
        </div>
        <div>
            <h4>checkboxes array</h4>
            <label><input type="checkbox" v-model="social" value="vk">VK</label>
            <label><input type="checkbox" v-model="social" value="ok">OK</label>
            <label><input type="checkbox" v-model="social" value="fb">FB</label>
            <hr>
            <p>{{JSON.stringify(social)}}</p>
        </div>
        <div>
            <h4>radio buttons</h4>
            <label><input type="radio" v-model="selectedRadio" value="vk">VK</label>
            <label><input type="radio" v-model="selectedRadio" value="ok">OK</label>
            <label><input type="radio" v-model="selectedRadio" value="fb">FB</label>
            <hr>
            <p>{{selectedRadio}}</p>
        </div>
        <div>
            <h4>select</h4>
            <select v-model="selectVal">
                <option v-for="opt of selectOpts"
                        :value="opt"
                >
                    <!--if attribute 'value is not defined option text willbe used as value'-->
                    {{opt.toUpperCase()}}
                </option>
            </select>
            <hr>
            <p>{{selectVal}}</p>
        </div>
        <div>
            <h4>numeric modifier</h4>
            <input type="text" v-model.number="numberVal">
            <hr>
            <p>{{typeof numberVal}} , {{numberVal}}</p>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'app',
        data() {
            return {
                name: 'test name',
                textarea: 'test textarea',
                checkboxes: {
                    vk: false,
                    ok: true,
                    fb: false
                },
                social: ['vk'],
                selectedRadio: 'fb',
                selectVal: '',
                selectOpts: ['vk', 'ok', 'fb'],
                numberVal: 20
            };
        }
    };

</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    #app > div {
        padding: 12px;
        border-radius: 5px;
        border: 1px solid lightblue;
        margin: 10px auto;
    }

    textarea {
        height: 100px;
        width: 400px;
    }

    p {
        white-space: pre;
    }

    label {
        margin-right: 20px;
    }
</style>
