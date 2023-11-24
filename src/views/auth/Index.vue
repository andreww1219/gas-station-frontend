<!--
*@author andrew
*@date 2023/11/10 10:52
-->
<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div class="whole-page">
    <el-container direction="horizontal" class="login-container">
      <RouterView v-slot="{ Component }">
        <keep-alive>
          <component :is="Component"/>
        </keep-alive>
      </RouterView>
    </el-container>
  </div>
</template>

<style>
.whole-page{
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--bkg-clr);
  .login-container{
    display: flex;

    position: absolute;
    width: 50%;
    height: 70%;
    margin-left: 25%;
    margin-top: 8%;
    border-radius: 20px;

  }
}

</style>
