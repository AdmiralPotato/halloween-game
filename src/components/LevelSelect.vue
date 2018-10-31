<template>
  <div class="level-select">
    <h1>Level Select</h1>
    <div class="close">
      <div
        class="control"
        @mousedown.prevent.stop="$store.dispatch('mode', $store.getters.modePrevious)"
        @touchstart.prevent.stop="$store.dispatch('mode', $store.getters.modePrevious)"
      >
        <svg viewBox="0 0 32 32">
          <path d="M25.749,21.72c-1.507-1.994-3.014-3.988-4.521-5.982 c0.666-0.794,1.331-1.588,1.997-2.382c1.294-1.544,2.674-3.404,2.246-5.372c-0.059-0.272-0.159-0.548-0.359-0.742 c-0.704-0.687-1.457-1.33-2.444-1.6c-0.167-0.046-0.34-0.088-0.511-0.058c-0.21,0.037-0.384,0.179-0.547,0.317 c-1.615,1.374-3.072,2.924-4.396,4.58c-0.967-1.217-1.977-2.4-3.11-3.467c-0.741-0.697-1.936-2.02-2.955-2.275 C9.874,4.419,8.777,5.666,8.209,6.622c-0.866,1.456-1.339,2.4-0.244,3.887c1.41,1.915,2.838,3.824,4.308,5.696 c-2.26,2.054-4.247,4.387-6.227,6.712c-0.101,0.119-0.207,0.25-0.215,0.405c-0.01,0.196,0.138,0.361,0.278,0.5 c1.071,1.065,2.232,2.04,3.466,2.911c0.356,0.251,0.734,0.501,1.165,0.563c1.225,0.178,2.079-1.117,2.759-2.151 c0.577-0.877,1.253-1.684,1.928-2.489c0.386-0.461,0.772-0.921,1.158-1.382c0.795,0.852,1.596,1.698,2.447,2.497 c0.91,0.855,1.865,1.686,2.549,2.731c0.115,0.176,0.23,0.365,0.414,0.468c0.253,0.141,0.569,0.082,0.841-0.017 c1.515-0.552,2.411-2.089,3.1-3.547c0.128-0.27,0.256-0.557,0.228-0.855C26.135,22.239,25.939,21.97,25.749,21.72z" />
        </svg>
      </div>
    </div>
    <div class="controls">
      <div
        v-for="(item, index) in $store.getters.levels"
        :key="index"
        class="control"
        :class="{active: $store.getters.currentLevel === index}"
        @touchstart.prevent.stop="$store.dispatch('startLevel', index)"
        @mousedown.prevent.stop="$store.dispatch('startLevel', index)"
      >{{index + 1}}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.level-select {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 17rem;
  height: 21rem;
  margin: auto;
  background-color: #382440;
  border-radius: 1rem;
  h1{
    text-align: left;
    padding: 0 2rem;
    margin: 0;
    line-height: 5rem;
    font-size: 2rem;
  }
  .close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    .control {
      line-height: 2rem;
      font-size: 1.5rem;
      width: 2rem;
      height: 2rem;
      border-radius: 0.25rem;
    }
  }
  .controls {
    position: absolute;
    left: 0;
    right: 0;
    width: 15rem;
    margin: auto;
  }
}
</style>
