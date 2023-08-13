```typescript
const input = document.getElementById('input')
// 此时input: HTMLElement | null
input?.value // 报错，类型“HTMLElement”上不存在属性“value”
// 因为value属性不是存在于每个HTMLElement元素上
```

#### as

```typescript
const input = document.getElementById('input') as HTMLInputElement
input?.value // 正常
```

#### <>

```typescript
const input = <HTMLInputElement>document.getElementById('input')
input?.value // 正常
```