<template>
  <div id="app">
    <Tabbar>
      <TabbarItem path="/home">
         <img slot="noActive" src="./assets/img/home.svg" alt="">
         <img slot="isActive" src="./assets/img/home_activated.svg" alt="">
        <div slot="character" src="" alt="">1</div>
      </TabbarItem>
      <TabbarItem path="/classify">
        <img slot="noActive" src="./assets/img/classify.svg" alt="">
        <img slot="isActive" src="./assets/img/classify_activated.svg" alt="">
        <div slot="character" src="" alt="">2</div>
      </TabbarItem>
      <TabbarItem path="/car">
        <img slot="noActive" src="./assets/img/car.svg" alt="">
        <img slot="isActive" src="./assets/img/car_activated.svg" alt="">
        <div slot="character" src="" alt="">3</div>
      </TabbarItem>
      <TabbarItem path="/my">
        <img slot="noActive" src="./assets/img/my.svg" alt="">
        <img slot="isActive" src="./assets/img/my_activated.svg" alt="">
        <div slot="character" src="" alt="">4</div>
      </TabbarItem>
    </Tabbar>
  </div>
</template>

<script>
  import Tabbar from '@/components/Tabbar/Tabbar'
  import TabbarItem from '@/components/Tabbar/TabbarItem'

  export default {
    components: {
      Tabbar,
      TabbarItem
    }
  }
</script>

<style>
  @import 'assets/css/Tabbar.css';
  @import 'assets/css/base.css';
</style>
