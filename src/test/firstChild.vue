<template>
	<div>
		<p>This is firstChild组件</p>
		<button @click="sendMsg">向组件传值</button>
	</div>
</template>

<script>
import bus from './eventBus'
export default {
  name: 'firstchild',
  data () {
    return {
    	
    }
  },
  methods: {
  	sendMsg() {
  		bus.$emit('userabc','hahahahaha');
  	}
  }
}
</script>

<style>

</style>
