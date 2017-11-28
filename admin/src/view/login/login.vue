<template>
  <div class="login_wrap ">
     <div class="login animated fadeInUp">
       <div class="login_logo">
         <h1>长河分享平台</h1>
       </div>
       <div class="unifi_login">
         <p>统一登入</p>
       </div>
       <form action="">
         <div class="user_name">
           <span class="user_icon"> <Icon type="android-person" size="20"></Icon></span>
           <span class="user_input"> <i-input type="text" size="large" placeholder="账号"></i-input></span>   
         </div>
         <div class="pswd">
           <span class="pswd_icon"> <Icon type="android-person" size="20"></Icon></span>
           <span class="pswd_input"> <i-input type="password" size="large" placeholder="密码"></i-input></span>   
         </div>
         <div class="auth_code">
           <span class="auth_code_input"> <i-input size="large" placeholder="账号"></i-input></span> 
           <span class="auth_code_img"></span> 
         </div>
         <div class="submit">
             <span class="sub_btn"><i-button type="success" size="large" long="true" @click="login">登入</i-button></span> 
             <span class="reset_btn"><i-button type="info" size="large" long="true">重置</i-button></span>
         </div> 
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: ""
    };
  },
  methods: {
    login(){
      this.$router.push("/index");
    }
  }
};
</script>
<style lang="css" scoped >
@import "login.css";
</style>
