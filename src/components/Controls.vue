<template>
  <div class="controls">
    <div class="score">
      <p>🍬: {{$store.getters.score}}</p>
      <p>➡️: {{$store.getters.moves}}</p>
    </div>
    <div class="arrows">
      <div class="relative">
        <div
          v-for="item in $options.buttons"
          :key="item.action"
          class="control-spacer"
          :class="item.direction"
        >
          <div
            class="control"
            @touchstart.prevent.stop="$store.dispatch('move', item.direction)"
            @mousedown.prevent.stop="$store.dispatch('move', item.direction)"
          >{{item.label}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const keyMap = {
  'ArrowUp': 'up',
  'ArrowDown': 'down',
  'ArrowLeft': 'left',
  'ArrowRight': 'right'
}
export default {
  name: 'Controls',
  buttons: [
    { label: '⬆', direction: 'up' },
    { label: '⬇', direction: 'down' },
    { label: '⬅', direction: 'left' },
    { label: '➡', direction: 'right' }
  ],
  mounted () {
    window.document.body.addEventListener('keydown', this.handleKeydown)
  },
  destroyed () {
    window.document.body.removeEventListener('keydown', this.handleKeydown)
  },
  methods: {
    handleKeydown (event) {
      const direction = keyMap[event.key]
      if (direction) {
        event.preventDefault()
        event.stopPropagation()
        this.$store.dispatch('move', direction)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.controls {
  .score {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    border-radius: 1rem;
    background-color: #40408a;
    line-height: 0.5rem;
    font-size: 2rem;
    padding: 0 1rem;
  }
  .arrows {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 2;
    .relative {
      position: relative;
      height: 9.5rem;
      width: 14rem;
      .control-spacer {
        position: absolute;
        display: block;
        width: 4rem;
        height: 4rem;
        padding: 0.5rem;
        margin: auto;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        &.up { bottom: auto; }
        &.down { top: auto; }
        &.left { right: auto;  top: auto;}
        &.right { left: auto;  top: auto;}
        .control {
          cursor: pointer;
          position: relative;
          line-height: 4rem;
          font-size: 4rem;
          border-radius: 1rem;
          background-color: #40408a;
          width: 100%;
          height: 100%;
          &.active { background-color: #ddd; }
        }
      }
    }
  }
}
</style>
