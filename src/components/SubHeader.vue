<template>
    <div class="sub-heading">
        <h3>Danh sách nhân viên</h3>
        <button class="add-employee" @click="openForm" ><img src="../assets/icon/add.png">Thêm nhân viên</button>   
    </div>
</template>

<script>


export default {
    name:"SubHeader",
    props:{
        
    },
    methods:{
        openForm(){
            this.$emit('open')
        }
    }
}
</script>