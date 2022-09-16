<template>
  <div class="simple-wrapper">
    <ul class="menu" :class="{ active: isToggle }">
      <div class="toggle" :class="{ active: isToggle }" @click="toggleMenu()">
        <ion-icon name="add-outline" />
      </div>
      <li
        v-for="(item, index) in list"
        :key="index"
        :style="`--i:${index}`"
        class="item"
        :class="{ active: activeId === item.id }"
        @click="activeId = item.id"
      >
        <a class="link">
          <ion-icon :name="item.icon" />
        </a>
      </li>
      <div class="indicator" />
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isToggle: false,
      activeId: 1,
      list: [
        { id: 1, name: 'Home', icon: 'home-outline' },
        { id: 2, name: 'Person', icon: 'person-outline' },
        { id: 3, name: 'Settings', icon: 'settings-outline' },
        { id: 4, name: 'Mail', icon: 'mail-outline' },
        { id: 5, name: 'Videocam', icon: 'videocam-outline' },
        { id: 6, name: 'Key', icon: 'key-outline' },
        { id: 7, name: 'Game', icon: 'game-controller-outline' },
        { id: 8, name: 'Camera', icon: 'camera-outline' }
      ]
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
.simple-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  background: $dark;
}

.menu {
  position: relative;
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;

  .toggle {
    position: absolute;
    width: 75px;
    height: 75px;
    background: #fff;
    color: $dark;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3em;
    cursor: pointer;
    transition: 0.5s;

    &.active {
      transform: rotate(315deg);
      box-shadow: 0 0 0 60px #fff, 0 0 0 68px #fff;
      background: $dark;
      color: #fff;
    }
  }

  .item {
    position: absolute;
    left: 10px;
    list-style: none;
    transform: rotate(calc(360deg / 8 * var(--i))) translateX(40px);
    transform-origin: 140px;
    visibility: hidden;
    opacity: 0;
    transition: 0.5s;
    z-index: 10;
    cursor: pointer;

    .link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 55px;
      height: 55px;
      font-size: 1.75em;
      color: $dark;
      transform: rotate(calc(360deg / -8 * var(--i)));
      border-radius: 50%;
    }
  }

  &.active .item {
    visibility: visible;
    opacity: 1;
  }

  &.active .item.active {
    transform: rotate(calc(360deg / 8 * var(--i))) translateX(12px);
  }
}

.indicator {
  position: absolute;
  left: calc(50% + 2.5px);
  transform-origin: right;
  width: 100px;
  height: 1px;
  background: transparent;
  pointer-events: none;
  transition: 0.5s;

  &::before {
    content: '';
    position: absolute;
    top: -27.5px;
    left: 72px;
    width: 55px;
    height: 55px;
    background: $dark;
    box-shadow: 0 0 0 6px #29fd53;
    border-radius: 50%;
    transition: 0.5s;
    opacity: 0;
  }
}
.menu.active .indicator::before {
  opacity: 1;
  top: -27.5px;
  left: -27.5px;
  background: #29fd53;
  box-shadow: 0 0 0 6px $dark;
}
@for $idx from 1 through 8 {
  .menu .item:nth-child(#{($idx + 1)}).active ~ .indicator {
    transform: translate(-103px) rotate(#{($idx - 1) * 45}deg);
  }
}
</style>
