<template>
  <div class="simple-wrapper">
    <div class="navigation">
      <ul class="list-wrapper">
        <li
          v-for="(item, index) in list"
          :key="index"
          class="list"
          :class="{ active: activeId === item.id }"
          @click.stop="activeId = item.id"
        >
          <a class="list-item">
            <span class="icon">
              <ion-icon :name="item.icon"></ion-icon>
            </span>
            <span class="text">{{ item.name }}</span>
          </a>
        </li>
        <div class="indicator" />
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeId: 1,
      list: [
        { id: 1, name: 'Home', icon: 'home-outline' },
        { id: 2, name: 'Settings', icon: 'settings-outline' },
        { id: 3, name: 'Profile', icon: 'person-outline' },
        { id: 4, name: 'Message', icon: 'chatbubble-ellipses-outline' },
        { id: 5, name: 'Photo', icon: 'camera-outline' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
$dark: #222327;

.simple-wrapper {
  background: $dark;
  height: 250px;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
}

.navigation {
  width: 400px;
  height: 70px;
  background: #fff;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  user-select: none;

  .list {
    position: relative;
    list-style: none;
    width: 70px;
    height: 70px;
    z-index: 1;

    &-wrapper {
      display: flex;
      width: 350px;
    }

    &-item {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      text-align: center;
      font-weight: 500;
      cursor: pointer;

      .icon {
        position: relative;
        display: block;
        line-height: 75px;
        font-size: 1.5em;
        text-align: center;
        transition: 0.5s;
      }

      .text {
        position: absolute;
        font-weight: 400;
        font-size: 0.75em;
        letter-spacing: 0.05em;
        transition: 0.5s;
        opacity: 0;
        transform: translateY(20px);
      }
    }
    &.active .icon {
      transform: translateY(-32px);
    }
    &.active .text {
      opacity: 1;
      transform: translateY(10px);
    }
  }
}
.indicator {
  position: absolute;
  top: -50%;
  width: 70px;
  height: 70px;
  background: #29fd53;
  border-radius: 50%;
  border: 6px solid $dark;
  transition: 0.5s;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 20px;
    height: 20px;
    background: transparent;
    box-shadow: 0 -10px 0 0 $dark;
  }
  &::before {
    left: -22px;
    border-top-right-radius: 20px;
  }
  &::after {
    right: -22px;
    border-top-left-radius: 20px;
  }
}
@for $idx from 1 through 5 {
  .navigation .list-wrapper .list:nth-child(#{$idx}).active ~ .indicator {
    transform: translateX(calc(70px * #{($idx - 1)}));
  }
}
</style>
