<template>
  <div class="root-wrapper">
    <nav-menu />
    <div class="board">
      <nav-bar @open-menu="toggleSubMenu(!isSubMenuOpen)" />
      <div class="sub-menu" :class="{ active: isSubMenuOpen }">
        <router-link
          v-for="(route, index) in visibleRoutes"
          :key="index"
          :to="route.path"
          class="sub-menu-item"
          custom
          v-slot="{ navigate, isActive, isExactActive }"
        >
          <div
            :class="[
              isActive && 'router-link-active',
              isExactActive && 'router-link-exact-active'
            ]"
            @click.stop="navigate"
          >
            {{ route.name }}
          </div>
        </router-link>
      </div>

      <div class="page-wrapper">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { routes } from '@/router/routes'
import NavBar from '@/components/Layout/NavBar'
import NavMenu from '@/components/Layout/NavMenu'

export default {
  components: {
    NavMenu,
    NavBar
  },
  data() {
    return {
      routes,
      isSubMenuOpen: false
    }
  },
  computed: {
    visibleRoutes() {
      return routes.filter(({ show }) => show)
    }
  },
  watch: {
    $route() {
      // console.log(to, from)
      this.toggleSubMenu(false)
    }
  },
  methods: {
    toggleSubMenu(status) {
      this.isSubMenuOpen = status
    }
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
      // height: calc(100% - 50px);
      height: calc(
        100% - 50px - env(safe-area-inset-top) - env(safe-area-inset-bottom)
      ) !important;
      padding: 16px;
      background: #eee;
    }
  }
}

.sub-menu {
  position: absolute;
  top: 0;
  width: 100%;
  height: calc(
    100% - 50px - env(safe-area-inset-top) - env(safe-area-inset-bottom)
  );
  padding: 32px;
  background: transparent;
  color: transparent;
  z-index: -1;
  transition: all 0.5s ease;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: auto;

  &.active {
    background: #a7dec5;
    color: inherit;
    z-index: 100;
    top: 50px;
  }

  &-item {
    border: 2px solid #fff;
    border-radius: 30px;
    padding: 16px;
    height: 30px;
    display: flex;
    align-items: center;
    color: #fff;
  }

  &-toggle {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  .sub-menu-toggle {
    display: block;
  }
}
</style>
