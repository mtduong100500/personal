<template>
    <v-app-bar 
    app
    flat
    color="white"
    >
        <v-col
        class="d-flex"
        cols="2"
        sm="2"
        >
            <v-select
            :items="items"
            label="Nhà Hàng Biển Đông"
            dense
            solo
            ></v-select>
        </v-col>
        <v-spacer></v-spacer>
        <v-avatar size="24">
            <img
                src="../assets/icon/avatar-default.png"
                alt="Duong"
                
            >
        </v-avatar>
        <v-toolbar-title class="mx-4">Mai Thái Dương</v-toolbar-title>
        <v-btn icon>
            <v-img src="../assets/icon/option.png" height="24" contain></v-img>
        </v-btn>
    </v-app-bar>
</template>

<script>
export default {
    name: "Header",
    data: () => ({
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    }),
}
</script>