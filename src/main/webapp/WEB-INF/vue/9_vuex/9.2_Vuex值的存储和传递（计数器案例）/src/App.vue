<template>
  <div>
    <!--    <h2>计数器的值为{{count}}</h2>-->
    <!--    <button>+</button>-->
    <!--    <button>-</button>-->
    <!--   -->
    <cpn>
      <h2>计数器的值为{{$store.state.count}}</h2>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </cpn>
  </div>
</template>

<script>
  import cpn from './views/count'

  export default {
    name: 'App',
    components: {
      cpn
    },
    methods: {
      increment() {
        this.$store.commit('add')

      },
      decrement() {
        this.$store.commit('jian')
      }
    }
  }
</script>

<style>

</style>
