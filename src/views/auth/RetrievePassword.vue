<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRetrievePasswordStore } from "@/stores/auth";
const RPstore = useRetrievePasswordStore();

const captchaCanvas = ref<HTMLCanvasElement | null>(null);

const generateCaptcha = () => {
  const canvas = captchaCanvas.value;
  if (canvas) {
    const context = canvas.getContext("2d");
    if (!context) {
      // 处理上下文为空的情况
      console.error("Failed to get 2D context for canvas.");
      return;
    }

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";

    // 生成随机验证码字符串
    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      captcha += characters[randomIndex];
    }

    // 清空 Canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // 绘制验证码
    context.font = "24px sans-serif";
    context.fillStyle = "#000";
    context.fillText(captcha, 10, 30);

    for (let i = 0; i < 8; i++) {
      context.beginPath();
      context.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      context.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      context.strokeStyle = "#000";
      context.stroke();
    }

    // 添加噪点
    for (let i = 0; i < 100; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const radius = Math.random() * 2;
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.fillStyle = "#000";
      context.fill();
    }
  }
};

onMounted(() => {
  generateCaptcha();
});

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
        <div class="captcha-input">
          <el-input
              v-model="RPstore.form.captcha"
              placeholder="Please input captcha"
              autocomplete="off"
              />
          <div class="captcha">
            <canvas ref="captchaCanvas" width="80" height="35"></canvas>
          </div>
        </div>
      </el-form-item>

      <el-form-item label="新密码New password">
        <el-input
            v-model="RPstore.form.captcha"
            type="password"
            placeholder="Please input password"
            show-password 
        />
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
    margin-top: -20px;
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
.form-container {
  width: 85%; 
  margin: 0 auto; 
}
.captcha-input {
  display: flex;
  align-items: center;
  .captcha {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 100%;
  background-color: #f5f7fa;
  color: #333;
  font-size: 14px;
  border-left: 1px solid #ccc;
  }
  .el-input__inner {
  position: relative;
  padding-right: 60px;
  }
}

</style>
