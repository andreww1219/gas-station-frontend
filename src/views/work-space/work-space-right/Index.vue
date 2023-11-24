<!--
*@author andrew
*@date 2023/11/21 22:56
-->
<script setup>
import {RouterView, useRoute} from "vue-router";
import generateRoutes from "@/assets/js/generateRoutes";
import {computed} from "vue";
const route = useRoute()
const routes = computed(()=>{
  return generateRoutes(route.meta.type)
})

console.log(routes)
console.log(route.meta.title)
</script>

<template>
<div class="second-router-menu">
  <div class="route-change">
    <el-button
        v-for="item in routes"
        :class="['el-button', item.title===route.meta.title?'active':'']"
        @click="$router.push(item.url)">
      {{ item.title }}
    </el-button>
  </div>
  <div class="admin-info">
    <div class="photo-name">
        <div class="photo">
          <img src="@/assets/img/白子.jpg"/>
        </div>
        <div class="name">
          砂狼白子
        </div>
    </div>
  </div>
</div>
<div class="operating-space">
  <RouterView v-slot="{ Component }">
    <keep-alive>
      <component :is="Component"/>
    </keep-alive>
  </RouterView>
</div>
</template>
<style lang="less" scoped>
.second-router-menu{
  width: 100%;
  height: 12%;
  display: flex;
  flex-flow: row;
  .route-change{
    flex: 0 0 50%;
    display: flex;
    flex-flow: row;
    justify-content: left;
    align-items: center;
    .el-button {
      font-size: 1.2rem;
      color: #000;
      width:25%;
      padding: 4%;
      background-color: transparent;
      --el-button-hover-border-color: #000;
      --el-button-active-border-color: #000;
      border-radius: 40px;
      transition: 0.5s;
    }
    .el-button:hover{
      font-size: 1.4rem;

    }
    .el-button.active{
      background-color: #fff;
      border-color: #000;
    }
  }
  .admin-info{
    flex: 0 0 50%;
    display: flex;
    justify-content: right;
    .photo-name{
      flex: 0 0 40%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .photo{
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        border: 0.2rem solid #fff;
        background-color: var(--bkg-clr);
        img{
          border-radius: 50%;
          width: 100%;
          height: 100%;
        }
      }
      .name{
        margin-left: 0.5rem;
      }
    }
  }
}
.operating-space{
  width: 100%;
  height: 88%;
}
</style>
