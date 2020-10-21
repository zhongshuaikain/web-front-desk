<template>
  <div class="TabbarItem" @click="onclick">
    <div>
      <div v-if="true">
        <slot name="isActive"></slot>
      </div>
      <div v-else>
        <slot name="noActive"></slot>
      </div>
    </div>
    <div>
      <slot name="character"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabbarItem",
    props: {
      path: String
    },
    methods: {
      onclick() {
        this.$router.push(this.path);
      }
    }
  }
</script>

<style scoped>

</style>
