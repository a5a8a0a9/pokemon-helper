<template>
  <div class="nav-bar">
    <div class="nav-bar-title">
      <font-awesome-icon
        v-if="$route.meta.iconType === 'fa'"
        :icon="$route.meta.icon"
        style="font-size: 14px"
      />
      <ion-icon
        v-if="$route.meta.iconType === 'ion'"
        :name="$route.meta.icon"
      />
      <span>{{ $route.name }}</span>
    </div>
    <div class="sub-menu-toggle">
      <div @click="$emit('open-menu')">
        <ion-icon name="finger-print-outline" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.nav-bar {
  height: 50px;
  padding: 8px 16px;
  background: $primary;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  color: #fff;
  font-size: 20px;
  z-index: 200;
  &-title {
    display: flex;
    align-items: center;
    gap: 8px;
    letter-spacing: 0.3em;
  }
}
</style>
