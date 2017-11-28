<template>
<div class="wrap">
  <div class="my_header">
     <header-nav :leftWidth="leftWidth" :isMax="isMax" @changeLeftWidth="changeLeftWidth"></header-nav>
 </div>
  <div class="center" >
    <div class="left_nav" :style="{width:leftWidth+'px'}">
      <left-nav :leftWidth="leftWidth" :isMax="isMax" @addTabs="addTabs" :activeMenu="activeValue"></left-nav>
    </div>
    <div class="data_show">
      <div class="my-tabs">
        <Tabs type="card" size="small" @on-tab-remove="closeTab" :value="activeValue"  @on-click="clickTabs">
          <TabPane 
             v-for="(tab_v,tab_k) in tabs" 
             :key="tab_k"
             v-if="tab_v.status"  
             :label="tab_v.name"
             :name="tab_v.path"
             :icon="tab_v.icon" 
             :closable="!tab_k == 0"></TabPane>
        </Tabs>
      </div>
      <div class="table_data">
        <loading v-if="isLoading"></loading>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
      <div class="my-footer">
         <my-footer></my-footer>
      </div>
    </div>
  </div>
 </div> 
</template>
<script>
import HeaderNav from "@/components/headerNav";
import LeftNav from "@/components/leftNav";
import Menu from "@/utils/consts/index";
import myFooter from "@/components/footer";
import Loading from "@/components/loading";
import store from "@/vuex/store";
import Vue from "vue";
import { mapState } from "vuex";
export default {
  data() {
    return {
      isMax: true,
      leftWidth: 200,
      tabs: [],
      activeValue: "/home" //当前激活的tabs
    };
  },
  created() {
    // 初始化 tab页
    this.initTabs();
  },
  computed: {
    ...mapState(["isLoading"])
  },
  // 组件
  components: {
    HeaderNav,
    LeftNav,
    myFooter,
    Loading
  },
  methods: {
    changeLeftWidth() {
      if (this.isMax) {
        this.leftWidth = 50;
      } else {
        this.leftWidth = 200;
      }
      this.isMax = !this.isMax;
    },
    // 点击x关闭tabs

    closeTab(name) {
      for (var i in this.tabs) {
        if (this.tabs[i].path == name) {
          this.$set(this.tabs[i], "status", false);
          this.activeValue = this.tabs[i - 1].path;
          this.$router.push(this.tabs[i - 1].path);
          break;
        }
      }
    },
    initTabs() {
      let menu = Menu;
      let _this = this;
      for (var i in menu) {
        let curMenu = menu[i].children;
        if (curMenu) {
          for (var j in curMenu) {
            _this.tabs.push(curMenu[j]);
          }
        } else {
          _this.tabs.push(menu[i]);
        }
      }
    },

    // 点击左侧菜单展示内容
    addTabs(name) {
      let menu = Menu;
      let _this = this;
      for (var i in menu) {
        let curMenu = menu[i].children;
        if (curMenu) {
          for (var j in curMenu) {
            if (curMenu[j].path == name) {
              _this.activeValue = curMenu[j].path;
              this.$router.push(curMenu[j].path);
              if (curMenu[j].status) {
                return;
              } else {
                _this.$set(curMenu[j], "status", true);
                break;
              }
            }
          }
        } else {
          if (menu[i].path == name) {
            _this.activeValue = menu[i].path;
            this.$router.push(menu[i].path);
            if (menu[i].status) {
              return;
            } else {
              _this.$set(menu[i], "status", true);
              break;
            }
          }
        }
      }
    },
    clickTabs(name) {
      this.activeValue = name;
      this.$router.push(name);
    }
  },
  store
};
</script>
<style scoped>
@import "index.css";
</style>
<style>
.my-tabs .ivu-tabs-nav .ivu-tabs-tab .ivu-icon {
  width: 14px;
  height: 14px;
  margin-right: 10px;
}
</style>


