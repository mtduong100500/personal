<template>
<div class="table">
    <div class="data">
        <table>
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
                <tr v-for="employee in info" :key="employee.EmployeeId">
                    <td>{{employee.EmployeeCode}}</td> 
                    <td>{{employee.FullName}}</td>
                    <td>{{employee.Gender | formatGender}}</td>
                    <td>{{employee.DateOfBirth}}</td>
                    <td>{{employee.PhoneNumber}}</td>
                    <td>{{employee.Email}}</td>
                    <td>{{employee.PositionName}}</td>
                    <td>{{employee.DepartmentName}}</td>
                    <td>{{employee.Salary}}</td>
                    <td>{{employee.WorkStatus}}</td>
                </tr> 
        </table>
    </div>
    </div>
</template> 


<script>
import axios from 'axios';
export default {
    name: 'Table',
    data(){
        return{
            info: null,
            
        }
    },
    method:{
        formatGender(number){
 
        }
    },
    mounted(){
        axios.get('http://cukcuk.manhnv.net/v1/Employees')
        .then(response => this.info = response.data)
        
    }
}

</script>

<style scoped>
.table td{
    font-family: 'Medium';
}
</style>


