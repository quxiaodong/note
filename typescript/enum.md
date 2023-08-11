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

#### typeof

限制对象的属性为`enum`中定义的字段

```typescript
enum Color {
  red = 'Red',
  green = 'Green'
}

// 此时，color可以添加新属性
const color = { ...Color, yellow: 'Yellow' }
console.log(color) // { red: 'Red', green: 'Green', yellow: 'Yellow' }

// 此时，color不可以添加属性
const color: typeof Color = { ...Color, yellow: 'Yellow' } // 报错
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