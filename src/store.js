import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const spliceSlice = (str, index, count, add) => {
  return str.slice(0, index) + add + str.slice(index + count)
}
const getCoordOfDirection = (state, direction) => {
  const mapLast = state.map
  const xMax = mapLast.indexOf('\n', 1) - 1
  const yMax = (mapLast.match(/\n/g) || []).length - 1
  const gIndexLast = mapLast.indexOf('G', 1)
  const yLast = Math.floor((gIndexLast - 1) / (xMax + 1))
  const xLast = (gIndexLast - yLast) % xMax
  let x = xLast
  let y = yLast
  if (direction === 'up') { y = Math.max(y - 1, 0) }
  if (direction === 'down') { y = Math.min(y + 1, yMax) }
  if (direction === 'left') { x = Math.max(x - 1, 0) }
  if (direction === 'right') { x = Math.min(x + 1, xMax) }
  const newIndex = (y * xMax) + y + x
  let gIndex = gIndexLast
  let moves = state.moves
  let score = state.score
  let map = mapLast
  const charAtNewIndex = mapLast.charAt(newIndex)
  if (state.roadTiles.includes(charAtNewIndex)) {
    gIndex = newIndex
    const lastCharAtSpace = state.levels[state.currentLevel].charAt(gIndexLast)
    map = spliceSlice(map, gIndexLast, 1, lastCharAtSpace)
    map = spliceSlice(map, gIndex, 1, 'G')
  }
  if (charAtNewIndex === 'H') {
    score += 1
    map = spliceSlice(map, newIndex, 1, 'h')
  }
  if (
    gIndex !== gIndexLast ||
    score !== state.score
  ) {
    moves += 1
  }
  return {
    charAtNewIndex,
    gIndexLast,
    newIndex,
    yLast,
    xLast,
    x,
    y,
    moves,
    score,
    map
  }
}
export default new Vuex.Store({
  state: {
    charAtNewIndex: null,
    moves: 0,
    score: 0,
    levels: [],
    roadTiles: [],
    currentLevel: null,
    map: null
  },
  getters: {
    score: state => {
      return state.score
    },
    moves: state => {
      return state.moves
    },
    map: state => {
      return state.map
    },
    levels: state => {
      return state.levels
    },
    currentLevel: state => {
      return state.currentLevel
    }
  },
  mutations: {
    setLevels (state, payload) {
      console.log(payload)
      state.roadTiles = payload.roadTiles
      state.levels = payload.levels
    },
    startLevel (state, payload) {
      state.currentLevel = payload
      state.map = state.levels.length ? state.levels[state.currentLevel].replace('S', 'G') : null
      state.score = 0
      state.moves = 0
    },
    move (state, payload) {
      const direction = payload
      const newState = getCoordOfDirection(state, direction)
      console.log('store.mutations.move', {
        direction,
        ...newState,
        state
      })
      state.map = newState.map
      state.score = newState.score
      state.moves = newState.moves
      state.charAtNewIndex = newState.charAtNewIndex
    }
  },
  actions: {
    async loadLevels ({ dispatch }) {
      const result = await fetch('./levels.txt')
      const levelText = await result.text()
      let levelSplit = levelText.split('\n\n')
      const roadTiles = [...levelSplit.shift()]
      const levels = levelSplit.map((t) => '\n' + t)
      dispatch(
        'setLevels',
        {
          roadTiles,
          levels
        }
      )
    },
    setLevels ({ commit, dispatch }, payload) {
      commit('setLevels', payload)
      if (payload.levels.length) {
        dispatch('startLevel', 0)
      }
    },
    startLevel ({ commit }, payload) {
      commit('startLevel', payload)
    },
    move ({ state, commit, dispatch }, payload) {
      commit('move', payload)
      const win = state.map.indexOf('H') === -1
      const earlyExit = state.charAtNewIndex === 'X'
      if (win || earlyExit) {
        setTimeout(
          () => {
            alert(`END. MOVES: ${state.moves}, SCORE: ${state.score}`)
            dispatch('startLevel', state.currentLevel)
          },
          10
        )
      }
    }
  }
})
