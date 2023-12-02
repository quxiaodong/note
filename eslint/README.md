#### 禁用规则

```javascript
// On a single line

const message = 'foo'
console.log(message) // eslint-disable-line no-console
```

```javascript
// On a single line

const message = 'foo'
// eslint-disable-next-line no-console
console.log(message)
```

```javascript
// On the whole (rest of the) file

const message = 'foo'
/* eslint-disable no-console */
console.log(message)
```

```javascript
// On the whole (rest of the) file

/* eslint-disable */
console.log(message) // `message` is not defined, but it won't be reported
```