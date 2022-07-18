<template>
  <div class="simple-wrapper">
    <div class="tab-wrapper">
      <div class="marker" ref="marker" />
      <div
        v-for="(item, index) in list"
        :key="index"
        :ref="`tab_${item.id}`"
        class="tab"
        :class="{ active: value === item.id }"
        @click.stop="changeTab(item)"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [Number, String]
    },
    list: {
      type: [Array, Object]
    }
  },
  data() {
    return {}
  },
  computed: {
    activeId: {
      set(newVal) {
        this.$emit('input', newVal)
      },
      get() {
        return this.value
      }
    }
  },
  watch: {
    value: {
      immediate: true,
      handler: async function () {
        await this.$nextTick()
        const [activeEl = {}] = this.$refs[`tab_${this.value}`]
        let markerEl = this.$refs.marker

        markerEl.style.left = `${activeEl.offsetLeft}px`
        markerEl.style.width = `${activeEl.offsetWidth}px`
      }
    }
  },
  methods: {
    changeTab(item) {
      this.activeId = item.id
    }
  }
}
</script>

<style lang="scss" scoped>
$primary: #42b983;

.simple-wrapper {
  width: 100%;
  cursor: pointer;
}
.tab {
  padding: 4px 8px;
  line-height: 1.5em;
  transition: 0.5s;
  &.active {
    color: $primary;
  }

  &-wrapper {
    display: flex;
    align-items: center;
    position: relative;
    user-select: none;
  }
}

.marker {
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: $primary;
  border-radius: 4px;
  transition: 0.3s;

  &::before {
    position: absolute;
    top: calc(0px - 1.5em - 8px);
    bottom: 4px;
    left: 0;
    right: 0;
    content: '';
    background: rgba(66, 185, 131, 0.1);
    border-radius: 4px;
    user-select: none;
    pointer-events: none;
  }
}
</style>
