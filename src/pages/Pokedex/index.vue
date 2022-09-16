<template>
  <div class="page-card">
    <div class="page-card-bar">
      <div class="flex-row content-between">
        <custom-tab v-model="activeTab" :list="tabList" />
        <div>
          <span class="btn btn-gray" @click="isFilterOpen = !isFilterOpen">
            <font-awesome-icon
              :icon="isFilterOpen ? ['fas', 'angle-up'] : ['fas', 'angle-down']"
            />
            <span>{{ isFilterOpen ? '隱藏篩選' : '打開篩選' }}</span>
          </span>
        </div>
      </div>
    </div>
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

    <div class="page-card-header">
      <div
        class="filter-layout"
        :class="{ active: isFilterOpen }"
        style="margin-bottom: 8px"
      >
        <div class="flex-row u-ga-md flex-wrap">
          <div class="flex-row u-ga-md">
            <label style="flex: 0 0 auto">編號</label>
            <input v-model="filter.no" />
          </div>
          <div class="flex-row u-ga-md">
            <label style="flex: 0 0 auto">名稱</label>
            <input v-model="filter.name" />
          </div>
          <div class="flex-row u-ga-md">
            <label style="flex: 0 0 auto">首字筆劃</label>
            <div class="flex-row">
              <select
                v-model="filter.stroke"
                style="border-radius: 3px 0 0 3px"
              >
                <option
                  v-for="(option, optionIndex) in strokeOptions"
                  :key="optionIndex"
                  :value="option.value"
                >
                  {{ option.name }}
                </option>
              </select>
              <span
                class="btn btn-gray"
                style="border-left: unset; border-radius: 0 3px 3px 0"
                @click="filter.stroke = null"
              >
                <font-awesome-icon :icon="['fas', 'times']" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-row content-end u-ga-md" s>
        <span class="btn btn-danger" @click="clearSearch()">
          <font-awesome-icon :icon="['fas', 'rotate-right']" />
          <span>清除條件</span>
        </span>
      </div>
    </div>

    <div class="page-card-body">
      <div
        v-if="activeTab === 'table'"
        class="flex-table stripe hover-effect"
        style="height: 100%"
      >
        <div class="flex-table-header">
          <div class="flex-table-column" style="width: 3em">編號</div>
          <div class="flex-table-column" style="width: 6em">名稱</div>
          <div class="flex-table-column text-center" style="width: 5em">
            首字筆劃
          </div>
          <div class="flex-table-column" style="width: 75px">圖片</div>
        </div>
        <div class="flex-table-body">
          <div
            v-for="(item, index) in showList"
            :key="index"
            class="flex-table-row"
          >
            <div class="flex-table-column" style="width: 3em">
              {{ item.no | formatNo }}
            </div>
            <div class="flex-table-column" style="width: 6em">
              <span v-if="!isEdit">{{ item.name }}</span>
              <input
                v-else
                v-model="item.name"
                :name="`list[${index}][${item.name}]`"
              />
            </div>
            <div class="flex-table-column text-center" style="width: 5em">
              <span v-if="!isEdit">{{ item.stroke }}</span>
              <input
                v-else
                v-model="item.stroke"
                :name="`list[${index}][${item.stroke}]`"
                class="text-right"
              />
            </div>
            <div class="flex-table-column" style="width: 75px">
              <!-- <img
                v-if="item.no < 899"
                :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${Number(
                  item.no
                )}.png`"
              /> -->
            </div>
          </div>
        </div>
      </div>

      <div
        v-if="activeTab === 'group'"
        class="h-100"
        style="border: 1px solid #ddd; overflow: auto"
      >
        <div
          v-for="(groupInfo, groupIndex) in strokeGroupList"
          :key="groupIndex"
          class="flex-column u-ga-md"
        >
          <div
            class="u-pa-md"
            style="
              border-bottom: 1px solid #ddd;
              position: sticky;
              top: 0;
              background: #eff1ff;
              z-index: 3;
              font-weight: 600;
            "
          >
            {{ `${groupInfo.stroke} 劃` }}
          </div>
          <div class="u-pa-md" style="border-bottom: 1px solid #ddd">
            <div class="flex-table stripe hover-effect">
              <div class="flex-table-header">
                <div class="flex-table-column" style="width: 3em">編號</div>
                <div class="flex-table-column" style="width: 6em">名稱</div>
                <div class="flex-table-column text-center" style="width: 5em">
                  首字筆劃
                </div>
                <div class="flex-table-column" style="width: 75px">圖片</div>
              </div>
              <div class="flex-table-body">
                <div
                  v-for="(item, index) in groupInfo.list"
                  :key="index"
                  class="flex-table-row"
                >
                  <div class="flex-table-column" style="width: 3em">
                    {{ item.no | formatNo }}
                  </div>
                  <div class="flex-table-column" style="width: 6em">
                    <span v-if="!isEdit">{{ item.name }}</span>
                    <input
                      v-else
                      v-model="item.name"
                      :name="`list[${index}][${item.name}]`"
                    />
                  </div>
                  <div class="flex-table-column text-center" style="width: 5em">
                    <span v-if="!isEdit">{{ item.stroke }}</span>
                    <input
                      v-else
                      v-model="item.stroke"
                      :name="`list[${index}][${item.stroke}]`"
                      class="text-right"
                    />
                  </div>
                  <div class="flex-table-column" style="width: 75px">
                    <!-- <img
                      v-if="item.no < 899"
                      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${Number(
                        item.no
                      )}.png`"
                    /> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="flex-column u-ga-md" style="position: relative; height: 100%">
    </div> -->
  </div>
</template>

<script>
import * as CNS from '@lazy-cjk/cns-11643'
import {
  unicode2CNS,
  CNS_stroke,
  strokeOptions
  // strokeMapping
} from './Columns'
import pokedex from '@/assets/json/pokedex.json'
import CustomTab from '@/components/Custom/CustomTab.vue'

// https://pokeapi.co/api/v2/pokemon/ditto
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/898.png
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png

export default {
  components: {
    CustomTab
  },
  filters: {
    formatNo(no) {
      return no.toString().padStart(3, '0')
    }
  },
  data() {
    return {
      isFilterOpen: true,
      activeTab: 'table',
      tabList: {
        table: {
          id: 'table',
          name: '表格'
        },
        group: {
          id: 'group',
          name: '首字筆劃分群'
        }
      },
      strokeOptions,
      isEdit: false,
      list: [],
      filter: {
        name: '',
        no: null,
        stroke: null
      },
      showList: []
    }
  },
  computed: {
    strokeGroupList() {
      let obj = {}
      this.showList.forEach((item) => {
        if (!obj[item.stroke]) {
          obj[item.stroke] = {
            stroke: item.stroke,
            list: []
          }
        }
        obj[item.stroke].list.push(item)
      })
      return obj
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
    async getData() {
      try {
        this.loaing = true
        pokedex.forEach((pokemon, idx) => {
          const unicode = CNS.char2hex(pokemon.name[0]).toUpperCase()
          const strCNS = unicode2CNS[unicode]
          const cnsStroke = CNS_stroke[strCNS]
          this.list.push({
            ...pokemon,
            stroke: pokemon.stroke > 0 ? pokemon.stroke : cnsStroke,
            cnsStroke,
            dataIndex: idx
          })
        })
        this.showList = [...this.list]
      } catch (e) {
        console.log(e)
      } finally {
        this.loaing = false
      }
    },
    search() {
      this.showList.splice(0)
      const res = this.list.filter((item) => {
        return (
          (this.filter.stroke ? item.stroke === this.filter.stroke : true) &&
          (this.filter.no
            ? item.no.toString().padStart(3, '0').includes(this.filter.no)
            : true) &&
          (this.filter.name ? item.name.includes(this.filter.name) : true)
        )
      })
      this.showList.push(...res)
    },
    clearSearch() {
      this.filter.stroke = null
      this.filter.name = null
      this.filter.no = null
    },
    save() {
      localStorage.setItem('pokedex', JSON.stringify(this.list))
      this.isEdit = false
    }
  },
  async created() {
    await this.getData()
    // const str = '我'
    // const unicode = CNS.char2hex(str)
  }
}
</script>

<style lang="scss" scoped>
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
  display: inline-flex;
  gap: 4px;
  align-items: center;
  width: max-content;

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

.filter-layout {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  height: max-content;
  max-height: 0;
  overflow: hidden;
  transition: 0.5s;
  &.active {
    max-height: 100%;
  }
}
img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}
</style>
