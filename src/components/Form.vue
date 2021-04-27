<template>
  <div class="p-4 form-body shadow-lg mb-5 bg-white">
    <ValidationObserver ref="observer" v-slot="{ handleSubmit }" v-for="(step, index) in listPage" :key="index" >
      <form @submit.prevent="handleSubmit(step.id === totalPage ? submitForm : nextStep)" v-if="step.id === count">
        <ValidationProvider v-slot="{ errors, classes }" v-for="(content, index) in step.form" :key="index" :name="content.name" :rules="content.rules">
          <div class="form-group" :class="{'form-check' : isCheckBox(content.type)}">
            <label v-if="!isCheckBox(content.type)">{{content.name}}</label>
            <input v-if="!isSelect(content.type)" v-model="content.model" :type="content.type" :class="{'form-check-input' : isCheckBox(content.type), 'form-control' : !isCheckBox(content.type)}">
            <label v-if="isCheckBox(content.type)" class="form-check-label"> I accpet terms & conditions</label>

            <select class="form-control" v-if="isSelect(content.type)" :type="content.type" v-model="content.model">
              <option value="Friend">Friend</option>
              <option value="People">People</option>
            </select>
            <span :class="classes" class="error">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <div class="menu-button mt-4 p-4 justify-content-md-center">
          <button class="btn btn-info mr-4" type="button" v-if="count < totalPage" @click.prevent="prevStep"> PREVIOUS </button>
          <button class="btn btn-primary mr-4" v-if="count < totalPage" > NEXT </button>
          <button class="btn btn-danger mr-4" type="button" @click="resetStep" v-if="count === totalPage"> RESET </button>
          <button class="btn btn-success mr-4" type="submit" v-if="count === totalPage"> FINISH </button>
      </div>
      </form>
    </ValidationObserver>

  </div>
</template>

<script>
export default {
  data: function() {
    return {
      fullName: "",
      email: "",
      yourCompanyName: "",
      numberEmployees: "",
      selectOption: "",
      checkOption: false,
      // isSubmit: false
    };
  },
  props: {
    count: Number,
    listPage: {
      type: Array,
      default : () => {
        return []
      }
    },
    totalPage: {
      type: Number,
      default : () => {
        return []
      }
    },
  },
  
  methods: {
    nextStep() {
      this.$emit("nextStep");
    },
    prevStep() {
      this.$emit("prevStep");
    },
    resetStep() {
      this.fullName= "";
      this.email= "";
      this.yourCompanyName= "";
      this.numberEmployees= "";
      this.selectOption= "";
      this.checkOption= "";
      this.isSubmit = false;
      this.$emit("resetStep");
    },
    submitForm(){
      this.$emit("submitForm");
    },
    isCheckBox(item){
      if(item === 'checkbox')
        return true;
      return false;
    },
    isSelect(item){
      if(item === 'select')
        return true;
      return false;
    }
  },
};
</script>
  
<style scoped>
.form-body{
    background-color: #e9ecef;
    border-radius: 15px;
  }
  .error{
    color: red;
  }
</style>
