#### 取键值

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