```javascript
// /utils/storage.js
export const getUserInfo = () => wx.getStorageSync('user')
```

```javascript
// /utils/bus.js
class Bus {
  constructor() {
    this.map = {}
  }
  on(key, callback) {
    (this.map[key] || this.map[key] = []).push(callback)
  }
  emit(key) {
    if (this.map[key]) {
      this.map[key].forEach(callback => callback())
    }
  }
}

const bus = new Bus()

export default bus
```

```javascript
// /utils/login-sdk.js
import bus from './bus'
import { getUserInfo } from './storage'

const oldPage = Page
Page = function(params) {
  const { onShow, onLoad, onReady } = params

  params.onShow = function() {
    if (!!getUserInfo()) {
      onShow && onShow.call(this)
    } else {
      bus.on('login', () => {
        onShow && onShow.call(this)
      })
    }
  }

  params.onLoad = function(options) {
    if (!!getUserInfo()) {
      onLoad && onLoad.call(this, options)
    } else {
      bus.on('login', () => {
        onShow && onLoad.call(this, options)
      })
    }
  }

  params.onReady = function() {
    if (!!getUserInfo()) {
      onReady && onReady.call(this)
    } else {
      bus.on('login', () => {
        onShow && onReady.call(this)
      })
    }
  }

  return oldPage(params)
}
```

```javascript
// app.js
import './utils/login-sdk'
import bus from './utils/bus'
import { getUserInfo } from './utils/storage'

App({
  onLaunch() {
    this.login()
  },
  async login() {
    if (!getUserInfo()) {
      const { code } = await wx.login()
      console.log('code：', code)
      setTimeout(() => {
        console.log('登录成功')
        bus.emit('login')
      }, 2000)
    }
  }
})
```

```javascript
// /pages/detail/index
Page({
  data: {
    msg: 'detail'
  },
  onShow() {
    console.log(this.data.msg + ' onShow')
  },
  onLoad(options) {
    console.log(this.data.msg + ' onLoad', options)
  },
  onReady() {
    console.log(this.data.msg + ' onReady')
  }
})
```