<template>
  <div>
    <div class="progress">
      <div
        class="progress-bar rounded"
        role="progressbar"
        :style="{ width: (count * 100) / totalPage + '%' }"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
    <div class="nav-menu">
      <div class="p-3 d-flex justify-content-md-center shadow-lg bg-white">
        <div
          class="bg-light p-3 ml-5 mr-5 col-3 rounded "
          v-for="item in listPage"
          :key="item.id"
          :class="{ active: count >= item.id }"
        >
          <span class="rounded p-2 numberStep">{{ item.id }}</span>
          <span class="ml-3">{{ item.label }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listPage: Array,
    count: Number,
    totalPage: Number,
  },
};
</script>

<style scoped>
.active {
  border: 1px solid blue;
  border-radius: 15px;
}
.numberStep{
  background-color: #6a7176;
  color: #ffffff;
  border-radius: 50% !important;
}
.nav-menu{
  background-color: #e9ecef;
  margin-top: 15px;
  border-radius: 10px;
}
</style>
