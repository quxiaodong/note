```typescript
let anyValue: any

let a: any = anyValue // 正常
let b: unknown = anyValue // 正常
let c: number = anyValue // 正常
let d: string = anyValue // 正常
```

```typescript
let unknownValue: unknown

let a: any = unknownValue // 正常
let b: unknown = unknownValue // 正常
let c: number = unknownValue // 报错
let d: string = unknownValue // 报错
```

> - `any`类型可以赋值给任何类型
> - `unknown`类型只能赋值给`any`和`unknown`类型