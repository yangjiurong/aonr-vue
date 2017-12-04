<template>
  <el-menu 
  :default-active="activeIndex" 
  class="el-menu-demo" 
  mode="horizontal" 
  @select="handleSelect" 
  background-color="#eef1f6" 
  text-color="#324157" 
  active-text-color="#ffd04b">
<!--     <el-menu-item index="1">处理中心</el-menu-item>
    <el-submenu index="2">
      <template slot="title">我的工作台</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
    </el-submenu>
    <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item> -->
    <span class="iconfont" :class="liebiaoicon" style="font-size:30px;outline: none;" @click="SidebarCollapse"></span>
<!--     <transition name="fade">
      <i v-if="show1" key="" class="iconfont icon-liebiaoshouqi" style="font-size:30px;outline: none;" @click="SidebarCollapse"></i>
      <i v-if="show2" key="" class="iconfont icon-liebiaozhankai" style="font-size:30px;outline: none;" @click="SidebarCollapse"></i>
    </transition> -->
  </el-menu>
</template>
<script>
import bus from '@/components/Eventbus'
export default {
  name: 'Layout',
  data() {
    return {
		activeIndex: '1',
    liebiaoicon: "icon-liebiaoshouqi"
    }
  },
  methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      SidebarCollapse(){
        if (this.liebiaoicon == "icon-liebiaoshouqi"){
          bus.$emit('SidebarStatus',true);
          return this.liebiaoicon = "icon-liebiaozhankai"
        }
        bus.$emit('SidebarStatus',false);
        return this.liebiaoicon = "icon-liebiaoshouqi"
      }
    }
}

</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}

</style>
