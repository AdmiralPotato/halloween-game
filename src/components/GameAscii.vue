<template>
  <div class="game-ascii">
    <pre>
Score: {{score}}
Moves: {{moves}}
<span v-html="map"></span>
    </pre>
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
.game-ascii {
  position: relative;
  z-index: 1;

  pre {
    font-family: monospace;
    font-size: 1.5rem;
    line-height: 1.25rem;
    letter-spacing: 0.25rem;
    text-align: left;
  }
}
</style>
