#### exec

```javascript
const str = 'aeiouaeiou'
const reg = /a/

// 不加 g 修饰符，则每次都是从下标0开始
console.log(reg.exec(str)) // ['a', index: 0, input: 'aeiouaeiou', groups: undefined]
console.log(reg.exec(str)) // ['a', index: 0, input: 'aeiouaeiou', groups: undefined]
console.log(reg.exec(str)) // ['a', index: 0, input: 'aeiouaeiou', groups: undefined]
console.log(reg.exec(str)) // ['a', index: 0, input: 'aeiouaeiou', groups: undefined]
```

```javascript
const str = 'aeiouaeiou'
const reg = /a/g

// 加上 g 修饰符，则会从上次的下标开始，循环往复
console.log(reg.exec(str)) // ['a', index: 0, input: 'aeiouaeiou', groups: undefined]
console.log(reg.exec(str)) // ['a', index: 5, input: 'aeiouaeiou', groups: undefined]
console.log(reg.exec(str)) // null
console.log(reg.exec(str)) // ['a', index: 0, input: 'aeiouaeiou', groups: undefined]
```

#### test

```javascript
const str = 'aeiouaeiou'
const reg = /aeiou/

console.log(reg.test(str)) // true
```