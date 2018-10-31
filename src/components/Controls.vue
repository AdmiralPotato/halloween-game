<template>
  <div class="controls">
    <div class="score-holder">
      <score />
    </div>
    <div
      class="menu-toggle"
    >
      <div
        class="control"
        @mousedown.prevent.stop="$store.dispatch('mode', 'levelSelect')"
        @touchstart.prevent.stop="$store.dispatch('mode', 'levelSelect')"
      >
        <svg viewBox="0 0 32 32">
          <path d="M23.374,8.626H8.626 c-0.393,0-0.712,0.319-0.712,0.712v1.508c0,0.393,0.319,0.712,0.712,0.712h14.747c0.393,0,0.712-0.319,0.712-0.712V9.338 C24.086,8.945,23.767,8.626,23.374,8.626z M23.374,14.534H8.626c-0.393,0-0.712,0.319-0.712,0.712v1.508 c0,0.393,0.319,0.712,0.712,0.712h14.747c0.393,0,0.712-0.319,0.712-0.712v-1.508C24.086,14.853,23.767,14.534,23.374,14.534z M23.374,20.441H8.626c-0.393,0-0.712,0.319-0.712,0.712v1.508c0,0.393,0.319,0.712,0.712,0.712h14.747 c0.393,0,0.712-0.319,0.712-0.712v-1.508C24.086,20.76,23.767,20.441,23.374,20.441z" />
        </svg>
      </div>
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
          >
            <svg viewBox="0 0 32 32">
              <path :d="item.path" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Score from './Score'

const keyMap = {
  'ArrowUp': 'up',
  'ArrowDown': 'down',
  'ArrowLeft': 'left',
  'ArrowRight': 'right',
  'w': 'up',
  's': 'down',
  'a': 'left',
  'd': 'right',
  'W': 'up',
  'S': 'down',
  'A': 'left',
  'D': 'right',
  '8': 'up',
  '2': 'down',
  '5': 'down',
  '4': 'left',
  '6': 'right'
}
export default {
  name: 'Controls',
  components: {
    Score
  },
  buttons: [
    {
      direction: 'up',
      path: 'M23.497,12.822l-3.702,1.028 c-0.369,0.102-0.614,0.45-0.587,0.832l0.837,11.723c0.036,0.505-0.399,0.918-0.902,0.855l-5.956-0.744 c-0.402-0.05-0.704-0.392-0.704-0.798V13.436c0-0.393-0.284-0.728-0.672-0.793l-3.225-0.538c-0.694-0.116-0.915-1.003-0.357-1.431 l7.532-5.775c0.311-0.238,0.748-0.218,1.035,0.048l7.031,6.51C24.29,11.885,24.103,12.654,23.497,12.822z'
    },
    {
      direction: 'down',
      path: 'M8.503,19.178l3.702-1.028 c0.369-0.102,0.614-0.45,0.587-0.832L11.954,5.595c-0.036-0.505,0.399-0.918,0.902-0.855l5.956,0.744 c0.402,0.05,0.704,0.392,0.704,0.798v12.282c0,0.393,0.284,0.728,0.672,0.793l3.225,0.538c0.694,0.116,0.915,1.003,0.357,1.431 l-7.532,5.775c-0.311,0.238-0.748,0.218-1.035-0.048l-7.031-6.51C7.71,20.115,7.897,19.346,8.503,19.178z'
    },
    {
      direction: 'left',
      path: 'M12.822,8.503l1.028,3.702 c0.102,0.369,0.45,0.614,0.832,0.587l11.723-0.837c0.505-0.036,0.918,0.399,0.855,0.902l-0.744,5.956 c-0.05,0.402-0.392,0.704-0.798,0.704H13.436c-0.393,0-0.728,0.284-0.793,0.672l-0.538,3.225c-0.116,0.694-1.003,0.915-1.431,0.357 l-5.775-7.532c-0.238-0.311-0.218-0.748,0.048-1.035l6.51-7.031C11.885,7.71,12.654,7.897,12.822,8.503z'
    },
    {
      direction: 'right',
      path: 'M19.178,23.497l-1.028-3.702 c-0.102-0.369-0.45-0.614-0.832-0.587L5.595,20.046c-0.505,0.036-0.918-0.399-0.855-0.902l0.744-5.956 c0.05-0.402,0.392-0.704,0.798-0.704h12.282c0.393,0,0.728-0.284,0.793-0.672l0.538-3.225c0.116-0.694,1.003-0.915,1.431-0.357 l5.775,7.532c0.238,0.311,0.218,0.748-0.048,1.035l-6.51,7.031C20.115,24.29,19.346,24.103,19.178,23.497z'
    }
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
  .score-holder {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    border-radius: 1rem;
    background-color: #40408a;
  }
  .menu-toggle {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }
  .arrows {
    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;
    overflow: hidden;
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
      }
    }
  }
}
</style>
