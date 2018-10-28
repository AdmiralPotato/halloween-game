<template>
  <div id="app">
    <GameThree />
    <GameAscii />
    <Controls />
  </div>
</template>

<script>
import Controls from './components/Controls'
import GameAscii from './components/GameAscii'
import GameThree from './components/GameThree'

export default {
  name: 'app',
  components: {
    Controls,
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
