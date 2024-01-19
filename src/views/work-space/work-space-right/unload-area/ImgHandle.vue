<script setup>
import {ref} from "vue";

const imgUpload = ref()
const img = ref()
const isShow = ref(false)
const chooseImage = () => {
  imgUpload.value.click();
}
const confirm = () => {
  isShow.value=true;
}
const clear = () => {
  isShow.value= false
  img.value.src = "/src/assets/img/piclook.png"
}
const upload = (e) => {
  let file = e.target.files[0]
  if(file){
    // replace img with the file
    img.value.src = window.URL.createObjectURL(file)
    // create form data
    let formData = new FormData()
    formData.append('file', file)
  }else{
    alert('获取图片失败')
  }
}

</script>

<template>
  <el-main>

    <div class="blue-box" style="height: 78vh;">

      <input type="file" formmethod="post" name="img"
             accept="image/*" hidden
             ref="imgUpload" @change="upload($event)" >
      <div class="white-block left-block">
        <el-header class="common-style hold">
          <div class="text">待检测图片</div>
        </el-header>
        <el-main>
          <img src="/src/assets/img/piclook.png" ref="img" class="image" @click="imgUpload.click"/>
        </el-main>
        <el-button class="common-button choose" @click="chooseImage">选择检测图片</el-button>
        <el-button class="common-button sure" @click="confirm">确认上传</el-button>
      </div>

      <span class="white-text">说明：图片处理功能，需要上传一张照片，然后点击检测按钮，等待结果检出；若重复检测相同照片，则直接显示上次检测结果。</span>

      <div class="white-block right-block">
        <el-header class="common-style result">
          <div class="text">检测结果</div>
        </el-header>
        <el-main>
          <img v-if="!isShow" src="/src/assets/img/picres.png" class="image"/>
          <img v-if="isShow" src="/src/assets/img/加油站.png" class="image"/>
        </el-main>
        <el-button class="common-button clear" @click="clear">清除已检测缓存</el-button>
      </div>

    </div>

  </el-main>
</template>

<style>
.blue-box {
  background-color: rgb(157,186,220);
  border-radius: 30px;
  display: flex;
  margin-right: 7%;
  margin-bottom: auto;
}
.white-text {
  color: white;
  font-size: 14px;
  margin-top: 1.5%;
  padding-left: 7%;
  padding-top: 1.2%;
}
.white-block {
  background-color: white;
  border-radius: 30px;
  width: 36%;
  height: 60%;
  position: absolute;
  bottom: 13%;
  .el-main{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left:6%;
    margin-bottom:-5%;
    max-width: 100%;
    max-height: 100%;
    .image {
      cursor: pointer;
      margin-top: 5%;
      width: 90%;
      height: 90%;
    }
  }
}
.left-block {
  margin-left: 7%;
}
.right-block {
  right: 16%;
}

.common-style {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 37%;
  margin-top: 6%;
  margin-bottom:-2%;
  font-size: 1rem;
  color: #000;
  width: 30%;
  height: 10%;
  padding: 3%;
  border: 1px solid #000;
  border-radius: 10px;
}
.hold {
  background-color: rgb(205 227 255);
}
.result {
  background-color: rgb(255, 250, 183);
}
.text {
  text-align: center;
}

.common-button{
  margin-top:4%;
  font-size: 1rem;
  color: #000;
  height: 7%;
  padding: 3%;
  border-color: #000;
  --el-button-hover-text-color: #000;
  --el-button-hover-border-color: #000;
  border-radius: 0.8rem;
  transition: 0.5s;
}
.common-button:hover{
  font-size: 1.1rem;
}
.choose{
  margin-left: 16%;
  width: 38%;
  background-color: rgb(205 227 255);
  --el-button-hover-bg-color: #abd0fd;
}
.sure{
  width: 35%;
  background-color: rgb(255, 206, 150);
  --el-button-hover-bg-color: #ffc16f;
}
.clear{
  margin-left: 34%;
  width: 38%;
  background-color: rgb(255, 251, 222);
  --el-button-hover-bg-color: #fdf7ab;
}

</style>
