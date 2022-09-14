<template>
  <div class="page-card">
    <div class="flex-row u-ga-lg">
      <input v-model="str" />
      <input v-model="pageNum" />
      <button @click="strMatch()">產生</button>
    </div>
    <div class="flex-column" style="overflow: auto; width: 720px; margin: auto">
      <div v-for="(imgInfo, index) in imgList" :key="index" class="img-wrapper">
        <img :src="imgInfo.url" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      str: '',
      pageNum: 40,
      imgList: []
    }
  },
  methods: {
    strMatch() {
      let reg = new RegExp('(.*)/([0-9]+)/([0-9]+)(.jpg)')
      const [, prefix, epic, startPage, extension] = this.str.match(reg)
      this.imgList.splice(0)
      for (let idx = 0; idx < this.pageNum; idx++) {
        const url =
          [prefix, epic, Number(startPage) + idx].join('/') + extension
        this.imgList.push({ url })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.img-wrapper {
  width: 100%;
  height: max-content;
  position: relative;
  & > img {
    // object-fit: contain;
    // width: 100%;
    // height: 100%;
  }
}
</style>
