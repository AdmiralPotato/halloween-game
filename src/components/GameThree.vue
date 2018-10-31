<template>
  <div class="game-three">
    <div class="has-to-be-here-for-reactivity">
      <pre>
Mode: {{mode}}
Character: {{character}}
Score: {{score}}
Moves: {{moves}}
{{map}}
      </pre>
</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TWEEN from '@tweenjs/tween.js'
import * as THREE from 'three'
window.THREE = THREE
require('three/examples/js/loaders/GLTFLoader')
require('three/examples/js/controls/OrbitControls')

const gltfLoader = new THREE.GLTFLoader()

const prepGLTFPlayer = (gltf) => {
  let lastTime = 0
  gltf.animationNameMap = {}
  gltf.animations.forEach((animation) => {
    gltf.animationNameMap[animation.name] = animation
  })
  gltf.update = (time) => {
    const dt = (time - lastTime) / 1000
    gltf.mixer.update(dt)
    lastTime = time
  }
  gltf.playAnimationByName = (name) => {
    if (gltf.lastAnimation !== name) {
      gltf.mixer = new THREE.AnimationMixer(gltf.scene)
      const clip = gltf.animationNameMap[name]
      let action = gltf.mixer.clipAction(clip)
      action.play()
      gltf.lastAnimation = name
    }
  }
}

let gltfAssetMap = {}
let unpackedObjectMap = {}
const loadGltfAssets = async (assetList) => {
  let promiseList = []
  assetList.forEach((asset) => {
    if (!gltfAssetMap[asset]) {
      let _resolve
      let _reject
      const promise = new Promise((resolve, reject) => {
        _resolve = resolve
        _reject = reject
      })
      gltfLoader.load(
        `models/${asset}.gltf`,
        (gltf) => {
          gltfAssetMap[asset] = gltf
          prepGLTFPlayer(gltf)
          gltf.scene.children.forEach((item) => {
            unpackedObjectMap[item.name] = item
          })
          _resolve(gltf)
        },
        undefined,
        _reject
      )
      promiseList.push(promise)
    }
  })
  await Promise.all(promiseList)
  return gltfAssetMap
}

const renderer = new THREE.WebGLRenderer({
  alpha: true,
  antialias: true
})
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  10000
)
const scene = new THREE.Scene()
const group = new THREE.Group()
scene.add(group)

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
directionalLight.position.set(-2, 2, 2)
directionalLight.castShadow = true
scene.add(directionalLight)

const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1.0)
directionalLight2.position.set(1, 2, 1)
directionalLight2.castShadow = true
scene.add(directionalLight2)

const ambientLight = new THREE.AmbientLight(0xffffff, 2)
scene.add(ambientLight)

const light = new THREE.HemisphereLight(0xcefeff, 0xb3eaf0, 0.5)
scene.add(light)
scene.fog = new THREE.Fog('#5d3758', 9, 12)

const deg45 = Math.PI / 4
const directionMap = {
  X: -deg45 * 4,
  Z: -deg45 * 6,
  A: -deg45 * 6,
  Q: 0,
  W: 0,
  E: -deg45 * 2,
  D: -deg45 * 2,
  C: -deg45 * 4,
  'S': 0,
  ' ': 0,
  '┃': 0,
  '━': -deg45 * 2,
  '┓': -deg45 * 4,
  '┛': -deg45 * 6,
  '┗': 0,
  '┏': -deg45 * 2,
  ',': -deg45 * 2,
  '┻': 0,
  '┣': -deg45 * 2,
  '┳': -deg45 * 4,
  '┫': -deg45 * 6,
  '╋': 0,
  '╻': -deg45 * 4,
  '╹': 0,
  '╺': -deg45 * 2,
  '╸': -deg45 * 6,
  'P': 0,
  'up': -deg45 * 2,
  'down': -deg45 * 6,
  'left': 0,
  'right': -deg45 * 4
}
const charModelMap = {
  'G': 'ghost',
  'Q': 'house_corner',
  'W': 'house',
  'E': 'house_corner',
  'D': 'house',
  'C': 'house_corner',
  'X': 'house',
  'Z': 'house_corner',
  'A': 'house',
  'S': 'road_spawn',
  ' ': 'park',
  '┃': 'road_horizontal',
  '━': 'road_horizontal',
  '┓': 'road_corner',
  '┛': 'road_corner',
  '┗': 'road_corner',
  '┏': 'road_corner',
  ',': 'start',
  '┻': 'road_tee',
  '┣': 'road_tee',
  '┳': 'road_tee',
  '┫': 'road_tee',
  '╋': 'road_plus',
  '╻': 'road_end',
  '╹': 'road_end',
  '╺': 'road_end',
  '╸': 'road_end',
  'P': 'park'
}
const houses = [
  'house_a',
  'house_b',
  'house_c'
]
const getHouseRandom = () => {
  const index = Math.floor(houses.length * Math.random())
  return houses[index]
}

const levelHolder = new THREE.Object3D()
levelHolder.rotation.x = -deg45 * 2

let lastLevel = null
let itemLevelMap = {}
let player = new THREE.Object3D()
let playerTweenQueue = []
const playerTweenOnComplete = () => {
  playerTweenQueue.shift()
  const nextTween = playerTweenQueue[0]
  if (nextTween) {
    nextTween.start()
  }
}

let characterMountA = new THREE.Object3D()
let characterMountB = new THREE.Object3D()
characterMountA.scale.setScalar(2.5)
characterMountB.scale.setScalar(2.5)
characterMountA.position.set(1, -0.65, 0)
characterMountB.position.set(-1, -0.55, 0)
characterMountA.rotation.set(Math.PI / 2, Math.PI, -Math.PI / 2)
characterMountB.rotation.set(Math.PI / 2, Math.PI, -Math.PI / 2)

const changeSceneMode = (mode, character) => {
  if (mode === 'characterSelect') {
    scene.remove(levelHolder)
    scene.add(characterMountA)
    scene.add(characterMountB)
    unpackedObjectMap.ghost_root.position.set(0, 0, 0)
    unpackedObjectMap.alien_root.position.set(0, 0, 0)
    characterMountA.add(unpackedObjectMap.ghost_root)
    characterMountB.add(unpackedObjectMap.alien_root)
    camera.position.set(0, 0, -5)
    camera.lookAt(new THREE.Vector3(0, 0, 0))
    controls.update()
  }
  if (mode === 'play') {
    scene.add(levelHolder)
    scene.remove(characterMountA)
    scene.remove(characterMountB)
    changeCharacter(character)
    camera.position.set(-1, 6, -5)
    camera.lookAt(new THREE.Vector3(0, 0, 0))
    controls.update()
  }
}

const changeCharacter = (character) => {
  player.remove(player.children[0])
  const playerAvatar = unpackedObjectMap[`${character}_root`]
  playerAvatar.position.set(0, 0, 0)
  player.add(playerAvatar)
}

const mapAsciiStateToThree = ({
  map,
  mapRaw,
  currentLevel,
  lastDirection
}) => {
  if (lastLevel !== currentLevel) {
    const lastItemHolder = itemLevelMap[lastLevel]
    if (lastItemHolder) {
      levelHolder.remove(lastItemHolder)
    }
    lastLevel = currentLevel
  }
  let itemHolder = itemLevelMap[currentLevel]
  const xMax = map.indexOf('\n', 1) - 1
  const yMax = (map.match(/\n/g) || []).length - 1
  const xOffset = (-xMax / 2) + 0.5
  const yOffset = (-yMax / 2)
  // const largestAxis = Math.max(xMax, yMax)
  // const scale = (1 / largestAxis) * 5
  // levelHolder.scale.setScalar(scale)
  if (!itemHolder) {
    let chars = [...mapRaw]
    chars.shift()
    itemHolder = itemLevelMap[currentLevel] = new THREE.Object3D()
    chars.forEach((char, index) => {
      const y = Math.floor(index / (xMax + 1))
      const x = (index - y) % xMax
      let item = itemHolder.children[index]
      if (!item) {
        if (char !== '\n') {
          const charUpper = char.toLocaleUpperCase()
          let modelName = charModelMap[charUpper] || 'road_spawn'
          if (modelName === 'house') {
            modelName = getHouseRandom()
          }
          const rotation = directionMap[charUpper] || 0
          item = unpackedObjectMap[modelName].clone()
          item.position.x = -(x + xOffset)
          item.position.y = (y + yOffset)
          item.rotation.z = rotation
          if (modelName.indexOf('house') === 0) {
            item.add(unpackedObjectMap.candy_circle.clone())
          }
        } else {
          item = new THREE.Object3D()
        }
        itemHolder.add(item)
      }
    })
  }
  itemHolder.add(player)
  let chars = [...map]
  chars.shift()
  chars.forEach((char, index) => {
    if (char === 'G') {
      const y = Math.floor(index / (xMax + 1))
      const x = (index - y) % xMax
      const rotation = directionMap[lastDirection] || 0
      const tween = new TWEEN.Tween(player.position)
        .to(
          {
            x: -(x + xOffset),
            y: y + yOffset
          },
          100
        )
        .easing(TWEEN.Easing.Quadratic.Out)
        .onUpdate(() => {
          itemHolder.position.x = -player.position.x
          itemHolder.position.y = -player.position.y
        })
        .onComplete(playerTweenOnComplete)
      playerTweenQueue.push(tween)
      if (playerTweenQueue.length < 2) {
        tween.start()
      }
      player.rotation.z = rotation
    }
    let item = itemHolder.children[index]
    if (item.name.indexOf('house') === 0) {
      const show = char === char.toLocaleUpperCase()
      item.children[0].visible = show
    }
  })
  levelHolder.add(itemHolder)
}

renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
let width
let height
// let square
let center = new THREE.Vector2()
const deg = Math.PI / 180
const resize = () => {
  const clientWidth = renderer.domElement.clientWidth
  const clientHeight = renderer.domElement.clientHeight
  const dpr = window.devicePixelRatio
  width = clientWidth * dpr
  height = clientHeight * dpr
  // square = Math.min(width, height)
  if (
    renderer.domElement.width !== width ||
    renderer.domElement.height !== height
  ) {
    const aspect = width / height
    const desiredMinimumFov = deg45
    // this ensures that I always have a 90deg square in the center of both landscape and portrait viewports
    camera.fov = (
      aspect >= 1 ? desiredMinimumFov : 2 * Math.atan(Math.tan(desiredMinimumFov / 2) / aspect)
    ) / deg
    camera.aspect = aspect
    camera.updateProjectionMatrix()
    renderer.setPixelRatio(dpr)
    renderer.setSize(
      clientWidth,
      clientHeight,
      false
    )
    center.set(width / 2, height / 2)
  }
}
let controls
let go = true
const loop = (time) => {
  if (go) {
    requestAnimationFrame(loop)
    resize()
    animate(time)
  }
}
const start = (parentNode) => {
  parentNode.appendChild(renderer.domElement)
  controls = new THREE.OrbitControls(camera, renderer.domElement)
  camera.position.set(-1, 6, -5)
  camera.lookAt(new THREE.Vector3(0, 0, 0))
  controls.enableDamping = true // an animation loop is required when either damping or auto-rotation are enabled
  controls.dampingFactor = 0.25
  controls.screenSpacePanning = false
  controls.enablePan = false
  controls.minDistance = 1
  controls.maxDistance = 10
  controls.minPolarAngle = -Infinity // Math.PI / 2
  controls.maxPolarAngle = Math.PI / 2
  requestAnimationFrame(loop)
}

const animate = (time) => {
  controls.update()
  TWEEN.update(time)
  renderer.render(scene, camera)
}

export default {
  data () {
    return {
      loaded: false,
      lastMap: null
    }
  },
  computed: {
    ...mapGetters([
      'mode',
      'character',
      'currentLevel',
      'lastDirection',
      'levels',
      'score',
      'moves',
      'map'
    ])
  },
  mounted () {
    start(this.$el)
    this.startLoad()
  },
  destroyed () {
    go = false
  },
  beforeUpdate () {
    this.updateState()
  },
  methods: {
    async startLoad () {
      await loadGltfAssets([
        'city',
        'characters'
      ])
      // TODO: Figure out why these aren't working
      // scene.add(gltfAssetMap.characters.scene)
      // gltfAssetMap.characters.playAnimationByName('alien_idle')
      // gltfAssetMap.characters.playAnimationByName('ghost_idle')

      console.log('Loaded', unpackedObjectMap)
      this.loaded = true
      this.updateState()
      changeSceneMode(this.mode, this.character)
    },
    updateState () {
      if (
        this.map &&
        this.loaded &&
        this.lastMap !== this.map &&
        this.currentLevel !== null
      ) {
        mapAsciiStateToThree({
          map: this.map,
          mapRaw: this.levels[this.currentLevel],
          currentLevel: this.currentLevel,
          lastDirection: this.lastDirection
        })
        this.lastMap = this.map
      }
    }
  },
  watch: {
    mode () {
      changeSceneMode(this.mode, this.character)
    },
    currentLevel () {
      this.updateState()
    }
  }
}
</script>

<style lang="scss">
.game-three {
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .has-to-be-here-for-reactivity {
    display: none;

    pre {
      font-family: monospace;
      font-size: 1.5rem;
      line-height: 1.25rem;
      letter-spacing: 0.25rem;
      text-align: left;
    }
  }

  canvas {
    display: block;
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
