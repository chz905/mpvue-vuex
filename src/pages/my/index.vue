<template>
    <div>
        <a href="../my_coupon/main?id=123">跳转</a>
    </div>
</template>

<script>
import api from "@/api";
import Com from '../../components/my_components'
export default {
  data() {
    return {};
  },
  onLoad(){
      console.log(this.$root.$mp.query)
  },
  onShow() {
    // this.getMemberUserInfo();
  },
  components:{
      Com
  },
  methods: {
    async getMemberUserInfo() {
      const josn = await api.getMemberUserInfo({});
      if(json.returnCode){
        console.log(josn);
      }
      
    }
  }
};
</script>

<style>
</style>
