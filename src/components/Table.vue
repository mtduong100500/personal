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
                    <th>Tùy chọn</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="employee in info" :key="employee.EmployeeId" >
                    <td>{{employee.EmployeeCode}}</td> 
                    <td>{{employee.FullName}}</td>
                    <td>{{formatGender(employee.Gender)}}</td>
                    <td>{{formatDate(employee.DateOfBirth)}}</td>
                    <td>{{employee.PhoneNumber}}</td>
                    <td>{{employee.Email}}</td>
                    <td>{{employee.PositionName}}</td>
                    <td>{{employee.DepartmentName}}</td>
                    <td>{{formatMoney(employee.Salary)}}</td>
                    <td>{{employee.WorkStatus}}</td>
                    <td>
                        <button>Sửa</button>
                        <button>Xóa</button>
                    </td>
                </tr> 
                
            </tbody>
        </table>
    </div>
    </div>
</template> 
<script>
import moment from 'moment'
import axios from 'axios'
export default {
    name: 'Table',
    data(){
        return{
            info: null,
        }
    },
    methods:{
        formatGender(value){
            return value === 0 ? "Nữ" : value === 1 ? "Nam" : "Khác"
            
        },
        formatMoney(money){
            return money === null ? "0" : !isNaN(money) ? money.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1.") : money
        },
        formatDate(date){
            return moment(String(date)).format('DD/MM/YYYY')
        }
    },
    created: async function(){
        let data = await axios.get('http://cukcuk.manhnv.net/v1/Employees')
        this.info = data.data
    }
}

</script>
<style scoped>

</style>


