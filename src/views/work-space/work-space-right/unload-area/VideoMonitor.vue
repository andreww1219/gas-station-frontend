<script setup>

</script>

<template>
 <el-main>
  <div class="blue-box" style="height: 78vh;">
    <el-container>
      <el-header class="introduction">广东省深圳市南山区深圳大学加油站点</el-header>
      <el-button class="alarm">一键报警</el-button>
      <el-main class="main-white"></el-main>
    </el-container>
    <el-aside>
      <div class="aside-content">识别参数：</div>
    </el-aside>
  </div>
 </el-main>
</template>

<style>
.main-white {
  background-color: white;
  border-radius: 10px;
  width: 80%;
  margin-left:6%;
  margin-bottom:4%;
}
.introduction{
  margin-left:5%;
  margin-top:4%;
  font-size: 14px;
  height:5%;
}
.el-aside {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: rgb(233, 248, 255);
  width: 20%;
  height:84%;
  border-radius: 10px;
  margin-top:4%;
  margin-left:-6%;
  margin-right:7%
}
.aside-content {
  text-align: left;
  font-size: 14px;
  margin-top:8%;
  margin-left:10%;
}
.alarm {
  background-color: rgb(250, 120, 120);
  color: white; 
  width:18%;
  margin-left: 68%; 
  margin-bottom:2%;
  border-color: #000;
  --el-button-hover-text-color: #ffffff;
  --el-button-hover-border-color: #000;
  --el-button-hover-bg-color: #ec514c;
}
.alarm:hover{
  font-size: 1.1rem;
}
</style>