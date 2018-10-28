<template>
  <div id="app">
    <Controls />
    <GameAscii />
    <div>
      <img
        alt="A Ghost that loves Candy Corn"
        src="https://assets1.ello.co/uploads/asset/attachment/4751629/ello-optimized-3f90478d.gif"
      />
    </div>
  </div>
</template>

<script>
import Controls from './components/Controls'
import GameAscii from './components/GameAscii'

export default {
  name: 'app',
  components: {
    Controls,
    GameAscii
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
