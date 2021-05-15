<template>
  <div class="main-content">
    <Sidebar></Sidebar>
    <div class="header-table">
      <Header></Header>
      <div class="main">
        <SubHeader @open="toggleForm"></SubHeader>
        <Toolbar></Toolbar>
        <router-view></router-view>
        <BaseForm v-if="showForm" @close="toggleForm" @keyup="toggleForm"></BaseForm>
        <Footer></Footer>
      </div>
      
    </div>

  </div>
</template>

<script>

import Sidebar from './components/Sidebar.vue'
import Header from './components/Header.vue'
import Table from './components/Table.vue'
import Footer from './components/Footer.vue'
import SubHeader from './components/SubHeader.vue'
import Toolbar from './components/Toolbar.vue'
import BaseForm from './components/BaseForm.vue'  


export default {

  name: 'App',
  components: {
    Sidebar,
    Header,
    Table,
    Footer,
    SubHeader,
    Toolbar,
    BaseForm
  },
  data(){
    return{
      showForm: false
    }
  },
  methods:{
    toggleForm(){
      this.showForm = !this.showForm 

    }

  }
}
</script>

