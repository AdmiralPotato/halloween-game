<template>
  <div class="controls">
    <div class="relative">
      <button
        v-for="item in $options.buttons"
        :key="item.action"
        class="control"
        :class="item.direction"
        @click.prevent.stop="$store.dispatch('move', item.direction)"
      >{{item.label}}</button>
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
        this.$store.dispatch('move', direction)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.controls {
  position: absolute;
  top: 0;
  right: 0;
  .relative {
    position: relative;
    height: 9rem;
    width: 9rem;
  }
  .control {
    display: block;
    position: absolute;
    width: 3rem;
    height: 3rem;
    line-height: 3rem;
    font-size: 2.5rem;
    margin: auto;
    padding: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    &.up { bottom: auto; }
    &.down { top: auto; }
    &.left { right: auto; }
    &.right { left: auto; }
  }
}
</style>
