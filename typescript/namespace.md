#### 使用案例

```typescript
// typings.d.ts
declare namespace wx {

  type jsApi = 'chooseImage'
    | 'getLocation'
    | 'openLocation'

  interface ConfigOptions {
    debug?: boolean // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: string // 必填，公众号的唯一标识
    timestamp: number // 必填，生成签名的时间戳
    nonceStr: string // 必填，生成签名的随机串
    signature: string // 必填，签名
    jsApiList: jsApi[] // 必填，需要使用的JS接口列表
  }

  // 通过config接口注入权限验证配置
  function config(options: ConfigOptions): void

  // 通过ready接口处理成功验证
  function ready(callback: () => void): void

  // 通过error接口处理失败验证
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