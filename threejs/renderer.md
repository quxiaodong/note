```javascript
const renderer = new THREE.WebGLRenderer()

document.body.appendChild(renderer.domElement)
```

```javascript
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('canvas')
})
```