<template>
  <div class="simple-wrapper">
    <section v-for="idx in 10" :key="idx">
      <h1>title{{ idx }}</h1>
    </section>
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
.simple-wrapper {
  scroll-snap-type: y mandatory;
  height: 100%;
  overflow: auto;
}
section {
  block-size: 500px;
  scroll-snap-align: center;
  scroll-snap-stop: always;

  display: grid;
  place-items: center;
  border: 1px solid #ddd;
}
</style>
