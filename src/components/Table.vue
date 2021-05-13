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
                <tr v-for="(employee,index) in employees"
                    :key="index"    
                >
                    <td v-for="(info, index1) in employee"
                        :key="index1"
                    >
                        {{info}}
                    </td>  
                </tr> 
        </table>
    </div>
    </div>
</template> 


<script>
import data from '../data.js'
export default {
    name: 'Table',
    data(){
        return{
            employees: data
        }
    }
}

</script>


