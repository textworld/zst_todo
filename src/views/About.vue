<template>
  <div class="about">
    <h1><slot name="header"></slot></h1>
    <slot></slot>
    <h1>{{v}}</h1>
    <button @click="add">add</button>
    <button @click="sub">sub</button>
  </div>
</template>

<script>
  export default {
    name: "About",
    props: {
      value: ""
    },
    data(){
      return {
        v: this.value
      }
    },
    created() {

    },
    watch: {
      value(newVal, oldVal){
        this.v = newVal
      }
    },
    methods: {
      add(){
        this.v++
        this.$emit('input', this.v)
      },
      sub() {
        this.v--
        this.$emit('input', this.v)
      }
    }
  }
</script>
