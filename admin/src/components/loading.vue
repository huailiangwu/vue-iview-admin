<template>
  <div class="loading-wrap">
     <div class="loading-img">
       <img src="../assets/loading.gif">
     </div>
  </div>  
</template>
<script>
export default {};
</script>
<style scoped>
.loading-wrap{
  width: 100%;
  height: 100%;
  position:absolute;
  top: 50px;
  z-index: 100;
  background: white;

}
.loading-wrap .loading-img{
  width: 100px;
  height: 100px;
  margin: 20% auto;
}
.loading-img img{
  display: inline-block;
  width: 100%;
  height: 100%;
}

</style>

