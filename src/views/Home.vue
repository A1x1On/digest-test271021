<template>
  <div class="home">

    <div class="wrapper">
      <Digest/>
    </div>

  </div>
</template>

<script>

  import Digest from '@/components/Digest.component.vue'

  export default {
    name: 'Home',
    components: {
      Digest
    }
  }
</script>

<style scoped lang="scss">
  .home {
    height: 100%;

    .wrapper {
      margin: 0px auto;
      padding: 25px;
      box-sizing: border-box;
    }
  }
</style>
