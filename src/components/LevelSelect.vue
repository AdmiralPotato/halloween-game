<template>
  <div class="levels">
    <div
      v-for="(item, index) in $store.getters.levels"
      :key="index"
      class="control"
      :class="{active: $store.getters.currentLevel === index}"
      @click.prevent.stop="$store.dispatch('startLevel', index)"
    >{{index}}</div>
  </div>
</template>

<style lang="scss">
.levels {
  position: absolute;
  z-index: 1;
  top: 0.25rem;
  right: 0.25rem;
  .control {
    cursor: pointer;
    position: relative;
    width: 2rem;
    line-height: 2rem;
    font-size: 2rem;
    border-radius: 0.5rem;
    background-color: #40408a;
    margin: 0.25rem;
    &.active { background-color: #ddd; }
  }
}
</style>
