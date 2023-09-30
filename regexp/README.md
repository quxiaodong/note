```javascript
const reg = /^\d$/
// or
const reg = new RegExp('^\\d$')

console.dir(reg)
```

- [quantifiers](/regexp/quantifiers.md)

#### 特殊字符

在`非特殊字符`前面使用`\`，`\`会被忽略

```javascript
console.log('a\c') // ac
console.log('a\\c') // a\c
```

#### 常见用法

- [methods of RegExp](/regexp/regexp-methods.md)
- [methods of String](/regexp/string-methods.md)

```javascript
// xss
const rawInput = "hello <script>alert('xss')</script> world"
const regexp = /[\<\>]/g
const input = rawInput.replaceAll(regexp, function(value) {
  switch(value) {
    case '<':
      return '&lt;'
    case '>':
      return '&gt;'
  }
})
```

```javascript
// 手机号
const regexp = /^1\d{10}$/
```