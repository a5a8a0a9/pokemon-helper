<template>
  <div class="simple-wapper">
    <div class="container">
      <div class="box">
        <div class="clock">
          <div class="hour">
            <div class="hr" id="hr" />
          </div>
          <div class="min">
            <div class="mn" id="mn" />
          </div>
          <div class="sec">
            <div class="sc" id="sc" />
          </div>
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
  mounted() {
    const hr = document.querySelector('#hr')
    const mn = document.querySelector('#mn')
    const sc = document.querySelector('#sc')

    setInterval(() => {
      const deg = 6
      const date = new Date()
      const hh = date.getHours() * 30
      const mm = date.getMinutes() * deg
      const ss = date.getSeconds() * deg

      hr.style.transform = `rotateZ(${hh + mm / 12}deg)`
      mn.style.transform = `rotateZ(${mm}deg)`
      sc.style.transform = `rotateZ(${ss}deg)`
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>
.simple-wapper {
  height: 100%;
  position: relative;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      #e91e63,
      #e91e63 50%,
      #ffc107 50%,
      #ffc107
    );
  }
  &::after {
    content: '';
    position: absolute;
    top: -20px;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      160deg,
      #03a9f4,
      #03a9f4 50%,
      transparent 50%,
      transparent
    );
    animation: animate 5s ease-in-out infinite;
  }
  @keyframes animate {
    0%,
    100% {
      transform: translateY(10px);
    }
    50% {
      transform: translateY(-10px);
    }
  }
}

.container {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    bottom: -150px;
    width: 100%;
    height: 60px;
    background: radial-gradient(rgba(0, 0, 0, 0.2), transparent, transparent);
    border-radius: 50%;
  }
}

.box {
  position: relative;
  z-index: 1;
  width: 400px;
  height: 400px;
  backdrop-filter: blur(25px);
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.5);
  animation: animate 5s ease-in-out infinite;
  animation-delay: -2.5s;
}

.clock {
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(transparent, rgba(255, 255, 255, 0.2)),
    url('~@/assets/image/clock.png');
  background-size: cover;
  border-radius: 50%;
  backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-bottom: none;
  border-right: none;
  box-shadow: -10px -10px 20px rgba(255, 255, 255, 0.1),
    10px 10px 20px rgba(0, 0, 0, 0.1), 0px 40px 50px rgba(0, 0, 0, 0.2);

  &::before {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    background: #fff;
    border-radius: 50%;
    z-index: 10000;
  }
}

.hour,
.min,
.sec {
  position: absolute;
}
.hour,
.hr {
  width: 160px;
  height: 160px;
}
.min,
.mn {
  width: 190px;
  height: 190px;
}
.sec,
.sc {
  width: 230px;
  height: 230px;
}
.hr,
.mn,
.sc {
  display: flex;
  justify-content: center;
  position: absolute;
  border-radius: 50%;
}
.hr::before {
  content: '';
  position: absolute;
  width: 8px;
  height: 80px;
  background: #ff105e;
  z-index: 11;
  border-radius: 6px;
}
.mn::before {
  content: '';
  position: absolute;
  width: 4px;
  height: 90px;
  background: #fff;
  z-index: 12;
  border-radius: 6px;
}
.sc::before {
  content: '';
  position: absolute;
  width: 2px;
  height: 150px;
  background: #fff;
  z-index: 12;
  border-radius: 6px;
}
</style>
