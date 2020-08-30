<template>
    <div>
        <p>
            <input type="text" v-model="t" @keyup.enter="add"
                   @blur="check"
                    @focus="print('我获得焦点了')"
                    @focusin="print('i am focusin event')"
                    @focusout="print('i am focusout event')"
                    @input="onInput"> <button @click="add">添加</button>
        </p>
        <div v-for="(v, k) in todos" :key="'todo' + v.id">
            <TodoItem :text="v.content" @delItem="del(k)">
                title
                <template v-slot:content>
                    i am content
                </template>
            </TodoItem>

<!--            <template v-if="v.isEdit">-->
<!--                <input type="text" v-model="v.content" />-->
<!--            </template>-->
<!--            <template v-else>-->
<!--                {{v.content}}-->
<!--            </template>-->
<!--            <button @click="del(k)">删除</button>-->
<!--            <button @click="edit(k)">编辑</button>-->
        </div>
    </div>
</template>

<script>
    import TodoItem from '../components/TodoItem'
    export default {
        name: "Todo",
        components: {TodoItem},
        data(){
            return {
                todos: [],
                t: "",
                firstname: 'a',
                secondname: 'b',
            }
        },
        // 计算属性,
        computed: {
          todoLength(){
              // 缓存的过程，有些复杂的计算属性，
              if (this.todos.length == 10) {
                  return "None"
              }else{
                  return this.todos.length;
              }
          }
        },
        created(){
            this.$axios.get('/api/todo/').then(resp => {
                console.log('resp', resp)
                this.todos=resp.data.data
            })
        },
        mounted() {

        },
        methods: {
            onInput(e){
                console.log(e.data)
            },
            check(){
                if (this.t === "") {
                    console.log("您输入的不能为空")
                }
            },
            del(key){
                // error: delete this.todos[key]
                this.todos.splice(key, 1)
            },
            edit(k){
                //this.todos[key].isEdit = true
                this.$set(this.todos[k], 'isEdit', true)
                console.log(this.todos[k])
            },
            add(){
                if (this.t == "") {
                    alert("you must enter something")
                    return
                }
                console.log('您输入的是:', this.t); console.log('f')
                this.todos.push({
                    "content": this.t,
                    "id": this.todos.length + 1
                })
                this.t = ""
                //this.todos[this.todos.length] = this.t
            },
            print(v) {
                console.log(v)
            }
        }
    }
</script>

<style scoped>

</style>
