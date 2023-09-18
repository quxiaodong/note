```javascript
const reg = /^\d$/
// or
const reg = new RegExp('^\\d$')

console.dir(reg)
```

- [quantifiers](/regexp/quantifiers.md)

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