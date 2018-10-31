<template>
  <div class="level-win">
    <h1>You Win!</h1>
    <score />
    <div class="controls">
      <button
        class="control options"
        type="button"
        @mousedown="$store.dispatch('startLevel', $store.getters.currentLevel)"
        @touchstart.prevent.stop="$store.dispatch('startLevel', $store.getters.currentLevel)"
      >Replay</button>
      <button
        class="control options"
        type="button"
        @mousedown="$store.dispatch('nextLevel')"
        @touchstart.prevent.stop="$store.dispatch('nextLevel')"
      >Next Level</button>
    </div>
  </div>
</template>

<script>
import Score from './Score'

export default {
  components: {
    Score
  }
}
</script>

<style lang="scss" scoped>
.level-win {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 17rem;
  height: 23rem;
  margin: auto;
  background-color: #382440;
  border-radius: 1rem;
  h1{
    padding: 0 2rem;
    margin: 0;
    line-height: 5rem;
    font-size: 3rem;
  }
  .close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    .control {
      line-height: 2rem;
      font-size: 1.5rem;
      width: 2rem;
      height: 2rem;
      border-radius: 0.25rem;
    }
  }
  .controls {
    position: absolute;
    left: 0;
    right: 0;
    width: 15rem;
    margin: auto;
  }
  .options {
    width: 14rem;
    font-size: 1.75rem;
  }
}
</style>
