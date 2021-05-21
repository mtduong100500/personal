<template>
  <div class="d-flex justify-between">
    <div class="d-flex align-center">
        <v-col
        cols="12"
        md="6"
        class="pa-0"
        >
            <v-text-field
                placeholder="Tìm kiếm theo Mã, Tên hoặc Số điện thoại"
                outlined
                prepend-inner-icon="mdi-magnify"
                dense
            ></v-text-field>
        </v-col>
        <v-col class="px-4">
            <v-select
            dense
            placeholder="Tất cả phòng ban"
            outlined
            
            ></v-select>
        </v-col>
        <v-col>
            <v-select
            dense
            placeholder="Tất cả vị tri"
            outlined
            
            ></v-select>
        </v-col>
    </div>
    <v-spacer></v-spacer>
    <div>
        <v-col>
            <v-btn icon>
                <v-img src="../assets/icon/refresh.png"></v-img>
            </v-btn>
        </v-col>
    </div>
  </div>
</template>

<script>
export default {
    name:"Toolbar"
}
</script>

<style>
.v-text-field.v-text-field--solo .v-input__control{
    min-height: 40px;
}

</style>