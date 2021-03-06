import Vue from 'vue'
import Vuex from 'vuex'
import { event } from 'vue-analytics'

Vue.use(Vuex)

const spliceSlice = (str, index, count, add) => {
  return str.slice(0, index) + add + str.slice(index + count)
}
const uppercaseHousesRegex = /[QWEDCXZA]/gm
const changeStateByDirection = (state, direction) => {
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
  if (charAtNewIndex.match(uppercaseHousesRegex)) {
    score += 1
    map = spliceSlice(map, newIndex, 1, charAtNewIndex.toLocaleLowerCase())
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
let totalWinCount = 0
export default new Vuex.Store({
  state: {
    charAtNewIndex: null,
    lastDirection: null,
    moves: 0,
    score: 0,
    levels: [],
    roadTiles: [],
    mode: 'characterSelect',
    modePrevious: 'characterSelect',
    character: null,
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
    mode: state => {
      return state.mode
    },
    modePrevious: state => {
      return state.modePrevious
    },
    character: state => {
      return state.character
    },
    levels: state => {
      return state.levels
    },
    currentLevel: state => {
      return state.currentLevel
    },
    lastDirection: state => {
      return state.lastDirection
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
    mode (state, payload) {
      state.modePrevious = state.mode
      state.mode = payload
    },
    selectCharacter (state, payload) {
      state.character = payload
    },
    move (state, payload) {
      const direction = payload
      const newState = changeStateByDirection(state, direction)
      state.lastDirection = direction
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
    setLevels ({ commit }, payload) {
      commit('setLevels', payload)
    },
    selectCharacter ({ commit }, payload) {
      commit('selectCharacter', payload)
      commit('startLevel', 0)
      commit('mode', 'play')
      event('interaction', 'selectCharacter', payload, null)
    },
    startLevel ({ state, commit }, payload) {
      commit('startLevel', payload)
      commit('mode', 'play')
      event('interaction', 'startLevel', null, state.currentLevel)
    },
    mode ({ state, commit }, payload) {
      commit('mode', payload)
      event('interaction', 'mode', payload, null)
    },
    nextLevel ({ state, commit }) {
      const nextLevel = (state.currentLevel + 1) % state.levels.length
      commit('startLevel', nextLevel)
      commit('mode', 'play')
      event('interaction', 'nextLevel', null, state.currentLevel)
    },
    move ({ state, commit }, payload) {
      commit('move', payload)
      const win = !state.map.match(uppercaseHousesRegex)
      const earlyExit = state.charAtNewIndex === '!'
      if (win || earlyExit) {
        totalWinCount += 1
        event(
          'interaction',
          'win',
          `currentLevel: ${state.currentLevel}, score: ${state.score}, moves: ${state.moves}`,
          totalWinCount
        )
        event(
          'interaction',
          'winMap',
          state.map,
          win ? 1 : 0
        )
        setTimeout(
          () => {
            commit('mode', 'levelWin')
          },
          200
        )
      }
    }
  }
})
