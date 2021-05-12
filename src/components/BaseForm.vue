<template>
<div class="form-detail" >
    <div class="form-wrap">
        <div class="form" >
            <h1>Thông tin nhân viên</h1>
            <form action="#">
                <div class="content">
                    <div class="avatar" >
                        <BaseInput type="file" src="../assets/img/default-avatar.jpg"/>
                    </div>
                    <div class="input-area">
                        <div class="emloyee-info">
                            <h3>A. THÔNG TIN CHUNG</h3>
                            <hr>
                            <BaseInput label="Mã nhân viên" type="text" placeholder="Mã nhân viên" v-model="employeeCode" />
                            <BaseInput label="Họ và tên" type="text" placeholder="Họ và tên" v-model="fullname" /> 
                            <BaseInput label="Ngày sinh" type="date" v-model="dateofbirth" /> 
                            <div class="gender">
                                <BaseInput label="Nam" type="radio" v-model="gender" name="gender"/> 
                                <BaseInput label="Nữ" type="radio" v-model="gender" name="gender"/> 
                                <BaseInput label="Khác" type="radio" v-model="gender" name="gender"/> 
                            </div>
                            <BaseInput label="Số CMTND/ Căn cước(*)" type="text" placeholder="Số CMTND/ Căn cước" v-model="ID" /> 
                            <BaseInput label="Ngày Cấp" type="date" v-model="creation_date" /> 
                            <BaseInput label="Nơi cấp" type="text" placeholder="Nơi cấp" v-model="creation_place" /> 
                            <BaseInput label="Email" type="email" placeholder="Email" v-model="email" /> 
                            <BaseInput label="Số điện thoại" type="text" placeholder="Số điện thoại" v-model="phone_number" /> 
                            </div>
                        <div class="emloyee-info">
                            <h3>B. THÔNG TIN CÔNG VIỆC</h3>
                            <hr>
                            <BaseInput label="Vị trí" type="text" placeholder="Vị trí" v-model="position" />
                            <BaseInput label="Phòng ban" type="text" placeholder="Phòng ban" v-model="department" />
                            <BaseInput label="Mã số thuế cá nhân" type="text" placeholder="Mã số thuế cá nhân" v-model="taxID"/>
                            <BaseInput label="Mức lương cơ bản" type="text" placeholder="Mức lương cơ bản" v-model="salary" />
                            <BaseInput label="Ngày gia nhập công ty" type="date" v-model="join_date" />
                            <BaseInput label="Tình trạng công việc" type="text" placeholder="Tình trạng công việc" v-model="status" />
                        </div>
                    </div>
                    <div class="btn">       
                        <button class="btn-cancel" @click="closeForm">Hủy</button>
                        <button class="btn-save">Lưu</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
</template>
    
<script>
import BaseInput from "./BaseInput.vue"

export default {
    name:"BaseForm",
    data(){
        return {
            employeeCode: "",
            fullname: "",
            dateofbirth: "",
            gender: "",
            ID: "",
            creation_date: "",
            creation_place: "",
            email: "",
            phone_number: "",
            position: "",
            department: "",
            taxID: "",
            salary: "",
            join_date: "",
            status: ""
    }
    },
    components:{
        BaseInput
    },
    methods:{
        closeForm(){
            this.$emit('close')
        }
    }
}
</script>

<style>


</style>