<script setup lang="ts">
import { useRetrievePasswordStore } from "@/stores/auth";
const RPstore = useRetrievePasswordStore()

</script>

<template>
  <el-aside class="left-container">
    <img src="../../assets/img/retrieve.png"  alt="no picture">
  </el-aside>
  <el-main class="right-container">
    <div class="form-container">
      <div class="pageTitle">找回密码</div>
      <el-form
          :model="RPstore.form"
          label-position="top">
        <el-form-item label="手机号码Tel">
          <el-input
              v-model="RPstore.form.TEL"
              placeholder="Please input telephone number"/>
        </el-form-item>
        <el-form-item label="验证VerificationCode">
          <el-input
              v-model="RPstore.form.captcha"
              placeholder="Please input captcha"
              />
        </el-form-item>
        <el-form-item label="新密码New password">
          <el-input
              v-model="RPstore.form.captcha"
              type="password"
              placeholder="Please input password"
              show-password />
        </el-form-item>
      </el-form>
      <div class="formBottom">
        <div class="buttons">
          <el-button @click="$router.push('/auth/login')">返回</el-button>
          <el-button>确认</el-button>
        </div>
        <div class="register-link" @click="$router.push('/auth/login')">
          还记得密码? 登录
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
</style>
