<template>
  <v-app id="inspire">
    <Sidebar />
    <v-main>
      <Header />
      <v-divider class="ma-0"></v-divider>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Content from './components/Content'
export default {
  data: () => ({ drawer: null }),
  components:{
    Sidebar,
    Header,
    Content
  }
}
</script>

<style>
  @import './styles/fonts.css';
 
</style>