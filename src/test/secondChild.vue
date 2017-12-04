<template>
	<div>
		<p>This is secondChild组件</p>
		<p>接收到的值：{{msg}} </p>
	</div>
</template>

<script>
import bus from './eventBus'
export default {
  name: 'secondchild',
  data () {
    return {
    	msg: '默认值'
    }
  },
  mounted(){
  	var self=this
  	bus.$on('userabc',function(msg){
  		self.msg=msg
  		console.log(self)
  	})
  }
}
</script>

<style>

</style>
