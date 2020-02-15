<template>
  <div>
    <h1>Dashboard View</h1>
    <button v-on:click="logoutFn">Logout</button>
  </div>
</template>

<script>
export default {
  methods:{
      logoutFn(){
        localStorage.removeItem('jwt')
        localStorage.removeItem('user')
        this.$router.push('login')
      }
    }  

}
</script>

<style>

</style>