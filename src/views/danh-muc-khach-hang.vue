<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="customers"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      sort-by="id"
      hide-default-footer
      @page-count="pageCount = $event"
      class="px-4"
    >
      <template v-slot:item.gender="{ item }">
        <span>{{ formatGender(item.gender) }}</span>
      </template>
      <template v-slot:item.dateOfBirth="{ item }">
        <span>{{ formatDate(item.dateOfBirth) }}</span>
      </template>
      <template v-slot:header.name="{ header }">
        {{ header.text.toUpperCase() }}
      </template>
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title class="font-weight-bold">Danh sách khách hàng</v-toolbar-title>
          <v-spacer></v-spacer>

        </v-toolbar>
        <Toolbar />
      </template>
      <Toolbar />
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
    </v-data-table>
    
    <div class="text-center pt-2">
      <v-pagination
        v-model="page"
        :length="pageCount"
        color="#019160"
        circle
      ></v-pagination>
    </div>
  </div>
</template>
<script>
import moment from "moment";
import axios from "axios";
import Toolbar from "../components/Toolbar"
export default {
name: "Danhmuckhachhang",
  components:{
    Toolbar
  },
  data: () => ({
    menu2: false,
    page: 1,
    pageCount: 0,
    itemsPerPage: 13,
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Mã khách hàng",
        align: "start",
        sortable: false,
        value: "customerCode",
        width: "200px"
      },
      { text: "Họ và đệm", value: "firstName", width: "200px" },
      { text: "Tên", value: "lastname", width: "200px" },
      { text: "Họ và tên", value: "fullname", width: "200px" },
      { text: "Giới tính", value: "gender", width: "200px" },
      { text: "Địa chỉ", value: "address", width: "200px" },
      { text: "Ngày sinh", value: "dateOfBirth", width: "200px" },
      { text: "Số điện thoại", value: "phoneNumber", width: "200px" },
      { text: "Khoản vay", value: "debitAmount", width: "200px" },
      { text: "Mã thẻ thành viên", value: "memberCardCode", width: "200px" },
      { text: "Tên công ty", value: "companyName", width: "200px"},
      { text: "Mã số thuế công ty", value: "companyTaxCode" , width: "200px"},
      { text: "Tình trạng theo dõi", value: "isStopFollow" , width: "200px"},
      { text: "Ngày tạo", value: "createdDate" , width: "200px"},
      { text: "Người tạo", value: "createdBy" , width: "200px"},
      { text: "Ngày chỉnh sửa", value: "modifiedDate" , width: "200px"},
      { text: "Người chỉnh sửa", value: "modifiedBy" , width: "200px"},
      { text: "Actions", value: "actions", sortable: false },
    ],
    customers: [],
    // editedIndex: -1,
    // editedItem: {
    //   CustomerCode: "",
    //   FullName: "",
    //   Gender: 0,
    //   DateOfBith: "",
    //   PhoneNumber: "",
    //   Email: "",
    //   Position: "",
    //   Department: "",
    //   Salary: 0,
    //   WorkCondition: "",
    // },
    // defaultItem: {
    //   EmployeeCode: "",
    //   FullName: "",
    //   Gender: 0,
    //   DateOfBith: "",
    //   PhoneNumber: "",
    //   Email: "",
    //   Position: "",
    //   Department: "",
    //   Salary: 0,
    //   WorkCondition: "",
    // },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nhân viên mới" : "Sửa nhân viên";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created: async function () {
    var data = await axios.get("https://localhost:44364/api/v1/customers");
    this.customers = data.data;
    // console.log(this.customers)
  },

  methods: {
    editItem(item) {
      this.editedIndex = this.employees.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.employees.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      axios.delete(
        `http://cukcuk.manhnv.net/v1/Employees/${this.editedItem.EmployeeId}`
      );
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.employees[this.editedIndex], this.editedItem);
        axios.put(
          `http://cukcuk.manhnv.net/v1/Employees/${this.editedItem.EmployeeId}`,
          this.editedItem
        );
      } else {
        axios.post(`http://cukcuk.manhnv.net/v1/Employees`, this.editedItem);
      }
      this.close();
    },

    formatGender(value) {
      return value === 0 ? "Nữ" : value === 1 ? "Nam" : "Khác";
    },
    formatMoney(money) {
      return money === null
        ? "0"
        : !isNaN(money)
        ? money.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1.")
        : money;
    },
    formatDate(date) {
      return moment(String(date)).format("DD/MM/YYYY");
    },
  },
};
</script>

<style>

.text-start span {
  font-size: 13px;
}


.v-toolbar__content{
  padding: 0;
  margin: 0;
}
.col{
  padding: 0;
  margin: 0;
}
</style>