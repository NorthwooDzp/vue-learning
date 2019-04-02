<template>
    <div>
        <button class="on"
                :class="{'active': value}"
                @click="onChange(true)"
        >
            On
        </button>
        <button class="off"
                :class="{'active': !value}"
                @click="onChange(false)"
        >
            Off
        </button>
    </div>
</template>

<script>
    export default {
        name: 'on-off',
        props: ['value'],
        methods: {
            onChange(newVal) {
                this.$emit('input', newVal);
            }
        }
    };
</script>

<style scoped lang="scss">

    button {
        border: none;
        padding: 16px 32px;
        border-radius: 4px;
        font-weight: bold;
        color: white;
        cursor: pointer;
    }

    .on {
        background-color: rgba(0, 255, 0, 0.5);

        &.active {
            background-color: rgba(0, 255, 0, 1);
        }
    }

    .off {
        background-color: rgba(255, 0, 0, 0.5);

        &.active {
            background-color: rgba(255, 0, 0, 1);
        }
    }

</style>
