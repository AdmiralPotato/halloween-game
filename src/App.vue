<template>
  <div id="app">
    <GameThree />
    <GameAscii v-if="debug" />
    <Controls />
    <LevelSelect />
  </div>
</template>

<script>
import Controls from './components/Controls'
import LevelSelect from './components/LevelSelect'
import GameAscii from './components/GameAscii'
import GameThree from './components/GameThree'

export default {
  name: 'app',
  data () {
    return {
      debug: false
    }
  },
  components: {
    Controls,
    LevelSelect,
    GameAscii,
    GameThree
  },
  async mounted () {
    this.$store.dispatch('loadLevels')
  }
}
</script>

<style lang="scss">
body {
  background-color: #5d3758;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ccc;
  margin-top: 60px;
}
</style>
