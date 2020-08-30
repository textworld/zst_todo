<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  created() {
    this.$axios.get('http://localhost:8089/todo2/').then(resp => {
      console.log('resp', resp)
    }).catch(err => {
      console.error(err)
    })
  }
}
</script>
