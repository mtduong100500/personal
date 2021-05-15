<template>
<div class="form-detail" tabindex="0">
    <div class="form-wrap">
        <div class="form" >
            <h1>Thông tin nhân viên</h1>
            <button class></button>
            <form action="#">
                <div class="content">
                    <div class="input-area">
                        <div class="emloyee-info">
                            <div class="avatar" >
                                <BaseInput type="file" class="default-avatar" />
                                <h4 class="notification">Vui lòng chọn ảnh có định dạng .jpg, .jpeg, .png, .gif</h4>
                            </div>
                            <BaseInput label="Mã nhân viên" type="text" placeholder="Mã nhân viên" v-model="employeeCode" ref="input" />
                            <BaseInput label="Họ và tên" type="text" placeholder="Họ và tên" v-model="fullname" /> 
                            <BaseInput label="Ngày sinh" type="date" v-model="dateofbirth" class="input-field"/> 
                            <BaseInput label="Email" type="email" placeholder="Email" v-model="email" /> 
                            <BaseInput label="Số điện thoại" type="text" placeholder="Số điện thoại" v-model="phone_number"  /> 
                            </div>
                        <div class="emloyee-info">  
                            <div class="gender">
                                <BaseInput label="Nam" type="radio" v-model="gender" name="gender" /> 
                                <BaseInput label="Nữ" type="radio" v-model="gender" name="gender"/> 
                                <BaseInput label="Khác" type="radio" v-model="gender" name="gender"/> 
                            </div>
                            <BaseInput label="Chức vụ" type="text" placeholder="Vị trí" v-model="position" />
                            <BaseInput label="Phòng ban" type="text" placeholder="Phòng ban" v-model="department" />
                            <BaseInput label="Mức lương cơ bản" type="text" placeholder="Mức lương cơ bản" v-model="salary" />
                            <BaseInput label="Tình trạng công việc" type="text" placeholder="Tình trạng công việc" v-model="status" />
                        </div>
                    </div>
                    <div class="btn">       
                        <button class="btn-cancel" @click="closeForm">Hủy</button>
                        <button class="btn-save" @click="autoFocus">Lưu</button>
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
            status: "",
            ref: "",
            src: ""
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

.input-field{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.default-avatar {
    background: url('../assets/img/default-avatar.jpg') no-repeat;
}

.notification{
    width: 50px;
}
</style>