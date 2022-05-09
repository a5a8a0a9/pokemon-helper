<template>
  <div class="simple-wrapper">
    <div class="simple-container">
      <div class="glass-card">
        <div class="glass-card-header">
          <span>首頁</span>
        </div>
        <div class="glass-card-body">
          <p>
            做個奶子吧 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Autem dignissimos totam voluptas rerum. Veritatis sit porro
            explicabo, vitae nesciunt illum libero, nam temporibus optio
            asperiores dolores nisi, praesentium harum doloremque?
          </p>
        </div>
      </div>
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
.simple {
  &-wrapper {
    position: relative;
    display: flex;
    overflow: hidden;
    background: #161623;
    height: 100%;
    &::before {
      content: '';
      position: absolute;
      top: -25px;
      left: -25px;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background: #aabbff;
    }
    &::after {
      content: '';
      position: absolute;
      bottom: -25px;
      right: -25px;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background: #aabbff;
    }
  }
  &-container {
    position: relative;
    padding: 16px;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
}

.glass-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: hidden;
  width: 350px;
  height: fit-content;
  padding: 16px;
  box-shadow: 5px 5px 10px rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  color: #fff;
  backdrop-filter: blur(5px);

  &-header {
    font-size: 24px;
    font-weight: 600;
  }
  &-body {
    letter-spacing: 1px;
  }
}
</style>
