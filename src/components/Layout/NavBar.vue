<template>
  <div class="nav-bar">
    <font-awesome-icon
      v-if="$route.meta.iconType === 'fa'"
      :icon="$route.meta.icon"
      style="font-size: 14px"
    />
    <ion-icon v-if="$route.meta.iconType === 'ion'" :name="$route.meta.icon" />
    <span>{{ $route.name }}</span>
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
$primary: #42b983;
.nav-bar {
  height: 50px;
  padding: 8px 16px;
  background: $primary;
  display: flex;
  gap: 8px;
  align-items: center;
  color: #fff;
  font-size: 20px;
  letter-spacing: 0.3em;
}
</style>
