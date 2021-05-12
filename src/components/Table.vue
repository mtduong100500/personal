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
export default {
    name: 'Table',
    data(){
        return{
            employees:[
                {
                    EmployeeCode: "NV128934857",
                    Fullname: "Nguyễn Thị Diệu Linh",
                    Gender: "Nữ",
                    DateOfBirth: "01/01/2000",
                    PhoneNumber: "094853511",
                    Email: "1@gmail.com",
                    Position: null,
                    Department: null,
                    Salary: 200000,
                    WorkCondition: "Thử việc"
                },
                {
                    EmployeeCode: "NV128934857",
                    Fullname: "Nguyễn Thị Diệu Linh",
                    Gender: "Nữ",
                    DateOfBirth: "01/01/2000",
                    PhoneNumber: "094853511",
                    Email: "1@gmail.com",
                    Position: null,
                    Department: null,
                    Salary: 200000,
                    WorkCondition: "Thử việc"
                },
                {
                    EmployeeCode: "NV128934857",
                    Fullname: "Nguyễn Thị Diệu Linh",
                    Gender: "Nữ",
                    DateOfBirth: "01/01/2000",
                    PhoneNumber: "094853511",
                    Email: "1@gmail.com",
                    Position: null,
                    Department: null,
                    Salary: 200000,
                    WorkCondition: "Thử việc"
                },
                {
                    EmployeeCode: "NV128934857",
                    Fullname: "Nguyễn Thị Diệu Linh",
                    Gender: "Nữ",
                    DateOfBirth: "01/01/2000",
                    PhoneNumber: "094853511",
                    Email: "1@gmail.com",
                    Position: null,
                    Department: null,
                    Salary: 200000,
                    WorkCondition: "Thử việc"
                }
            ]
        }
    }
}

</script>


