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
      <template v-slot:item.Gender="{ item }">
        <span>{{ formatGender(item.Gender) }}</span>
      </template>
      <template v-slot:item.DateOfBirth="{ item }">
        <span>{{ formatDate(item.DateOfBirth) }}</span>
      </template>
      <template v-slot:header.name="{ header }">
        {{ header.text.toUpperCase() }}
      </template>
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title class="font-weight-bold">Danh sách nhân viên</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="600px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="#019160" dark v-bind="attrs" v-on="on">
                Thêm nhân viên
              </v-btn>
            </template>
            
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.EmployeeCode"
                        label="Mã nhân viên"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.FullName"
                        label="Họ và tên"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.Gender"
                        label="Giới tính"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-menu
                        v-model="menu2"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            v-model="editedItem.DateOfBirth"
                            label="Picker without buttons"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          v-model="editedItem.DateOfBirth"
                          @input="menu2 = false"
                        ></v-date-picker>
                      </v-menu>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.PhoneNumber"
                        label="Điện thoại"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.Email"
                        label="Email"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.Position"
                        label="Chức vụ"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.Department"
                        label="Phòng ban"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.Salary"
                        label="Mức lương cơ bản"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.WorkCondition"
                        label="Tình trạng công việc"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">
                  Cancel
                </v-btn>
                <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline"
                >Are you sure you want to delete this item?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
          
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
        value: "CustomerCode",
        width: "200px"
      },
      { text: "Họ và đệm", value: "FirstName" },
      { text: "Tên", value: "LastName" },
      { text: "Họ và tên", value: "FullName" },
      { text: "Giới tính", value: "Gender" },
      { text: "Địa chỉ", value: "Address" },
      { text: "Ngày sinh", value: "DateOfBirth" },
      { text: "Số điện thoại", value: "PhoneNumber" },
      { text: "Khoản vay", value: "DebitAmount" },
      { text: "Mã thẻ thành viên", value: "MemberCardCode" },
      { text: "Tên công ty", value: "CompanyName"},
      { text: "Mã số thuế công ty", value: "CompanyTaxCode"},
      { text: "Tình trạng theo dõi", value: "IsStopFollow"},
      { text: "Ngày tạo", value: "CreatedDate"},
      { text: "Người tạo", value: "CreatedBy"},
      { text: "Ngày chỉnh sửa", value: "ModifiedDate"},
      { text: "Người chỉnh sửa", value: "ModifiedBy"},
      { text: "Actions", value: "actions", sortable: false },
    ],
    customers: [],
    editedIndex: -1,
    editedItem: {
      CustomerCode: "",
      FullName: "",
      Gender: 0,
      DateOfBith: "",
      PhoneNumber: "",
      Email: "",
      Position: "",
      Department: "",
      Salary: 0,
      WorkCondition: "",
    },
    defaultItem: {
      EmployeeCode: "",
      FullName: "",
      Gender: 0,
      DateOfBith: "",
      PhoneNumber: "",
      Email: "",
      Position: "",
      Department: "",
      Salary: 0,
      WorkCondition: "",
    },
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

  created() {
    var data = axios.get("https://localhost:5001/api/v1/customers");
    // this.customers = data.data;
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