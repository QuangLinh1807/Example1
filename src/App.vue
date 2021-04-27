<template>
  <div id="container">
    <div class="row justify-content-md-center ">
      <div class="col-md-8 mt-5 ">
        <app-header
          :listPage="listPage"
          :count="count"
          :totalPage="totalPage"
        ></app-header>
      </div>
      <div class="col-md-8 mt-4">
        <app-form
        class="justify-content-md-center"
          @nextStep="nextStep"
          @prevStep="prevStep"
          @resetStep="resetStep"
          @submitForm="submitForm"
          :listPage="listPage"
          :count="count"
          :totalPage="totalPage"
          
        ></app-form>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Form from "./components/Form.vue";
export default {
  components: {
    appHeader: Header,
    appForm: Form,
  },
  data: function() {
    return {
      count: 1,
      listPage: [
        {
          id: 1,
          active: true,
          label: "About Your",
          form:[
            {
              model:'',
              name: 'Name',
              type: 'text',
              rules: 'required'
            },
            {
              model:'',
              name: 'Email',
              type: 'text',
              rules: 'required|email'
            },
          ]
        },
        {
          id: 2,
          active: false,
          label: "About Your Company",
          form:[
            {
              model:'',
              name: 'Company Name',
              type: 'text',
              rules: 'required'
            },
            {
              model:'',
              name: 'Number Of Employee',
              type: 'text',
              rules: 'required|numeric',
            },
          ]
        },
        {
          id: 3,
          active: false,
          label: "Fishsing Up",
          form:[
            {
              model:'',
              name: 'Select Option',
              type: 'select',
              rules: 'required'
            },
            {
              model:'',
              name: 'Checkbox option',
              type: 'checkbox',
              rules: 'required',
            },
          ]
        },
      ],
    };
  },
  computed: {
    totalPage() {
      return this.listPage.length;
    },
  },
  methods: {
    nextStep() {
      if 
      (this.count === this.totalPage) {
        this.count = this.totalPage;
      } else if (this.count < 3) {
        this.count++;
      }
      this.listPage[this.count-1].active = true;
    },
    prevStep() {
      if (this.count === 1) {
        this.count = 1;
      } else if (this.count > 1) {
        this.count--;
        this.listPage[this.count-1].active = true;
      }
    },
    resetStep() {
      this.count = 1;
      this.listPage = [...this.listPage].map(item => {
        if(item.id !== this.count){
          item.active = false;
        }
        return item;
      })
      this.listPage.forEach(item=>{
        item.form.forEach(i =>{
          i.model = '';
        })
      })
    },
    submitForm() {
        alert("Successfully!!!");
    }
    
  },
};
</script>
  
<style scoped>

</style>
