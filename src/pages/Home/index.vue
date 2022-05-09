<template>
  <div class="page-card">
    <div class="simple-wrapper" ref="wrapper" @mousemove="onMouseMove">
      <div class="face">
        <div class="eye-container">
          <div v-for="eye in 2" :key="eye" ref="eye" class="eye" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    onMouseMove(event) {
      this.$refs.eye.forEach((eyeEl) => {
        const x = eyeEl.getBoundingClientRect().left + eyeEl.clientWidth / 2
        const y = eyeEl.getBoundingClientRect().top + eyeEl.clientHeight / 2
        let radian = Math.atan2(event.pageX - x, event.pageY - y)
        const rot = radian * (180 / Math.PI) * -1 + 270
        eyeEl.style.transform = `rotate(${rot}deg)`
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.simple-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.face {
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: #ffcd00;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 180px;
    width: 150px;
    height: 70px;
    background: #b57700;
    border-bottom-left-radius: 70px;
    border-bottom-right-radius: 70px;
    transition: 0.5s;
  }

  &:hover {
    &::before {
      top: 210px;
      width: 150px;
      height: 20px;
      background: #b57700;
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }
  }
}

.eye-container {
  position: relative;
  top: -40px;
  display: flex;
}
.eye {
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: block;
  background: #fff;
  margin: 0 15px;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 25px;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #333;
  }
}
</style>
