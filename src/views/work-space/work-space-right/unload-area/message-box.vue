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
  border-radius: 5px;
  text-align: center;
  width: 25%;
  height: 42%;
  border-radius: 25px;
  background-image: linear-gradient(to bottom, #daeffd 63%, #ffffff 37%);
  background-size: cover;
}
.image-container {
  background-image: url('/src/assets/img/box.png');
  background-position: top left;
  background-repeat: no-repeat;
  background-size: contain;
  margin-left:7%;
  margin-top: -100px;
  width: 100%;
  height: 100%;
  border-radius: 25px 25px 0 0; 
}
.tick {
  margin-top:4%;
  font-size: 1rem;
  color: #000;
  padding: 3%;
  border-color: #000;
  --el-button-hover-text-color: #000;
  --el-button-hover-border-color: #000;
  border-radius: 20px;
  height: 13%;
  width: 40%;
  margin-top:-0.7%;
  background-color: rgb(205 227 255);
  --el-button-hover-bg-color: #abd0fd;
}
.message {
  font-size: 12px; 
  margin-top:-4%;
}

</style>
