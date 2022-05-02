<template>
  <div class="page-card">
    <div class="flex-row items-end u-ga-lg">
      <div class="form-wrapper form-group" style="width: 500px">
        <label>Base Url</label>
        <input v-model="baseUrl" type="text" />
      </div>
      <div class="form-wrapper form-group">
        <label>Start Number</label>
        <input v-model="startNumber" type="number" />
      </div>
      <div class="form-wrapper form-group">
        <label>Page Number</label>
        <input v-model="pageNumber" type="text" />
      </div>
      <div class="form-wrapper form-group">
        <label>Img Type</label>
        <input v-model="imgType" type="text" />
      </div>
      <button @click="getData()" style="margin-bottom: 8px">產生</button>
    </div>
    <div class="galary-wrapper">
      <div class="flex-column galary">
        <template v-if="list.length > 0">
          <img
            v-for="(item, index) in list"
            :key="index"
            style="width: 100%"
            :src="item.src"
          />
        </template>
        <p v-else>nonono</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      preStr: '',
      startNumber: 0,
      pageNumber: 30,
      imgType: '.jpg',
      list: []
    }
  },
  computed: {
    baseUrl: {
      get() {
        return this.preStr
      },
      set(v) {
        const index = v.lastIndexOf('.')
        let tempbase = v.substr(0, index)
        this.imgType = v.substr(index)
        let lastSlashIndex = tempbase.lastIndexOf('/')
        this.preStr = tempbase.substr(0, lastSlashIndex + 1)
        this.startNumber = Number(tempbase.substr(lastSlashIndex + 1))
      }
    }
  },
  methods: {
    getData() {
      let temp = []
      for (let index = 0; index < this.pageNumber; index++) {
        temp.push({
          src: `${this.preStr}${Number(this.startNumber) + index}${
            this.imgType
          }`
        })
      }
      this.list.splice(0)
      this.list.push(...temp)
    }
  },
  created() {
    this.axios({
      url: '/todos/1',
      method: 'get'
    }).then(({ data: response }) => {
      console.log(response)
    })
  }
}
</script>

<style lang="scss" scoped>
input {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 0.325rem;
  padding: 4px 8px;
  color: #444;
}

button {
  height: fit-content;
  padding: 4px 8px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 3px;
}
.form-wrapper {
  display: flex;
  flex-direction: column;
  & > label {
    font-weight: 700;
    margin-bottom: 5px;
  }
}
.form-group {
  margin-bottom: 8px;
}

.galary {
  width: 720px;
  border: 1px solid #ddd;
  margin: auto;
  &-wrapper {
    height: 100%;
    overflow: auto;
  }
}
</style>
