<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
  export default {
    name: 'About',
    created() {
      this.$axios.get('/api/todo/').then(resp => {
        console.log('resp', resp)
      })
    }
  }
</script>
