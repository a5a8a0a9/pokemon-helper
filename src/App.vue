<template>
  <div class="root-wrapper">
    <nav-menu />
    <div class="board">
      <nav-bar />
      <div class="sub-menu">123</div>

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

.sub-menu {
  position: absolute;
  top: 0;
  width: 100%;
  height: calc(100% - 50px);
  padding: 8px;
  background: transparent;
  color: transparent;
  z-index: -1;
  transition: all 0.5s ease;
  &.active {
    background: #a7dec5;
    color: inherit;
    z-index: 100;
    top: 50px;
  }
}

@media only screen and (max-width: 768px) {
  .page-wrapper {
    height: calc(100% - 50px - var(--var-safe-area-inset-top));
  }
}
</style>
