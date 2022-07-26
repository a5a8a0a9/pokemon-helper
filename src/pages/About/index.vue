<template>
  <div class="page-card">
    <div class="flex-row items-center content-center h-100">
      <div class="main">
        <ion-icon name="walk-outline" />
      </div>
      <ul class="list">
        <li
          v-for="(item, index) in 12"
          :key="index"
          class="item-container"
          :style="`--i:${index}`"
        >
          <a class="item">
            <ion-icon name="egg-outline" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.list {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  width: 500px;
}

.main {
  position: absolute;
  width: 75px;
  height: 75px;
  background: #fff;
  color: 000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3em;
  cursor: pointer;
  transition: 0.5s;
  font-size: 75px;
}

.item {
  display: flex;
  align-items: center;
  justify-content: center;
  // transform: rotate(calc(360deg / -12 * var(--i)));
  transition: 0.5s;
  font-size: 2.5em;
  animation: egg-roll 3s ease-in-out infinite;

  @keyframes egg-roll {
    0% {
      transform: rotate(calc(360deg / -12 * var(--i) + 36deg * 0));
    }
    10% {
      transform: rotate(calc(360deg / -12 * var(--i) + 36deg * 1));
    }
    20% {
      transform: rotate(calc(360deg / -12 * var(--i) + 36deg * 2));
    }
    30% {
      transform: rotate(calc(360deg / -12 * var(--i) + 36deg * 3));
    }
    40% {
      transform: rotate(calc(360deg / -12 * var(--i) + 36deg * 4));
    }
    50% {
      transform: rotate(calc(360deg / -12 * var(--i) + 36deg * 5));
    }
    60% {
      transform: rotate(calc(360deg / -12 * var(--i) + 36deg * 6));
    }
    70% {
      transform: rotate(calc(360deg / -12 * var(--i) + 36deg * 7));
    }
    80% {
      transform: rotate(calc(360deg / -12 * var(--i) + 36deg * 8));
    }
    90% {
      transform: rotate(calc(360deg / -12 * var(--i) + 36deg * 9));
    }
    100% {
      transform: rotate(calc(360deg / -12 * var(--i) + 36deg * 10));
    }
  }

  &-container {
    position: absolute;
    left: 10px;
    list-style: none;
    transform: rotate(calc(360deg / 12 * var(--i))) translateX(40px);
    transform-origin: 240px;
    translate: 40px 0;
    transition: 0.5s;
  }
}
</style>
