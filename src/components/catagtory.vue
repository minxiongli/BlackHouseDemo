<template>
  <div>
    <ul class="channel">
      <li @click="$store.commit('catagtory/updatecurrentCatagtory',item.id)" :class="{'select': item.id === currentCatagtory}" v-for="item in catagtory" :key="item.id">{{item.name}}</li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "catagtory",
  computed:{
    ...mapGetters(['catagtory','currentCatagtory'])
  },
  created(){
    //调用子模块的active
    this.$store.dispatch('catagtory/getCatagtory')
  }
  
};
</script>
<style lang="">
</style>