#### 键值

```typescript
enum ColorEnum {
  red,
  green,
  orange
}
```

```typescript
type ColorKey = keyof typeof ColorEnum // "red" | "green" | "orange"
type ColorValue = `${ColorEnum}` // "0" | "1" | "2"
```

#### 解构

```typescript
enum Color {
  Red = 'red',
  Green = 'green'
}

const Colors = { ...Color }
console.log(Colors) // { Red: 'red', Green: 'green' }
```

#### 赋值

```typescript
enum Color {
  Red = 'red',
  Green = 'green'
}

type ColorType = Color

// const color: ColorType = 'red' // 报错
const color: ColorType = Color.Red
```