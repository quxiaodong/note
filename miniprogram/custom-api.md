```javascript
export const getImageInfo = (src) => {
  return new Promise((success, fail) => wx.getImageInfo({ src, success, fail }))
}

getImageInfo('images/a.jpg').then(res => (console.log(res)))
```

```javascript
export const getSystemInfo = () => {
  return new Promise((success, fail) => wx.getSystemInfo({ success, fail }))
}

getSystemInfo().then(res => (console.log(res)))
```