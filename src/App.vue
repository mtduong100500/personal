<template>
  <v-app id="inspire">
    <Sidebar />
    <v-main>
      <Header />
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from './components/Sidebar'
import AppBar from './components/AppBar'
import Header from './components/Header'
import Content from './components/Content'
export default {
  data: () => ({ drawer: null }),
  components:{
    Sidebar,
    AppBar,
    Header,
    Content
  }
}
</script>

<style lang="scss" scoped>

</style>