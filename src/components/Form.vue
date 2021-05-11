<template>
<div class="form-detail" >
    <div class="form-wrap">
        <div class="form" >
            <h1>Thông tin nhân viên</h1>
            <form action="#">
                <div class="content">
                    <div>
                        <button class="avatar"></button>
                        <p>(Vui lòng chọn ảnh có định dạng .jpp .ipeg .png .gif)</p>
                        
                    </div>
                    <div>
                        <div>
                            <h3>A. THÔNG TIN CHUNG</h3>
                            <hr>
                            <div class="input-form"><label for="">Mã nhân viên(*)</label><input type="text"></div>
                            <div class="input-form"><label for="">Họ và tên(*)</label><input type="text"></div>
                            <div class="input-form"><label for="">Ngày sinh</label><input type="text"></div>
                            <div class="input-form"><label for="">Giới tính</label><input type="text"></div>
                            <div class="input-form"><label for="">Số CTMND/ Căn cước (*)</label><input type="text"></div>
                            <div class="input-form"><label for="">Ngày cấp</label><input type="text"></div>
                            <div class="input-form"><label for="">Nơi cấp</label><input type="text"></div>
                            <div class="input-form"><label for="">Email</label><input type="text"></div>
                            <div class="input-form"><label for="">Số điện thoại</label><input type="text"></div>
                            </div>
                            <div >
                                <h3>B. THÔNG TIN CÔNG VIỆC</h3>
                                <hr>
                            <div class="input-form"><label for="">Vị trí</label><input type="text"></div>
                            <div class="input-form"><label for="">Phòng ban</label><input type="text"></div>
                            <div class="input-form"><label for="">Mã số thuế cá nhân</label><input type="text"></div>
                            <div class="input-form"><label for="">Mức lương cơ bản</label><input type="text"></div>
                            <div class="input-form"><label for="">Ngày gia nhập công ty</label><input type="text"></div>
                            <div class="input-form"><label for="">Tình trạng công việc</label><input type="text"></div>
                        </div>
                    </div>
                    <div class="btn">
                        <button class="btn-cancel" ref="close">Hủy</button>
                        <button class="btn-save">Lưu</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name:"Form",
    props:['showForm']
}
</script>