```javascript
{ // *：零到多次
  console.log(/^a*$/.test('')) // true
  console.log(/^a*$/.test('a')) // true
  console.log(/^a*$/.test('aaa')) // true
}
```

```javascript
{ // +：一到多次
  console.log(/^a+$/.test('')) // false
  console.log(/^a+$/.test('a')) // true
  console.log(/^a+$/.test('aaa')) // true
}
```

```javascript
{ // ?：零到一次
  console.log(/^a?$/.test('')) // true
  console.log(/^a?$/.test('a')) // true
  console.log(/^a?$/.test('aaa')) // false
}
```

```javascript
{ // {n}：n次
  console.log(/^a{0}$/.test('')) // true
  console.log(/^a{1}$/.test('a')) // true
  console.log(/^a{2}$/.test('aaa')) // false
}
```

```javascript
{ // {n,}：n到多次
  console.log(/^a{0,}$/.test('')) // true
  console.log(/^a{1,}$/.test('')) // false
  console.log(/^a{2,}$/.test('aaa')) // true
}
```

```javascript
{ // {n,m}：n到m次
  console.log(/^a{0,1}$/.test('')) // true
  console.log(/^a{1,2}$/.test('a')) // true
  console.log(/^a{1,2}$/.test('aaa')) // false
}
```