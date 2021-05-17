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
                            </div>
                            <div class="label_input">
                                <label>Mã nhân viên</label><BaseInput  type="text" placeholder="Mã nhân viên" v-model="employeeCode" ref="manv" />
                            </div>
                            <div class="label_input">
                                <label>Họ và tên</label><BaseInput  type="text" placeholder="Họ và tên" v-model="fullname" /> 
                            </div>
                            <div class="label_input">
                                <label>Ngày sinh</label><BaseInput  type="date" v-model="dateofbirth" class="input-field"/> 
                            </div>
                            <div class="label_input">
                                <label>Email</label><BaseInput  type="email" placeholder="Email" v-model="email" /> 
                            </div>
                            <div class="label_input">
                                <label>Số điện thoại</label><BaseInput  type="text" placeholder="Số điện thoại" v-model="phone_number"  /> 
                            </div>
                        </div>
                        <div class="emloyee-info">  
                            <div class="gender">
                                <div class="label_input">
                                    <label>Nam</label><BaseInput  type="radio" v-model="gender" name="gender" /> 
                                </div>
                                <div class="label_input">
                                    <label>Nữ</label><BaseInput  type="radio" v-model="gender" name="gender"/> 
                                </div>
                                <div class="label_input">
                                    <label>Khác</label><BaseInput  type="radio" v-model="gender" name="gender"/> 
                                </div>
                            </div>
                            <div class="label_input">
                                <label>Chức vụ</label><BaseInput  type="text" placeholder="Vị trí" v-model="position" />
                            </div>
                            <div class="label_input">
                                <label>Phòng ban</label><BaseInput  type="text" placeholder="Phòng ban" v-model="department" />
                            </div>
                            <div class="label_input">
                                <label>Mức lương cơ bản</label><BaseInput  type="text" placeholder="Mức lương cơ bản" v-model="salary" />
                            </div>
                            <div class="label_input">
                                <label>Tình trạng công việc</label><BaseInput  type="text" placeholder="Tình trạng công việc" v-model="status" />
                            </div>
                        </div>
                    </div>
                    <div class="btn">       
                        <button class="btn-cancel" @click="closeForm">Hủy</button>
                        <button class="btn-save" >Lưu</button>
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
            email: "",
            phone_number: "",
            position: "",
            department: "",
            salary: "",
            status: "",
        }
    },
    components:{
        BaseInput
    },
    methods:{
        closeForm(){
            this.$emit('close')
        }
    },
    
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