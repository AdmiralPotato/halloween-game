<template>
  <div class="character-select">
    <h1>Halloween Game!</h1>
    <p>Pick a character</p>
    <div class="characters">
      <div class="characters-square">
        <div
          class="character"
          v-for="item in $options.characters"
          :key="item"
          :class="item"
          @touchstart.prevent.stop="$store.dispatch('selectCharacter', item)"
          @mousedown="$store.dispatch('selectCharacter', item)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import Score from './Score'

export default {
  characters: [
    'ghost',
    'alien'
  ],
  components: {
    Score
  }
}
</script>

<style lang="scss" scoped>
.character-select {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  h1 {
    padding: 2rem;
    margin: 0;
    line-height: 3rem;
    font-size: 3rem;
    width: 100%;
    color: #ddd;
  }
  p {
    position: absolute;
    bottom: 4rem;
    padding: 0 1rem;
    margin: 0;
    line-height: 2rem;
    font-size: 1.5rem;
    width: 100%;
    color: #ddd;
  }
  .characters {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vmin;
    height: 100vmin;
    margin: auto;
    .characters-square {
      position: relative;
      width: 100%;
      height: 100%;
      .character {
        position: relative;
        display: inline-block;
        cursor: pointer;
        top: 25%;
        width: 48%;
        height: 48%;
        margin: 1%;
        border-radius: 1rem;
        border: 2px solid rgba(0, 0, 0, 0.25);
      }
    }
  }
  .options {
    width: 14rem;
    font-size: 1.75rem;
  }
}
</style>
