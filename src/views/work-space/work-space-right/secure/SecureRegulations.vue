<script setup>
import getImg from "@/utils/get-img";
const regulations = [
  {content:'汽车限速行驶，防止出现摩擦产生火花；', img:'regulation/1.汽车限速行驶，防止出现摩擦产生火花.jpg'},
  {content:'严禁给未熄火的车辆加油；', img:'regulation/2.工作人员必须穿防静电的工作服上岗.jpg'},
  {content:'工作人员必须穿防静电的工作服上岗；', img:'regulation/3.禁止工作人员穿带钉子的鞋子上班.jpg'},
  {content:'严禁在加油区和油罐区使用手机；', img:'regulation/4.严禁在加油站现场穿、脱和拍打化纤服装.png'},
  {content:'严禁工作人员穿戴钉子的鞋；', img:'regulation/5.站内严禁从事可能产生火花的作业.png'},
  {content:'汽不准携带危险品进站；', img:'regulation/6.不准在站内检修车辆.jpg'},
  {content:'严禁站内从事可能产生火花的作业；',img:'regulation/7.严禁直接向塑料容器、木制容器内灌装汽油.jpg'},
  {content:'严禁烟火；',img:'regulation/8、严禁给未熄火的车辆加油.png'},
  {content:'严禁在站内检修车辆；', img:'regulation/9.禁止烟火.jpg'},
  {content:'严禁在加油站现场穿、脱和拍打化纤服装；',img:'regulation/10.严禁在加油区和油罐区使用手机.jpg'},
  {content:'严禁直接向塑料容器、木制容器内罐装汽油；', img:'regulation/11、不准携带危险品进站.jpg'},
]
</script>

<template>
  <div class="container">
    <div class="regulation" v-for="regulation in regulations">
      <img :src="getImg(regulation.img)"/>
      <div class="content">{{regulation.content}}</div>
    </div>
    <div class="emphasisBlock">
      <div class="follow-rules">
        遵守规则!
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.container{
  position: absolute;
  top: 15%;
  left: 5%;
  width: 85%;
  height: 80%;
  border: 1px solid #000;
  border-radius: 2rem;
  background-color: var(--list-clr);


  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  .regulation{
    flex: 0 0 35%;
    height: 9%;
    display: flex;
    align-items: center;
    img{
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
    }
  }
  .emphasisBlock{
    flex: 0 0 35%;
    height: 9%;
    display: flex;
    justify-content: center;
    align-items: center;
    .follow-rules{
      flex: 0 0 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid #000;
      background-color: rgb(255,186,122);
      border-radius: 1.5rem;
    }
  }
}

</style>
