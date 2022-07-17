<template>
  <div class="page-card">
    <div class="flex-column u-ga-md" style="position: relative; height: 100%">
      <!-- <div class="flex-row content-end u-ga-md">
        <span v-if="!isEdit" class="btn btn-info" @click="isEdit = true">
          <font-awesome-icon :icon="['fas', 'edit']" />
          <span>編輯</span>
        </span>
        <template v-else>
          <span class="btn btn-default" @click="isEdit = false">
            <font-awesome-icon :icon="['fas', 'times']" />
            <span>取消</span>
          </span>
          <span class="btn btn-primary" @click="save()">
            <font-awesome-icon :icon="['fas', 'save']" />
            <span>儲存</span>
          </span>
        </template>
      </div> -->

      <div class="flex-row items-end content-between u-ga-lg">
        <div class="flex-row u-ga-lg">
          <div>
            <label>編號</label>
            <input v-model="filter.no" />
          </div>
          <div>
            <label>名稱</label>
            <input v-model="filter.name" />
          </div>
          <div>
            <label>首字筆劃</label>
            <div class="flex-row">
              <select v-model="filter.count" style="border-radius: 3px 0 0 3px">
                <option
                  v-for="(option, optionIndex) in countOptions"
                  :key="optionIndex"
                  :value="option.value"
                >
                  {{ option.name }}
                </option>
              </select>
              <span
                class="btn btn-gray"
                style="border-left: unset; border-radius: 0 3px 3px 0"
                @click="filter.count = null"
              >
                <font-awesome-icon :icon="['fas', 'times']" />
              </span>
            </div>
          </div>
        </div>
        <span>
          <span class="btn btn-danger" @click="clearSearch()">
            <font-awesome-icon :icon="['fas', 'rotate-right']" />
            <span>清除條件</span>
          </span>
        </span>
      </div>

      <div class="flex-table stripe hover-effect" style="height: 100%">
        <div class="flex-table-header">
          <div class="flex-table-column" style="width: 80px">編號</div>
          <div class="flex-table-column" style="width: 100px">名稱</div>
          <div class="flex-table-column text-right" style="width: 100px">
            首字筆劃
          </div>
        </div>
        <div class="flex-table-body">
          <div
            v-for="(item, index) in showList"
            :key="index"
            class="flex-table-row"
          >
            <div class="flex-table-column" style="width: 80px">
              {{ item.no }}
            </div>
            <div class="flex-table-column" style="width: 100px">
              <span v-if="!isEdit">{{ item.name }}</span>
              <input
                v-else
                v-model="item.name"
                :name="`list[${index}][${item.name}]`"
              />
            </div>
            <div class="flex-table-column text-right" style="width: 100px">
              <span v-if="!isEdit">{{ item.count }}</span>
              <input
                v-else
                v-model="item.count"
                :name="`list[${index}][${item.count}]`"
                class="text-right"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { countMapping, countOptions } from './Columns'
import DefaultData from './DefaultData.json'
export default {
  data() {
    return {
      countOptions,
      isEdit: false,
      list: [],
      filter: {
        name: '',
        no: '',
        count: null
      },
      showList: []
    }
  },
  watch: {
    filter: {
      deep: true,
      handler: function () {
        this.search()
      }
    }
  },
  methods: {
    pokemonGen({ no = '', name = '', count = 0 } = {}) {
      const data = { no, name, count }
      const proxied = new Proxy(data, {
        set(obj, key, value) {
          switch (key) {
            case 'count':
              obj[key] = Number(value)
              break
            default:
              obj[key] = value
              break
          }
          return true
        }
      })
      this.list.push(proxied)
    },
    search() {
      this.showList.splice(0)
      const res = this.list.filter((item) => {
        return (
          (this.filter.count ? item.count === this.filter.count : true) &&
          (this.filter.no ? item.no.includes(this.filter.no) : true) &&
          (this.filter.name ? item.name.includes(this.filter.name) : true)
        )
      })
      this.showList.push(...res)
    },
    clearSearch() {
      this.filter.count = null
      this.filter.name = null
      this.filter.no = null
    },
    save() {
      localStorage.setItem('pokedex', JSON.stringify(this.list))
      this.isEdit = false
    }
  },
  created() {
    const response = JSON.parse(localStorage?.['pokedex'] ?? '[]')
    if (response?.length <= 0) {
      for (let i = 0; i < DefaultData.length; i++) {
        DefaultData[i]
        this.pokemonGen(DefaultData[i])
      }

      this.list.forEach((item) => {
        const firstName = item.name[0]
        const count = countMapping.find(({ list }) => list.includes(firstName))?.count
        if (!count) return
        item.count = count
      })
      this.save()
    } else {
      response.forEach((item) => {
        this.pokemonGen(item)
      })
    }
    this.showList = [...this.list]
  }
}
</script>

<style lang="scss" scoped>
$primary: #42b983;
$info: #3175af;
$danger: #ed2e2e;
input,
select {
  background: #fff;
  border: 1px solid #ddd;
  padding: 4px 8px;
  border-radius: 3px;
  width: 100%;
  &:focus-visible {
    outline: 1px solid $primary;
  }
}
.btn {
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  gap: 4px;
  align-items: center;
  &-info {
    background: $info;
    color: #fff;
    border: 1px solid $info;
  }
  &-primary {
    background: $primary;
    color: #fff;
    border: 1px solid $primary;
  }
  &-default {
    background: #fff;
    color: #444;
    border: 1px solid #444;
  }
  &-danger {
    background: $danger;
    color: #fff;
    border: 1px solid $danger;
  }
  &-gray {
    background: #fff;
    color: #444;
    border: 1px solid #ddd;
  }
}
</style>
