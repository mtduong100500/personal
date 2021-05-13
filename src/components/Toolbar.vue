<template>    
    <div class="toolbar">
        <form>
            <div class="left">
                <base-input type="text" placeholder="Tìm kiếm theo Mã, Tên hoặc Số điện thoại" v-model="filter" class="filter"></base-input>
                <select name="department">
                    <option value="">Tất cả phòng ban</option>
                </select>
                <select name="position">
                    <option value="">Tất cả vị trí</option>
                </select>
            </div>
            <div>
                <button class="refresh"></button>
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
            filter: ""
        }
    }
}
</script>

<style scoped>
.left{
    display: flex;
    align-items: center;
}


</style>