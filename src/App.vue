<template>
  <div class="root-wrapper">
    <div class="nav">
      <router-link
        v-for="(route, index) in routes"
        :key="index"
        :to="route.path"
        class="link-item"
      >
        {{ route.name }}
      </router-link>
    </div>
    <div class="page-wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
import { routes } from '@/router/routes'
export default {
  data() {
    return {
      routes
    }
  }
}
</script>

<style lang="scss">
.root-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.nav {
  height: 50px;
  padding: 8px 16px;
  background: #42b983;
  display: flex;
  gap: 8px;
  align-items: center;
  .link-item {
    font-weight: bold;
    color: #2c3e50;
  }
  a {
    &.router-link-exact-active {
      // color: #42b983;
      color: #fff;
    }
  }
}

.page-wrapper {
  height: calc(100% - 50px);
  padding: 16px;
  background: #eee;
}
</style>
