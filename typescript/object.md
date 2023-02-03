#### 遍历

```typescript
interface Person {
  age: number
  name: string
}

const person: Person = {
  age: 18,
  name: 'Nicholas'
}
```

```typescript
let key: keyof Person
for (key in person) {
  console.log(person[key])
}
```

```typescript
Object.keys(person).forEach(key => {
  console.log(person[key as keyof Person])
})
```

```typescript
Object.entries(person).forEach(([key, value]) => {
  console.log(value)
})
```

```typescript
function getKeys<T extends object>(obj: T) {
  return Object.keys(obj) as Array<keyof T>
}

getKeys(person).forEach(key => {
  console.log(person[key])
})
```

#### 赋值

```typescript
interface Person {
  age: number
  name: string
}

const person: Person = {
  age: 18,
  name: 'Nicholas'
}
```

```typescript
function setValue<T, K extends keyof T>(obj: T, key: K, value: T[K]) {
  obj[key] = value
}

setValue(person, 'name', 123) // 报错
setValue(person, 'age', 123)
```