<template>
<div>
  <v-data-table
    :headers="headers"
    :items="employees"
    :page.sync="page"
    :items-per-page="itemsPerPage"
    sort-by="id"
    class="elevation-1"
    hide-default-footer
    @page-count="pageCount = $event"
  >
    <template v-slot:item.Gender="{ item }">
        <span>{{ formatGender(item.Gender) }}</span>
    </template>
    <template v-slot:item.DateOfBirth="{ item }">
          <span>{{ formatDate(item.DateOfBirth) }}</span>
      </template>
      <template v-slot:item.Salary="{ item }">
          <span>{{ formatMoney(item.Salary) }}</span>
      </template>
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Danh sách nhân viên</v-toolbar-title>
        

        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="600px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="#019160"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
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
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.EmployeeCode"
                      label="Mã nhân viên"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.FullName"
                      label="Họ và tên"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.Gender"
                      label="Giới tính"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.DateOfBirth"
                      label="Ngày sinh"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.PhoneNumber"
                      label="Điện thoại"
                    ></v-text-field>
                    <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                  
                    <v-text-field
                      v-model="editedItem.Email"
                      label="Email"
                    ></v-text-field>
                    </v-col>
                    <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.Position"
                      label="Chức vụ"
                    ></v-text-field>
                    </v-col>
                    <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.Department"
                      label="Phòng ban"
                    ></v-text-field>
                    </v-col>
                    <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.Salary"
                      label="Mức lương cơ bản"
                    ></v-text-field>
                    </v-col>
                    <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.WorkCondition"
                      label="Tình trạng công việc"
                    ></v-text-field>
                    </v-col>
                  </v-col>
                </v-row>
              </v-container>
              
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
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
import moment from 'moment'
import axios from 'axios'
  export default {
    data: () => ({
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'Mã nhân viên',
          align: 'start',
          sortable: false,
          value: 'EmployeeCode',
        },
        { text: 'Họ và tên', value: 'FullName',  },
        { text: 'Giới tính', value: 'Gender' },
        { text: 'Ngày sinh', value: 'DateOfBirth' },
        { text: 'Số điện thoại', value: 'PhoneNumber' },
        { text: 'Email', value: 'Email' },
        { text: 'Chức vụ', value: 'Position' },
        { text: 'Phòng ban', value: 'Department' },
        { text: 'Mức lương cơ bản', value: 'Salary'},
        { text: 'Tình trạng công việc', value: 'WorkCondition' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      employees: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created: async function() {
      var data = await axios.get('http://cukcuk.manhnv.net/v1/Employees')
      this.employees = data.data
    },

    methods: {
      initialize(){

      },

      editItem (item) {
        this.editedIndex = this.employees.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.employees.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.employees.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.employees[this.editedIndex], this.editedItem)
        } else {
          this.employees.push(this.editedItem)
        }
        this.close()
      },
      formatGender(value){
            return value === 0 ? "Nữ" : value === 1 ? "Nam" : "Khác"
      },
      formatMoney(money){
          return money === null ? "0" : !isNaN(money) ? money.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1.") : money
      },
      formatDate(date){
          return moment(String(date)).format('DD/MM/YYYY')
      }
    },
  }
</script>

<style scoped>

</style>