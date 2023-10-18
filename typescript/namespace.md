#### 使用案例

```typescript
// typings.d.ts
declare namespace wx {

  type jsApi = 'chooseImage'
    | 'getLocation'
    | 'openLocation'

  interface ConfigOptions {
    debug?: boolean
    appId: string
    timestamp: number
    nonceStr: string
    signature: string
    jsApiList: jsApi[]
  }

  function config(options: ConfigOptions): void

  function ready(callback: () => void): void

  function error(callback: (res: any) => void): void

}
```

```typescript
wx.config({
  appId: '',
  timestamp: Date.now(),
  nonceStr: '',
  signature: '',
  jsApiList: ['getLocation', 'openLocation']
})

wx.ready(() => {})

wx.error(res => {})
```