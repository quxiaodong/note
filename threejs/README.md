> 三要素: `scene`、`camera`、`renderer`

```javascript
import * as THREE from 'three'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera()
const renderer = new THREE.WebGLRenderer()

document.body.appendChild(renderer.domElement)
```

```javascript
// 几何图形
const geometry = new THREE.SphereGeometry(15)
// 材质
const material = new THREE.MeshBasicMaterial({ color: 0xffff00 })
// 物体 = 图形 + 材质
const mesh = new THREE.Mesh(geometry, material)
```

```javascript
// 场景中添加物体，默认情况下物体的坐标是(0,0,0)
scene.add(mesh)
// 设置相机视角
camera.position.set(0, 0, 100)
// 渲染
renderer.render(scene, camera)
```