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

#### 遍历

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

#### 取值

```typescript
function getValue<T, K extends keyof T>(data: T, property: K): T[K] {
  return data[property]
}

getValue(person, 'name') // string
getValue(person, 'age') // number
```

#### 赋值

```typescript
function setValue<T, K extends keyof T>(data: T, property: K, value: T[K]) {
  data[property] = value
}

setValue(person, 'name', 123) // 报错
setValue(person, 'age', 123)
```