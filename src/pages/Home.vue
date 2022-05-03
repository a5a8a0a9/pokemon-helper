<template>
  <div class="page-card">
    <!-- <div class="flex-row items-center content-center w-100 h-100">
      <ion-icon
        v-for="(size, index) in [500, 400, 300, 200, 100, 50, 25]"
        :key="index"
        name="home-outline"
        style="position: absolute"
        :style="{ 'font-size': `${size}px` }"
      />
      <ion-icon name="home-outline" style="position: absolute" />
    </div> -->
    <img :src="imgSrc" class="w-100 h-100" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgSrc: require('@/assets/image/canking.jpg')
    }
  }
}
</script>

<style lang="scss" scoped></style>
