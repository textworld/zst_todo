<template>
    <div>
        <p>
            {{count}}
        </p>

        <button @click="count++">add</button>
        <button @click="count--">sub</button>
        <About :value="count" @input="change">
            default
            <template v-slot:header>
                ssss
            </template>
        </About>
        <p>
            <input type="text" @focus.prevent="alert('focus')">
        </p>
        <div v-for="(v, k) in todos" :key="'todo' + v.id">
            <template v-if="!v.isEdit">{{v.content}}</template> <input v-else /> <button @click="edit(k)">编辑</button> <button @click="del(k)">删除</button>
        </div>
    </div>
</template>

<script>
    import About from "./About";
    export default {
        components: {
            About
        },
        name: "Todo",
        data(){
            return {
                count: 0,
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
        mounted() {
            // this.$axios.get('/todo/').then(resp => {
            //     console.log(resp)
            // })
        },
        methods: {
            del(key){
                this.todos.splice(key, 1)
            },
            edit(key){
                this.$set(this.todos[key], 'isEdit', true)
            },
            alert(val) {
                console.log(val)
            },
            change(event) {
                console.log(event)
                this.count = event
                console.log(this.$event)
            }
        }
    }
</script>

<style scoped>

</style>
