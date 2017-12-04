<template>
  <div>
    <p>This is Test Page for <b>{{pageinfo}}</b></p>
    <firstchild></firstchild>
    <secondchild></secondchild>
  </div>
</template>
<script>
import firstchild from './firstChild'
import secondchild from './secondChild'
export default {
  name: 'testmain',
  data() {
    return {
      pageinfo: 'bus'
    }
  },
  components:{
  	firstchild,
  	secondchild
  }
}

</script>
<style>


</style>
