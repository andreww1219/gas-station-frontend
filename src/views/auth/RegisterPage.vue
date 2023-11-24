<script setup lang="ts">
import { useRegisterStore } from "@/stores/auth"
const registerStore = useRegisterStore()

</script>

<template>
  <el-aside class="left-container">
    <img src="../../assets/img/register.png" >
  </el-aside>
  <el-main class="right-container">
    <div class="form-container">
      <div class="pageTitle">注册</div>

      <el-form
          size="small"
          :model="registerStore.form"
          label-position="top">
        <el-form-item label="工号EMID" class="custom-form-item">
          <el-input
              v-model="registerStore.form.EMID"
              placeholder="Please input EMID"
              class="mode"/>
        </el-form-item>

        <el-form-item label="手机号码TEl" class="custom-form-item">
          <el-input
              v-model="registerStore.form.TEL"
              placeholder="Please input TEL"/>
        </el-form-item>

        <el-form-item label="用户名Username" class="custom-form-item">
          <el-input
              v-model="registerStore.form.username"
              placeholder="Please input username"/>
        </el-form-item>

        <el-form-item label="密码Password" class="custom-form-item">
          <el-input
              v-model="registerStore.form.password"
              type="password"
              placeholder="Please input password"
              show-password />
        </el-form-item>

      </el-form>

      <div class="formBottom">
        <div class="buttons">
          <el-button @click="$router.push('/auth/login')">返回</el-button>
          <el-button>注册</el-button>
        </div>
        <div class="register-link" @click="$router.replace('/auth/login')">
          已经有账号? 登录
        </div>
      </div>
    </div>
  </el-main>

</template>
<style lang="less" scoped>
@import "@/assets/css/AuthPageRight.less";
.formBottom{
  margin-top: 5%;
  flex-flow: row wrap;
  justify-content: center;
  .buttons{
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    .el-button:nth-child(1){
      width:37%;
      color: #fff;
      height: 15%;
      padding: 5%;
      background-color: rgb(232,223,179);
      border-radius: 10px;
    }
    .el-button:nth-child(2){
      width: 50%;
      color: #fff;
      height: 15%;
      padding: 5%;
      background-color: rgb(157,186,220);
      border-radius: 10px;
    }
    .el-button:nth-child(1):hover{
      background-color: #fff;
      color: rgb(232,223,179);
      border-color: rgb(232,223,179);
    }
    .el-button:nth-child(2):hover{
      background-color: #fff;
      color: rgb(157,186,220);
      border-color: rgb(157,186,220);
    }
  }
}
.el-form-item--small{
  margin-bottom: 8px;
}

</style>
