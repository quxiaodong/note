```javascript
// 方法一
const renderer = new THREE.WebGLRenderer()
document.body.appendChild(renderer.domElement)

// 方法二
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('canvas')
})
```