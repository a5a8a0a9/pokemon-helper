<template>
  <div class="root-wrapper">
    <nav-menu />
    <div class="board">
      <nav-bar />

      <div class="page-wrapper">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/Layout/NavBar'
import NavMenu from '@/components/Layout/NavMenu'

export default {
  components: {
    NavMenu,
    NavBar
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
.root-wrapper {
  height: 100%;
  display: flex;

  .board {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;

    .page-wrapper {
      height: calc(100% - 50px);
      padding: 16px;
      background: #eee;
    }
  }
}
</style>
