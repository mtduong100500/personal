<template>
    <div class="header">
        <div class="cb-box">
            <select name="restaurant">
                <option value="">Nhà hàng Biển Đông</option>
                <option value="">Nhà hàng Biển Tây</option>
                <option value="">Nhà hàng Biển Nam</option>
                <option value="">Nhà hàng Biển Bắc</option>
            </select>
        </div>
        <div class="info">
            <img src="../assets/icon/avatar-default.png" class="avatar">
            <p>Mai Thái Dương</p>
            <button class="info-option"><img src="../assets/icon/option.png" ></button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Header'
}
</script>
