<template>
    <div>
        <p>
            <input type="text">
        </p>
        <div v-for="(v, k) in todos" :key="'todo' + v.id">
            <template v-if="!v.isEdit">{{v.content}}</template> <input v-else /> <button @click="edit(k)">编辑</button> <button @click="del(k)">删除</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Todo",
        data(){
            return {
                todos: []
            }
        },
        created(){
            for(let i = 0; i < 10; i++){
                this.todos.push({
                    id: i,
                    content: 'a' + i
                })
            }
        },
        methods: {
            del(key){
                this.todos.splice(key, 1)
            },
            edit(key){
                this.$set(this.todos[key], 'isEdit', true)
            }
        }
    }
</script>

<style scoped>

</style>
