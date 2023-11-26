<script setup>

</script>

<template>
  <el-main>

  <div class="blue" style="height: 78vh;">
    <div class="white-box">
        <h1 class="detailed-plan">这里是应急预案</h1>
    </div>
    <div class="plan">应急预案</div>
  </div>
  
  </el-main>
</template>

<style>
.blue {
  background-color: rgb(157,186,220);
  border-radius: 30px;
  display: flex;
  margin-right: 7%;
  margin-bottom: auto;
  justify-content: center;
  align-items: center;
}
.white-box {
  background-color: white;
  border-radius: 20px;
  height: 88%;
  width: 94%;
}
.plan {
  position: absolute;
  top: 13%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  width: 20%;
  padding: 1%;
  border: 1px solid #000;
  border-radius: 24px;
  background: linear-gradient(to bottom right, rgb(161, 205, 255), white 50%, rgb(255, 255, 183));
}
.detailed-plan{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80%;
}
</style>