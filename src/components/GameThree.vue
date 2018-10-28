<template>
  <div class="game-three">
    <p>Score: {{score}}</p>
    <p>Moves: {{moves}}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import * as THREE from 'three'

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

const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5)
directionalLight2.position.set(1, 2, 1)
directionalLight2.castShadow = true
scene.add(directionalLight2)

const ambientLight = new THREE.AmbientLight(0x808080, 0.5)
scene.add(ambientLight)

const light = new THREE.HemisphereLight(0xcefeff, 0xb3eaf0, 0.5)
scene.add(light)
scene.fog = new THREE.Fog('#262626', 7, 9)

const icoSphere = new THREE.IcosahedronGeometry(0.5, 1)
const streetMat = new THREE.MeshStandardMaterial({ color: '#333333' })
const matMap = {
  H: new THREE.MeshStandardMaterial({ color: '#ff9900' }),
  h: new THREE.MeshStandardMaterial({ color: '#443300' }),
  G: new THREE.MeshStandardMaterial({ color: '#ffffff' }),
  S: new THREE.MeshStandardMaterial({ color: '#00ff00' }),
  X: new THREE.MeshStandardMaterial({ color: '#ff0000' })
}

let lastLevel = null
let itemLevelMap = {}
const mapAsciiStateToThree = (map, currentLevel) => {
  if (lastLevel !== currentLevel) {
    const lastItemHolder = itemLevelMap[lastLevel]
    if (lastItemHolder) {
      scene.remove(lastItemHolder)
    }
    lastLevel = currentLevel
  }
  let chars = [...map]
  chars.shift()
  let itemHolder = itemLevelMap[currentLevel]
  if (!itemHolder) {
    const xMax = map.indexOf('\n', 1) - 1
    const yMax = (map.match(/\n/g) || []).length - 1
    const largestAxis = Math.max(xMax, yMax)
    const xOffset = (-xMax / 2) + 0.5
    const yOffset = (-yMax / 2)
    const scale = (1 / largestAxis) * 5
    console.log({ scale })
    itemHolder = itemLevelMap[currentLevel] = new THREE.Object3D()
    itemHolder.scale.setScalar(scale)
    chars.forEach((char, index) => {
      const y = Math.floor(index / (xMax + 1))
      const x = (index - y) % xMax
      let item = itemHolder.children[index]
      if (!item) {
        item = new THREE.Mesh(icoSphere)
        itemHolder.add(item)
        item.position.x = -(x + xOffset)
        item.position.y = (y + yOffset)
      }
    })
  }
  chars.forEach((char, index) => {
    let item = itemHolder.children[index]
    item.material = matMap[char] || streetMat
  })
  scene.add(itemHolder)
}

camera.position.set(0, 0, 8)
camera.lookAt(new THREE.Vector3(0, 0, 0))
camera.rotation.z = Math.PI
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
    const desiredMinimumFov = Math.PI / 4 // 45 deg
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
  requestAnimationFrame(loop)
}

const animate = (time) => {
  renderer.render(scene, camera)
}

export default {
  computed: {
    ...mapGetters([
      'currentLevel',
      'score',
      'moves',
      'map'
    ])
  },
  mounted () {
    start(this.$el)
  },
  destroyed () {
    go = false
  },
  watch: {
    currentLevel (currentLevel) {
      if (
        this.map &&
        currentLevel !== null
      ) {
        mapAsciiStateToThree(this.map, currentLevel)
      }
    },
    map (mapCurrent) {
      if (
        mapCurrent &&
        this.currentLevel !== null
      ) {
        mapAsciiStateToThree(mapCurrent, this.currentLevel)
      }
    }
  }
}
</script>

<style lang="scss">
.game-three {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  canvas {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
