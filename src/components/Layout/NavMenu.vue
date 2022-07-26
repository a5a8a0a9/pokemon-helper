<template>
  <div class="nav-menu" :class="{ active: isToggle }">
    <div
      class="nav-menu-toggle"
      :class="{ active: isToggle }"
      @click="toggleMenu"
    >
      <div class="nav-menu-toggle-icon">
        <ion-icon name="finger-print-outline" />
      </div>
      <div class="nav-menu-toggle-title">
        <label>選單</label>
      </div>
    </div>

    <ul class="nav-menu-list" @click.stop="toggleMenu">
      <router-link
        v-for="(route, index) in routes"
        :key="index"
        :to="route.path"
        custom
        v-slot="{ navigate, isActive, isExactActive }"
      >
        <li
          class="nav-menu-list-item-container"
          :class="[
            isActive && 'router-link-active',
            isExactActive && 'router-link-exact-active'
          ]"
          @click.stop="navigate"
        >
          <a class="nav-menu-list-item">
            <span class="nav-menu-list-item-icon">
              <font-awesome-icon
                v-if="route.meta.iconType === 'fa'"
                :icon="route.meta.icon"
                style="font-size: 14px"
              />
              <ion-icon
                v-if="route.meta.iconType === 'ion'"
                :name="route.meta.icon"
              />
            </span>
            <span
              class="nav-menu-list-item-title"
              :class="{ active: isToggle }"
            >
              {{ route.name }}
            </span>
          </a>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
import { routes } from '@/router/routes'
export default {
  data() {
    return {
      routes,
      isToggle: false
    }
  },
  methods: {
    toggleMenu() {
      this.isToggle = !this.isToggle
    }
  }
}
</script>

<style lang="scss" scoped>
$primary: #42b983;

.nav-menu {
  width: calc(56px + 7px);
  transition: 0.5s;

  &.active {
    width: calc(350px + 7px);
    .nav-menu-list-item-container {
      width: 100%;
    }
  }

  &-toggle {
    cursor: pointer;
    display: flex;
    align-items: center;
    border-bottom: 1px solid $primary;
    height: 50px;

    &.active &-title {
      transform: translateX(0px);
      opacity: 1;
      color: unset;
      cursor: pointer;
    }

    &-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 50px;
      font-size: 24px;
      flex: 0 0 auto;
    }
    &-title {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      opacity: 0;
      font-size: 20px;
      transform: translateX(100px);
      transition: 0.5s;
      color: transparent;
      user-select: none;
    }
  }

  &-list {
    user-select: none;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 8px;
    height: calc(100% - 50px);
    overflow-x: hidden;
    overflow-y: auto;
    transition: 0.5s;

    &-item-container {
      height: 40px;
      padding: 9px;
      display: flex;
      align-items: center;
      border: 1px solid #ddd;
      border-radius: 20px;
      cursor: pointer;
      z-index: 1;
      width: 40px;
      transition: 0.5s;

      &:hover,
      &.router-link-exact-active {
        color: $primary;
        border-color: $primary;

        .nav-menu-list-item-icon {
          transform: rotate(360deg);
        }
      }
    }

    &-item {
      display: flex;
      gap: 8px;
      align-items: center;

      &-icon {
        transition: 0.5s;
        transition: 0.5s;
        width: 20px;
        height: 20px;
        display: grid;
        place-items: center;
      }

      &-title {
        transition: 0.5s;
        opacity: 0;
        white-space: nowrap;
        &.active {
          opacity: 1;
        }
      }
    }

    &-item-container.active &-item {
      border-color: $primary;
      color: $primary;
    }
  }
}
@media screen and (max-width: 768px) {
  .nav-menu {
    display: none;
  }
}
</style>
