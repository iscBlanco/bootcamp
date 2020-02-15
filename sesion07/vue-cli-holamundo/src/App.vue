<template>
  <div id="app">
    
    <Header></Header>
    <MainContent></MainContent>
    <Footer></Footer>  
  </div>
</template>

<script>

import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
export default {
  name: 'app',
  components: {
    Header,
    MainContent,
    Footer

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
