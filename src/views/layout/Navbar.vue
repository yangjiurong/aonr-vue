<template>
  <el-menu 
  :default-active="activeIndex2" 
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
<!--     <transition name="bounce">
              <i :class="liebiaoicon" style="font-size:30px;" @click="changeIcon"></i>
    </transition> -->
    <i class="iconfont" :class="liebiaoicon" tabindex="123" style="font-size:30px;" @click="SidebarCollapse"></i>
  </el-menu>
</template>
<script>
import bus from '@/components/Eventbus'
export default {
  name: 'Layout',
  data() {
    return {
		activeIndex: '1',
    activeIndex2: '1',
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
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s ;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

</style>
