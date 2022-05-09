<template>
  <button ref="btn" class="btn" @mousemove="onMouseMove">
    <span class="btn-text">BUTTON</span>
  </button>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    onMouseMove(event) {
      let btnEl = this.$refs.btn
      const x = event.pageX - btnEl.offsetLeft
      const y = event.pageY - btnEl.offsetTop

      btnEl.style.setProperty('--rippleX', `${x}px`)
      btnEl.style.setProperty('--rippleY', `${y}px`)
    }
  }
}
</script>

<style lang="scss" scoped>
$primary: #42b983;
.btn {
  position: relative;
  display: inline-flex;
  background: #363636;
  color: #fff;
  padding: 10px 30px;
  border: unset;
  width: fit-content;
  border-radius: 3px;
  letter-spacing: 1px;
  overflow: hidden;
  cursor: pointer;
  font-weight: 600;
  font-size: 1.5em;

  &-text {
    position: relative;
    z-index: 1;
  }

  &::before {
    content: '';
    position: absolute;
    top: var(--rippleY);
    left: var(--rippleX);
    transform: translate(-50%, -50%);
    width: 0px;
    height: 0px;
    border-radius: 50%;
    background: $primary;
    transition: width 0.5s, height 0.5s;
  }

  &:hover {
    &::before {
      width: 50px;
      height: 50px;
    }
  }
}
</style>
