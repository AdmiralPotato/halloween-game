import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const gameTemplate = `
HHHHHHHHHHHHHHHHHH-
G                 H
HHHHHHHHHHHHHHHHH H
-HHHHHHHHHHHHHHHH H
H                 H
H HHHHHHHH HHHHHH H
H H------H H-HH-H H
H HHHHHHHH HH  HH H
H              HH H
H HHHHHHHH HH  HH H
H H------H H-HH-H H
H HHHHHHHH HHHHHH H
H                 X
-HHHHHHHHHHHHHHHHH-`
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
  const charAtNewIndex = mapLast[newIndex]
  if (charAtNewIndex === ' ') {
    gIndex = newIndex
    map = spliceSlice(map, gIndexLast, 1, ' ')
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
  if (
    charAtNewIndex === 'X' ||
    map.indexOf('H') === -1
  ) {
    alert(`END. MOVES: ${moves}, SCORE: ${score}`)
    moves = 0
    score = 0
    map = gameTemplate
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
    moves: 0,
    score: 0,
    map: gameTemplate
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
    }
  },
  mutations: {
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
    }
  },
  actions: {
    move ({ state, commit }, payload) {
      commit('move', payload)
    }
  }
})
