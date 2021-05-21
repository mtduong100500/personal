<template>
    <div class="d-flex px-4 pt-4">
        <div class="" style="width: 220px;">
            <v-select
            :items="items"
            dense
            placeholder="Nhà hàng Biển Đông"
            outlined
            
            ></v-select>
        </div>
        <v-spacer></v-spacer>
        <div class="d-flex justify-center align-start">
            <v-avatar size="24">
                <img
                    src="../assets/icon/avatar-default.png"
                    alt="Duong"
                >
            </v-avatar>
            <v-toolbar-title class="mx-4">Mai Thái Dương</v-toolbar-title>
            <v-btn icon class="d-flex align-start">
                <v-img src="../assets/icon/option.png" height="24" contain></v-img>
            </v-btn>
        </div>
    </div>
    
</template>

<script>
export default {
    name: "Header",
    data: () => ({
      items: ['Nhà hàng Biển Đông', 'Nhà hàng Biển Tây', 'Nhà hàng Biển Nam', 'Nhà hàng Biển Bắc'],
    }),
}
</script>
<style scoped>

.v-responsive__content:hover{
    background-color: #ffffff;
}

</style>