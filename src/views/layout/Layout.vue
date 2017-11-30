<template>
  <el-container>
    <sidebar class="el-aside"></sidebar>
      <el-container>
        <navbar class="el-header"></navbar>
        <app-main class="el-main"></app-main>
        <el-footer>Footer</el-footer>
      </el-container>
  </el-container>
</template>
<script>
import { Navbar, Sidebar, AppMain } from './'
export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App123'
    }
  }
}

</script>
<style>

</style>
