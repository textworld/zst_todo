<template>
    <div>
        <p>
            <slot></slot> {{text}} <button @click="del">删除</button>
        </p>
        <p>
            <slot name="content"></slot>
        </p>
    </div>
</template>

<script>
    export default {
        name: "TodoItem",
        // 传递，从父组件传递进来的值
        props: {
            "text": {
                default: 'no content',
                type: String,
                required: true,
            }
        },
        methods: {
            del() {
                this.$emit('delItem')
            }
        }
    }
</script>

<style scoped>

</style>