<template>
  <div class="page-card">
    <div class="flex-column u-ga-md" style="position: relative; height: 100%">
      <custom-tab v-model="activeTab" :list="tabList" />
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

      <div class="flex-row items-end content-between u-ga-lg flex-wrap">
        <div class="flex-row u-ga-lg flex-wrap">
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
        <span>
          <span class="btn btn-danger" @click="clearSearch()">
            <font-awesome-icon :icon="['fas', 'rotate-right']" />
            <span>清除條件</span>
          </span>
        </span>
      </div>

      <div
        v-if="activeTab === 'table'"
        class="flex-table stripe hover-effect"
        style="height: 100%"
      >
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
              <span v-if="!isEdit">{{ item.stroke }}</span>
              <input
                v-else
                v-model="item.stroke"
                :name="`list[${index}][${item.stroke}]`"
                class="text-right"
              />
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
                <div class="flex-table-column" style="width: 80px">編號</div>
                <div class="flex-table-column" style="width: 100px">名稱</div>
                <div class="flex-table-column text-right" style="width: 100px">
                  首字筆劃
                </div>
              </div>
              <div class="flex-table-body">
                <div
                  v-for="(item, index) in groupInfo.list"
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
                  <div
                    class="flex-table-column text-right"
                    style="width: 100px"
                  >
                    <span v-if="!isEdit">{{ item.stroke }}</span>
                    <input
                      v-else
                      v-model="item.stroke"
                      :name="`list[${index}][${item.stroke}]`"
                      class="text-right"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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

export default {
  components: {
    CustomTab
  },
  data() {
    return {
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
        no: '',
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
      for (let i = 0; i < pokedex.length; i++) {
        const unicode = CNS.char2hex(pokedex[i].name[0]).toUpperCase()
        const strCNS = unicode2CNS[unicode]
        const cnsStroke = CNS_stroke[strCNS]
        this.list.push({
          name: pokedex[i].name,
          no: pokedex[i].no,
          stroke: pokedex[i].stroke > 0 ? pokedex[i].stroke : cnsStroke,
          cnsStroke,
          dataIndex: i
        })
      }
      this.showList = [...this.list]
    },
    search() {
      this.showList.splice(0)
      const res = this.list.filter((item) => {
        return (
          (this.filter.stroke ? item.stroke === this.filter.stroke : true) &&
          (this.filter.no ? item.no.includes(this.filter.no) : true) &&
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
    // console.log(CNS.char2hex(str)) // unicode
    // CNS mapping unicode
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
