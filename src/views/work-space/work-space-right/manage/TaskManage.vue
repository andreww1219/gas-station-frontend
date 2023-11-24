<script setup>


// pagination
import {computed, ref} from "vue";

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
// tableData
const tableData = []
for (let i = 0; i < 2; i++) {
  tableData.push({
    title: '一个任务名称',
    desc: `一段假想的简介，这是一段比较长的简介`,
    owner: 'Andrew',
    startTime: '2016-06-16 14:30',
    success: '正在上传',
    progress: 50
  })
}
for (let i = 0; i < 2; i++) {
  tableData.push({
    title: '一个任务名称',
    desc: `一段假想的简介，这是一段比较长的简介`,
    owner: 'Andrew',
    startTime: '2016-06-16 14:30',
    success: '上传失败',
    progress: 100
  })
}
for (let i = 0; i < 3; i++) {
  tableData.push({
    title: '一个任务名称',
    desc: `一段假想的简介，这是一段比较长的简介`,
    owner: 'Andrew',
    startTime: '2016-06-16 14:30',
    success: '已完成',
    progress: 100
  })
}
const taskType = ref('all')  // all || completed || uncompleted
const computedData = computed(()=>{
  if(taskType.value === 'all'){
    return tableData
  }else if(taskType.value === 'uncompleted'){
    return tableData.filter(item=>item.success === '正在上传' || item.success === '上传失败')
  }else if(taskType.value === 'completed'){
    return tableData.filter(item=>item.success === '已完成')
  }
})
</script>

<template>
  <div class="manage">
    <div class="task-list">
      <div class="task-list-header">
        <div class="task-list-header-bar">
          <button :class="{active: taskType==='all'}" @click="taskType='all'">全部</button>
          <button :class="{active: taskType==='completed'}" @click="taskType='completed'">已完成</button>
          <button :class="{active: taskType==='uncompleted'}" @click="taskType='uncompleted'">未完成</button>
        </div>
        <div class="task-list-header-bar">
          <input type="text" placeholder="请输入"/>
          <div class="searchIcon">
            <el-icon ><Search></Search></el-icon>
          </div>
        </div>
      </div>
      <div class="task-list-item" v-for="data in computedData">
        <span class="task-list-item-block">Task</span>
        <div class="task-list-item-content">
          <div class="title">{{data.title}}</div>
          <div class="desc">
            {{data.desc}}
          </div>
        </div>
        <div class="task-list-item-owner" >
          <div>Owner</div>
          <div>{{data.owner}}</div>
        </div>
        <div class="task-list-item-startTime">
          <div>开始时间</div>
          <div>{{data.startTime}}</div>
        </div>
        <div class="task-list-item-progress">
          <div class="container">
            <div class="progress" :style="{width: data.progress+'%'}"></div>
          </div>
          <div class="percent">{{data.progress}}%</div>
        </div>
        <div :class="['task-list-item-success',
          data.success==='已完成'?'success':'',
          data.success==='正在上传'?'uploading':'',
          data.success==='上传失败'?'fail':'',]">
              {{  data.success }}
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
@import "@/assets/css/TaskManage";
</style>
