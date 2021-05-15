<template>
    <div class="navbar">
        <div>
            <button class="logoico"><img src="../assets/img/toggle.png" width="24" class="toggle-btn" ></button>
            <a><img src="../assets/cukcuk-logo.png" class="logo"></a>
        </div>
        <div class="navbar-content">
            <ul>
                <li><router-link to="/tongquan"><img src="../assets/icon/dashboard.png" class="nav-items"><span>Tổng quan</span></router-link></li>
                <li><router-link to="/baocao"><img src="../assets/icon/report.png" class="nav-items"><span>Báo cáo</span></router-link></li>
                <li><router-link to="/muahang"><img src="../assets/icon/dashboard.png" class="nav-items"><span>Mua hàng</span></router-link></li>
                <li><router-link to="/danhmuckhachhang"><img src="../assets/icon/dic-employee.png" class="nav-items"><span>Danh mục khách hàng</span></router-link></li>
                <li><router-link to="/"><img src="../assets/icon/dic-employee.png" class="nav-items"><span>Danh mục nhân viên</span></router-link></li>
                <li><router-link to="/hethong"><img src="../assets/icon/setting.png" class="nav-items"><span>Hệ thống</span></router-link></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Sidebar'
}
</script>
