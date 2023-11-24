<!--
*@author andrew
*@date 2023/11/10 11:08
-->
<script setup>
import { RouterView} from "vue-router";
import {useRoute} from "vue-router";
import {ref} from "vue";

const route = useRoute()

const items = ref([
  {id:0, icon:'Plus', type: '加油区', url:'/refuel-area'},
  {id:1, icon:'Minus', type: '卸油区', url: '/unload-area'},
  {id:2, icon:'Management', type: '后台管理', url: '/manage'},
  {id:3, icon:'WarningFilled', type: '安全措施', url:'/secure'}
])

</script>

<template>
<div class="work-space" >
  <div class="router-menu">
    <ul>
      <li
          v-for="item in items" :key="item.id"
          :class="['list', item.type===route.meta.type?'active':'']"
          @click="loadBkgClr;$router.push(item.url)"
      >
        <RouterLink :to="item.url">
          <el-icon size="2rem">
            <component :is="item.icon"/>
          </el-icon>
          <span class="text">
          {{ item.type }}
        </span>
        </RouterLink>
      </li>
      <div class="indicator">
        <div class="blocker"></div>
      </div>
    </ul>
  </div>
  <div class="work-space-right">
    <RouterView v-slot="{ Component }" >
      <keep-alive>
        <component :is="Component"/>
      </keep-alive>
    </RouterView>
  </div>
</div>
</template>

<style lang="less" scoped>
@import "@/assets/css/WorkSpace";

</style>
