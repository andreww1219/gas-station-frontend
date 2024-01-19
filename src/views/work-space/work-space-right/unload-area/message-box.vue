<script setup>

import { defineEmits } from 'vue';
const closebox = defineEmits(['close']);

</script>

<template>
  <div class="message-box">
    <div class="image-container"></div>
    <h3>报警信息</h3>
    <p class="message">检测到交通堆缺失，已一键报警！</p>
    <el-button class="tick" @click.native="closebox('close')">知道了</el-button>
  </div>
</template>

<style>
.message-box {
  background-color: white;
  padding: 20px;
  border-radius: 30px;
  text-align: center;
  width: 50%;
  max-width: 350px;
  height: auto;
  margin: 0 auto;
  background-image: linear-gradient(to bottom, #daeffd 60%, #ffffff 40%);
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-container {
  background-image: url('/src/assets/img/box.png');
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 250px;
  margin-top: -30%;
  border-radius: 25px 25px 0 0;
}

h3 {
  margin-top: 10px;
}

.tick {
  font-size: 1rem;
  color: #000;
  padding: 8px;
  border-color: #000;
  --el-button-hover-text-color: #000;
  --el-button-hover-border-color: #000;
  border-radius: 20px;
  width: 60%;
  background-color: rgb(205 227 255);
  --el-button-hover-bg-color: #abd0fd;
}

.message {
  font-size: 12px;
  margin-top: -10px;
}

</style>