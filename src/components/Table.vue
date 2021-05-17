<template>
<div class="table">
    <div class="data">
        <table>
            <thead>
                <tr>
                    <th>Mã nhân viên</th>
                    <th>Họ và tên</th>
                    <th>Giới tính</th>
                    <th>Ngày sinh</th>
                    <th>Điện thoại</th>
                    <th>Email</th>
                    <th>Chức vụ</th>
                    <th>Phòng ban</th>
                    <th>Mức lương cơ bản</th>
                    <th>Tình trạng công việc</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="employee in info" :key="employee.EmployeeId">
                    <td>{{employee.EmployeeCode}}</td> 
                    <td>{{employee.FullName}}</td>
                    <td>{{formatGender(employee.Gender)}}</td>
                    <td>{{employee.DateOfBirth}}</td>
                    <td>{{employee.PhoneNumber}}</td>
                    <td>{{employee.Email}}</td>
                    <td>{{employee.PositionName}}</td>
                    <td>{{employee.DepartmentName}}</td>
                    <td>{{formatMoney(employee.Salary)}}</td>
                    <td>{{employee.WorkStatus}}</td>
                </tr> 
                <!-- <tr v-for="employee,index in employees" :key="index">
                    <td v-for="infos,index1 in employee" :key="index1">
                        {{infos}}
                    </td>
                </tr> -->
            </tbody>
        </table>
    </div>
    </div>
</template> 
<script>
import axios from 'axios';
//import data from '../data.js'
export default {
    name: 'Table',
    data(){
        return{
            info: null,
            //employees: data
        }
    },
    methods:{
        formatGender(value){
            var gender = ""
            if(value === 0) gender = "Nữ"
            else if(value === 1) gender = "Nam"
            else gender = "Khác"
            return gender
        },
        formatMoney(money){
            if(money === null) return 
            if(!isNaN(money)){
                return money.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1.");
            }else {
                return money;
            }
        }
    },
    mounted(){
        axios.get('http://cukcuk.manhnv.net/v1/Employees')
        .then(response => {
            this.info = response.data
            console.log(typeof(this.info))
        })
    }
}
</script>
<style scoped>

</style>


