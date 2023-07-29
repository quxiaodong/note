```typescript
const person = {
  age: 28,
  name: 'Nicholas'
}

type Person = typeof person
// 相当于
// type Person = { age: number; name: string; }
```