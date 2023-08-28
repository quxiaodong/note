```typescript
const promise = new Promise<string>((resolve) => {
  resolve('Hello World')
})

promise.then(value => {
  console.log(value) // value是string类型
})
```