<template>
  <div id="app">
    <GameThree />
    <Controls v-if="mode === 'play'" />
    <LevelSelect v-if="mode === 'levelSelect'" />
    <LevelWin v-if="mode === 'levelWin'" />
    <CharacterSelect v-if="mode === 'characterSelect'" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Controls from './components/Controls'
import LevelSelect from './components/LevelSelect'
import LevelWin from './components/LevelWin'
import GameThree from './components/GameThree'
import CharacterSelect from './components/CharacterSelect'

export default {
  name: 'app',
  components: {
    CharacterSelect,
    Controls,
    LevelSelect,
    LevelWin,
    GameThree
  },
  async mounted () {
    this.$store.dispatch('loadLevels')
  },
  computed: {
    ...mapGetters([
      'mode'
    ])
  }
}
</script>

<style lang="scss">
html, body {
  padding: 0;
  margin: 0;
}
body {
  background-color: #5d3758;
}

body *,
body *:before,
body *:after {
  box-sizing: border-box;
}
#app {
  font-family: Knewave, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ccc;
  height: 100%;
}

.control {
  display: inline-block;
  margin: 0.5rem;
  cursor: pointer;
  position: relative;
  text-align: center;
  line-height: 3.5rem;
  font-size: 3rem;
  border-radius: 1rem;
  background-color: #40408a;
  width: 4rem;
  height: 4rem;
  &.active,
  &:active {
    background-color: #ddd;
    color: #fa0;

    svg {
      path {
        fill: #fa0;
      }
    }
  }

  svg {
    display: block;
    width: 100%;
    height: 100%;

    path {
      fill: #ddd;
    }
  }
}
</style>
