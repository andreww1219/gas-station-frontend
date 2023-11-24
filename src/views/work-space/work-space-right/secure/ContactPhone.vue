<script setup>
import architecture from '@/const/architecture.json'
</script>

<template>
  <div class="personnel">
    <div class="block">
      <div class="leftBar">
        <div class="text">加油站人员架构</div>
      </div>
      <div class="image">
        <img
            src="@/assets/img/架构.png"
            alt=""
            width="500"
            style="height: fit-content"
        />
      </div>
    </div>
    <div class="block">
      <div class="leftBar">
        <div class="text">加油站人员信息</div>
      </div>
      <div class="list">
        <div class="item" v-for="info in architecture.data" :key="info.id">
          <div class="item-role">{{info.role}}</div>
          <div class="item-name">姓名{{info.name}}</div>
          <div class="item-id">工号{{info.cardId}}</div>
          <div class="item-phone">手机号码{{info.phone}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.personnel{
  width: 95%;
  height: 95%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  .block{
    flex: 0 0 48%;
    width: 90%;
    border: 1px solid #000 ;
    border-radius: 3rem;
    background-color: var(--list-clr);

    display: flex;
    align-items: center;
    justify-content: space-between;
    .leftBar{
      flex: 0 0 4%;
      height: 80%;
      margin-left: 5%;
      border: 1px solid #000 ;
      border-radius: 3rem;
      background-color: rgb(255,186,122);
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      .text{
        writing-mode: vertical-rl;
        font-size: 1.2rem;
        font-weight: bolder;
      }
    }// leftBar
    .image{
      flex: 0 0 70%;
      height: 100%;
      display: flex;
      img{
        height: 60%;
      }
    }
    .list{
      flex: 0 60%;
      height: 100%;
      margin-right: 12%;
      display: flex;
      flex-flow: column;
      justify-content: space-around;
      .item{
        flex: 0 0 8%;
        display: flex;
        flex-flow: row;
        align-items: center;
        &-role{
          flex: 0 0 20%;
        }
        &-name{
          flex: 0 0 20%;
        }
        &-id{
           flex: 0 0 20%;
        }
        &-phone{
            flex: 0 0 30%;
        }
      }
    }
  }// block
}

</style>
