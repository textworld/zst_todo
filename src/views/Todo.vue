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
        <p>
            {{fullname}}
        </p>
        <p>
            {{todoLength}}
        </p>
        <div v-for="(v, k) in todos" :key="'todo' + v.id">
            <template v-if="v.isEdit">
                <input type="text" v-model="v.content" />
            </template>
            <template v-else>
                {{v.content}}
            </template>
            <button @click="del(k)">删除</button>
            <button @click="edit(k)">编辑</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Todo",
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
          },
            fullname :{
              get: function () {
                  return this.firstname + " " + this.secondname
              },
                set: function (newVal) {
                    this.firstname = newVal[0]
                    this.secondname = newVal[2]
                    // 对dom进行修改，是不是就达到一个修改变量的同时，就能够去修改dom的节点达到mvvm模型的效果
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
            console.log('out of setTimeout', this.firstname)
            var that = this
            setTimeout(function () {
                console.log('in setTimeout',that.firstname)
                that.fullname = 'c b'
                console.log(that.firstname)
                console.log(that.secondname)
            }, 2000)
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
