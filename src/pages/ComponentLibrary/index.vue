<template>
  <div class="page-card">
    <div class="flex-row" style="gap: 8px; height: 100%">
      <div class="left-side">
        <div class="item-wrapper">
          <div
            v-for="(item, index) in list"
            :key="index"
            class="item"
            :class="{ active: activeItem.id === item.id }"
            @click="toggleItem(item)"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
      <div class="right-side" :class="{ active: activeItem.id !== null }">
        <div v-if="activeItem.id" class="flex-column h-100">
          <div class="flex-row content-between u-mb-lg">
            <label class="title">{{ activeItem.name }}</label>
            <button class="cls-btn" @click="toggleItem()">&times;</button>
          </div>
          <component :is="activeItem.id" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { list } from './Columns'
import * as CustomComponent from '@/components/Custom'

export default {
  components: {
    ...CustomComponent
  },
  data() {
    return {
      list,
      activeItem: {
        id: null,
        name: null
      }
    }
  },
  methods: {
    toggleItem(item) {
      if (!item) {
        this.activeItem.id = null
        this.activeItem.name = null
        return
      }
      if (this.activeItem.id === item.id) {
        this.activeItem.id = null
        this.activeItem.name = null
        return
      }
      this.activeItem.id = item.id
      this.activeItem.name = item.name
    }
  }
}
</script>

<style lang="scss" scoped>
.cls-btn {
  background: #fff;
  color: $primary;
  border: 1px solid $primary;
  padding: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  cursor: pointer;
  font-weight: 600;
  font-size: 30px;
  transition: 0.5s;

  &:hover {
    background: $primary;
    color: #fff;
    transform: rotate(360deg);
  }
}

.left-side {
  flex-grow: 1;
}

.right-side {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
  width: 0;
  transition: 0.5s;
  border-left: 3px solid transparent;
  &.active {
    width: 50%;
    border-left-color: $primary;
  }
}

.item {
  &-wrapper {
    display: flex;
    flex-wrap: wrap;
    // grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 8px;
  }

  height: 40px;
  background: #fff;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  border: 2px solid #ddd;
  border-radius: 3px;
  transition: 0.5s;
  cursor: pointer;
  white-space: nowrap;
  word-break: keep-all;
  overflow: hidden;
  user-select: none;

  &.active {
    background: darken($color: $primary, $amount: 5);
    color: #fff !important;
    border-color: $primary;
  }
  &:hover {
    transition: 0s;
    border-color: $primary;
    background: $primary;
    color: #fff;
  }
}
.title {
  font-weight: 600;
  font-size: 20px;
  color: darken($color: $primary, $amount: 9);
}
</style>
