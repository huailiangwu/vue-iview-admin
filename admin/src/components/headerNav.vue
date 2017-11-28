<template>
 <div class="header_wrap" >
   <div class="logo lf" :style="{width:leftWidth+'px'}">
      <span class="max_logo" v-if="isMax">长河分享平台</span>
      <span class="min_logo" v-else>长河</span>
   </div>
   <div class="nav_wrap">
      <div class="header_nav lf">
        <div class="left_btn_wrap" @click="changeLeft()">
             <Icon type="navicon-round" size="25" class="left_btn" v-if="isMax" color="white"></Icon>
             <Icon type="close-round"   size="25" class="left_btn"  color="white" v-else ></Icon>
        </div>
        <div class="header_nav_wrap">
          <Menu mode="horizontal" theme="dark" active-name="2">
              <MenuItem name="2">
                  <Icon type="ios-people"></Icon>
                  共享按摩椅
              </MenuItem>
              <Submenu name="3">
                  <template slot="title">
                      <Icon type="stats-bars"></Icon>
                      共享模块
                  </template>
                  <MenuGroup>
                      <MenuItem name="3-1">共享娃娃机</MenuItem>
                      <MenuItem name="3-2">共享冰箱</MenuItem>
                      <MenuItem name="3-3">共享摇摇车</MenuItem>
                  </MenuGroup>
              </Submenu>
        </Menu>
       </div>
      </div>
      <div class="user_center rt">
        <Menu mode="horizontal" theme="dark" active-name="2">
          <MenuItem name="news">
           <Icon type="information-circled"></Icon>
            <Badge dot>
              <span href="#" class="demo-badge">消息中心</span>
            </Badge>
          </MenuItem>
          <Submenu name="4">
                <template slot="title">
                    <Icon type="stats-bars"></Icon>
                    个人中心
                </template>
                <MenuGroup>
                    <MenuItem name="4-1">修改密码</MenuItem>
                    <MenuItem name="4-3">退出</MenuItem>
                </MenuGroup>
          </Submenu>
          </Menu>    
      </div>
   </div>  
 </div>  
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {
    changeLeft() {
      this.$emit("changeLeftWidth");
    }
  },
  props: ["leftWidth", "isMax"]
};
</script>
<style scoped>
.header_wrap {
  width: 100%;
  height: 50px;
  background: #495060;
  display: table;
}
.logo {
  width: 200px;
  height: 50px;
  transition: 0.5s;
  background: #1e1f1c;
  display: table-cell;
  vertical-align: middle;
}
.logo span {
  display: inline-block;
  width: 100%;
  height: 50px;
  line-height: 50px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 2px;
}
.nav_wrap {
  width: 100%;
  height: 50px;
  background: #495060;
  display: table-cell;
}
.ivu-menu-horizontal {
  height: 50px;
  line-height: 50px;
}
.header_nav_wrap {
  display: table-cell;
}
.left_btn_wrap {
  display: table-cell;
  cursor: pointer;
  width: 50px;
  vertical-align: middle;
}
.header_nav {
  display: table;
}
.left_btn {
  transition: 0.5s;
  text-align: center;
}
</style>
<style>
.ivu-menu-item-group-title {
  height: 0;
}
.ivu-select-dropdown {
  padding: 0;
}
.ivu-menu-drop-list .ivu-menu-item {
  background: #495060;
  padding: 15px 20px !important;
  color: #eee !important;
  -webkit-transition: 0.5s duration timing-function delay;
  -moz-transition: 0.5s duration timing-function delay;
  transition: 0.5s duration timing-function delay;
}
.ivu-menu-drop-list .ivu-menu-item:hover {
  color: black !important;
}
</style>



