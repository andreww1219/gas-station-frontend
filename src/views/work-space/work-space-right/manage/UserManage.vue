<script setup>
// tableData
import {formatTime} from "@/utils/format";
import {computed, ref} from "vue";

const columns = [
  {
    title: '序号',
    dataIndex: 'key',
    width: '8%',
  },
  {
    title: '用户名',
    dataIndex: 'name',
    width: '20%',
  },
  {
    title: '头像',
    dataIndex: 'avatar',
    width: '15%',
    slots: {
      customRender: 'avatar',
    },
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: '20%',
  },
  {
    title: '用户权限',
    dataIndex: 'right',
    width: '15%',
  },
  {
    title: '操作',
    key: 'action',
    width: '22%',
    slots: {
      customRender: 'operation',
    },
  },
]

const tableData = []

for (let i = 0; i < 7; i++) {
  tableData.push({
    key: i.toString(),
    name: `Andrew ${i}`,
    avatar: '@/assets/img/白子.jpg',
    createTime: formatTime(new Date().toString()),
    right: `管理员`,
    action: 'name',
  })
}

// pagination
const totalPage = ref(20)
const currentPage = ref(5)
const pageSize = ref(7)
const skipPageNumber = ref(1)
const pageList = computed(()=>{
  const halfPageSize = Math.floor(pageSize.value/2)
  const list = []
  if(totalPage.value <= pageSize.value){
    for(let i = 1;i<=totalPage.value;++i){
      list.push(i)
    }
  }else if (currentPage.value >= 1+halfPageSize && currentPage.value <= totalPage.value - halfPageSize){
    for(let i = -halfPageSize;i<=halfPageSize;++i){
      list.push(currentPage.value + i)
    }
  }else if (currentPage.value < 1+halfPageSize){
    for(let i = 1;i<= pageSize.value;++i){
      list.push(i)
    }
  }else if (currentPage.value > totalPage.value - halfPageSize){
    for(let i = 1 + totalPage.value-pageSize.value;i<= totalPage.value;++i){
      list.push(i)
    }
  }
  return list
})

</script>

<template>
  <div class="manage">
    <div class="user-list">
      <div class="user-list-header" >
        <div v-for="col in columns" :style="{width: col.width}">{{ col.title}}</div>
      </div>
      <div class="user-list-column"
            v-for="data in tableData">
        <div class="user-list-column-item"
            v-for="col in columns" :style="{width: col.width}">
          <div class="user-list-column-item-img"
              v-if="col.dataIndex==='avatar'">
            <img src="@/assets/img/白子.jpg" alt="呜呜，没有图片">
          </div>
          <div class="actions" v-else-if="col.key==='action'">
            <div class="action">编辑</div>
            <div class="action">启用</div>
            <div class="action">删除</div>
          </div>
          <div v-else>
            {{ data[col.dataIndex]}}
          </div>
        </div>
      </div>
    </div>
    <div class="pagination">
      <div class="pagination-bar">
        <el-icon class="arrow" size="2rem"
                 @click="--currentPage"
        ><Back></Back></el-icon>
        <div :class="['pagination-bar-button', currentPage===page?'active':'']"
            v-for="page in pageList"
             @click="currentPage=page"
        >
          {{page}}
        </div>
        <el-icon class="arrow" size="2rem"
          @click="++currentPage"
        ><Right></Right></el-icon>
      </div>
      <div class="page-skipper">
        跳至 <input
          @keyup.enter="currentPage=skipPageNumber"
          v-model.number="skipPageNumber"/> 页
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "@/assets/css/Manage";
@import "@/assets/css/UserManage";
</style>
