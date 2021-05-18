<template>    
    <div class="toolbar">
        <form>
            <div class="left">
                <base-input type="text" placeholder="Tìm kiếm theo Mã, Tên hoặc Số điện thoại" class="filter" />
                <select name="department">
                    <option value="">Tất cả phòng ban</option>
                </select>
                <select name="position">
                    <option value="">Tất cả vị trí</option>
                </select>
            </div>
            <div>
                <button class="refresh" @click="loadTable"><img src="../assets/icon/refresh.png" ></button>
            </div>
        </form>
    </div>
</template>
<script>
import BaseInput from './BaseInput.vue'

export default {
  components: { BaseInput },
    name:"Toolbar",
    data(){
        return{
        }
    },
    create:{

    },
    methods:{
        loadTable(){
            
        }
    }
}
</script>
<style scoped>
.left{
    display: flex;
    align-items: center;
}

.filter{
    background: url("../assets/icon/search.png") no-repeat;
    background-position: 16px;
}
</style>