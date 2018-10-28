<template>
  <div class="game-view">
      <p>Score: {{score}}</p>
      <p>Moves: {{moves}}</p>
    <pre v-html="map"></pre>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'score',
      'moves',
      'map'
    ])
  }
}
</script>

<style lang="scss" scoped>
.game-view {
  pre {
    font-family: monospace;
    font-size: 1.5rem;
    line-height: 1.25rem;
    letter-spacing: 0.25rem;
  }
}
</style>
