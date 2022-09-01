<template>
  <div id="app">
    <Catagtory></Catagtory>
    <Newlist></Newlist>
  </div>
</template>

<script>
  import Catagtory from './components/catagtory.vue'
  import Newlist from './components/new-list.vue'
export default {
  name: 'App',
  components: {
    Catagtory,Newlist
  }
}
</script>

<style>

</style>
