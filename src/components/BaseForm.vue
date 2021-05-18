<template>
<div class="form-detail" tabindex="0">
    <div class="form-wrap">
        <div class="form" >
            <h1>Thông tin nhân viên</h1>
            <button class></button>
            <form @submit="postData" method="post">
                <div class="content">
                    <div class="input-area">
                        <div class="emloyee-info">
                            <div class="avatar" >
                                <img src="../assets/img/default-avatar.jpg" class="avatar-input"><BaseInput type="file" class="default-avatar" />
                            </div>
                            <div class="label_input">
                                <label>Mã nhân viên</label><BaseInput  type="text" placeholder="Mã nhân viên" v-model="employeeInfo.employeeCode" />
                            </div>
                            <div class="label_input">
                                <label>Họ và tên</label><BaseInput  type="text" placeholder="Họ và tên" v-model="employeeInfo.fullname" /> 
                            </div>
                            <div class="label_input">
                                <label>Ngày sinh</label><BaseInput  type="date" v-model="employeeInfo.dateofbirth" class="input-field"/> 
                            </div>
                            <div class="label_input">
                                <label>Email</label><BaseInput  type="email" placeholder="Email" v-model="employeeInfo.email" /> 
                            </div>
                            <div class="label_input">
                                <label>Số điện thoại</label><BaseInput  type="text" placeholder="Số điện thoại" v-model="employeeInfo.phone_number"  /> 
                            </div>
                        </div>
                        <div class="emloyee-info">  
                            <div class="gender">
                                <div class="label_input">
                                    <label>Nam</label><BaseInput  type="radio" v-model="employeeInfo.gender" name="gender" /> 
                                </div>
                                <div class="label_input">
                                    <label>Nữ</label><BaseInput  type="radio" v-model="employeeInfo.gender" name="gender"/> 
                                </div>
                                <div class="label_input">
                                    <label>Khác</label><BaseInput  type="radio" v-model="employeeInfo.gender" name="gender"/> 
                                </div>
                            </div>
                            <div class="label_input">
                                <label>Chức vụ</label><BaseInput  type="text" placeholder="Vị trí" v-model="employeeInfo.position" />
                            </div>
                            <div class="label_input">
                                <label>Phòng ban</label><BaseInput  type="text" placeholder="Phòng ban" v-model="employeeInfo.department" />
                            </div>
                            <div class="label_input">
                                <label>Mức lương cơ bản</label><BaseInput  type="text" placeholder="Mức lương cơ bản" v-model="employeeInfo.salary" />
                            </div>
                            <div class="label_input">
                                <label>Tình trạng công việc</label><BaseInput  type="text" placeholder="Tình trạng công việc" v-model="employeeInfo.status" />
                            </div>
                        </div>
                    </div>
                    <div class="btn">       
                        <button class="btn-cancel" @click="closeForm">Hủy</button>
                        <button class="btn-save" type="submit">Lưu</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
</template>
<script>
import axios from 'axios'
import BaseInput from "./BaseInput.vue"
import Swal from 'sweetalert2'

export default {
    name:"BaseForm",
    data(){
        return {
            employeeInfo:{
                employeeCode: "",
                fullname: "",
                dateofbirth: "",
                gender: [],
                email: "",
                phone_number: "",
                position: "",
                department: "",
                salary: "",
                
            }
        }
    },
    components:{
        BaseInput
    },
    methods:{
        closeForm(){
            this.$emit('close')
        },
        postData(e){
            console.warn(this.employeeInfo)
            e.preventDefault()
            axios.post('http://cukcuk.manhnv.net/v1/Employees', this.employeeInfo)
            this.closeForm()
            
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
.avatar-input {
    width: 40px;
}

.default-avatar{
    display: none;
}

.notification{
    width: 50px;
}

</style>