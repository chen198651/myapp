<template>
  <div class="home">
  </div>
</template>

<script>
export default {
  name: 'Home',
  created() {
    this.axios({
      url:'/service/subway?_1524027031909&srhdata=1100_drw_beijing.json'
    }).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  },
  methods:{

  }
}
</script>

<style lang="scss" scoped>

</style>
