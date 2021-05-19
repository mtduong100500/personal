<template>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="mini"
      permanent
      app
    >
      <v-list>
        <v-list-item>
            <v-list-item-icon @click.stop="mini = !mini">
                <v-img 
                src="../assets/img/toggle.png" 
                width="24"
                height="24"
                />
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title>
                    <v-img src="../assets/img/cukcuk-logo.png" contain height="24" />
                </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.view"
          link
        >
            <v-list-item-icon>
                <v-img 
                :src="item.src"
                width="24"
                height="24"
                />
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title class="text-subtitle-2">{{ item.title }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Tổng quan', src: require('../assets/icon/dashboard.png'), view:'/tongquan'},
          { title: 'Báo cáo', src: require('../assets/icon/report.png'), view:'/baocao' },
          { title: 'Mua hàng', src: require('../assets/icon/dashboard.png'), view:'/muahang' },
          { title: 'Danh mục khách hàng', src: require('../assets/icon/dic-employee.png'), view:'/danhmuckhachhang'},
          { title: 'Danh mục nhân viên', src: require('../assets/icon/dic-employee.png'), view:'/' },
          { title: 'Thiết lập hệ thống', src: require('../assets/icon/setting.png'), view:'/thietlap' },
        ],
        mini: true,
      }
    },
  }
</script>

<style scoped>
.v-list-item--active{
  background-color:#019160;
  color: #ffffff  !important;
}

.v-list-item:hover{
  cursor: pointer;
}
</style>