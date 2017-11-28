<template>
  <div class="left-wrap"  :style="{width:leftWidth+'px'}" :class="{'min-hide-text': leftWidth == 50}">
     <Menu theme="dark" :active-name="activeMenu" width="auto" @on-select="getName" >
        <template v-for="(menu_v,menu_k) in menu">
           <Submenu v-if="menu_v.children" :name="menu_v.name" :key="menu_k">
            <template slot="title">
                <Icon :type="menu_v.icon"  :size="iconSize" class="hide-text"></Icon>
                <span class="hide-text" v-text="menu_v.name"></span>
                 <Tooltip placement="right-start" v-if="!isMax" >
                    <span class="tip-title"><Icon :type="menu_v.icon"  :size="iconSize"></Icon></span>
                    <div slot="content">
                       <div class="tip-concent" v-for="(menuChild_v,menuChild_k) in menu_v.children" :key="menuChild_k" >
                            <Icon :type="menuChild_v.icon"></Icon>
                            <span v-text="menuChild_v.name"></span>
                       </div>
                    </div>   
                </Tooltip> 
            </template>
            <MenuItem  v-for="(menuChild_v,menuChild_k) in menu_v.children" :key="menuChild_k"  :name="menuChild_v.path"  class="hide-text">
              <Icon :type="menuChild_v.icon" :size="iconSize" :key="menuChild_k"></Icon>
              <span class="hide-text" v-text="menuChild_v.name" :key="menuChild_k"></span>
            </MenuItem>
          </Submenu>
          <MenuItem v-else :name="menu_v.path" :key="menu_k">
              <Icon :type="menu_v.icon" :size="iconSize" :key="menu_k"></Icon>
              <span class="hide-text" v-text="menu_v.name" :key="menu_k"></span>
         </MenuItem>
       </template>
      </Menu>
  </div>
</template>
<script>
import  Menu from "@/utils/consts/index"
export default {
  data() {
    return {
    menu: Menu
    };
  },
  computed: {
    iconSize() {
      return this.isMax ? 14 : 24;
    }
  },
 methods: {
    getName(name){
     this.$emit("addTabs",name)
    }  
  },
  props: ["leftWidth", "isMax",'activeMenu']
};
</script>
<style>
.left-wrap {
  height: 100%;
  overflow-y: auto;
  transition: 0.5s;
}
.min-hide-text .hide-text {
  display: none;
}
.min-hide-text .ivu-menu-vertical .ivu-menu-submenu-title-icon {
  display: none;
}
.min-hide-text .ivu-menu-vertical .ivu-menu-item{
 padding: 14px;
}
.min-hide-text  .ivu-menu-submenu-title{
 padding: 14px 0;
 text-align:center;
}
.min-hide-text  .ivu-menu-submenu-title .ivu-icon{
    transition: .5s;
    padding: 0 14px;
}
.left-wrap .ivu-menu-submenu ,.ivu-menu-item{
  text-align: left;
}
.left-wrap .ivu-tooltip-rel {
  position: relative;
  width: 100%;
  height: 100%
}
.left-wrap .ivu-tooltip-rel .ivu-tooltip-popper{
    left: 50px !important;
}
.left-wrap .ivu-tooltip-inner{
    padding: 0;
}
.left-wrap .tip-concent{
    padding: 14px 30px 14px 14px ;
    
}
.left-wrap .tip-concent:hover{
   background: #2D8CF0;
   color: white;
}

</style>



