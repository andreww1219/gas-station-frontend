<script setup lang="ts">
import { useLoginStore } from "@/stores/auth";
const loginStore = useLoginStore()

</script>

<template>
  <el-aside class="left-container">
    <img src="../../assets/img/login.png"  alt="no picture">
  </el-aside>
  <el-main class="right-container">
    <div class="form-container">
      <div class="pageTitle">登录</div>
      <el-form
          :model="loginStore.form"
          label-position="top">
        <el-form-item label="用户名Username">
          <el-input
              v-model="loginStore.form.username"
              placeholder="Please input username"/>
        </el-form-item>
        <el-form-item label="密码Password">
          <el-input
              v-model="loginStore.form.password"
              type="password"
              placeholder="Please input password"
              show-password />
        </el-form-item>
        <RouterLink to="/auth/retrieve-password">
          忘记密码
        </RouterLink>
      </el-form>
      <div class="formBottom">
        <el-button>登录</el-button>
        <div class="register-link" @click="$router.replace('/auth/register')">
          还没有账号? 注册
        </div>
      </div>
    </div>
  </el-main>

</template>

<style lang="less" scoped>
@import "@/assets/css/AuthPageRight.less";
.formBottom{
  margin-top: 15%;
  flex-flow: column;
  align-items: center;
}
.el-button{
  color: #fff;
  width:80%;
  height: 15%;
  padding: 5%;
  background-color: rgb(157,186,220);
  border-radius: 10px;
}
.el-button:hover{
  background-color: #fff;
  color: rgb(157,186,220);
  border-color: rgb(157,186,220);
}
.form-container {
  width: 85%; 
  margin: 0 auto; 
}
</style>
