#### match

```javascript
const str = 'aeiouaeiou'

console.log(str.match(/a/)) // ['a', index: 0, input: 'aeiouaeiou', groups: undefined]
console.log(str.match(/a/g)) // ['a', 'a']
```

#### matchAll

```javascript
const str = 'aeiouaeiou'

// 必须加 g 修饰符，否则报错
for (const iterator of str.matchAll(/a/g)) {
  console.log(iterator)
  // ['a', index: 0, input: 'aeiouaeiou', groups: undefined]
  // ['a', index: 5, input: 'aeiouaeiou', groups: undefined]
}
```

#### replace

```javascript
const str = 'aeiouaeiou'

console.log(str.replace(/a/, 'A')) // Aeiouaeiou
console.log(str.replace(/a/g, 'A')) // AeiouAeiou
```

#### replaceAll

```javascript
const str = 'aeiouaeiou'

// 必须加 g 修饰符，否则报错
console.log(str.replaceAll(/a/g, 'A')) // AeiouAeiou
```

#### search

```javascript
const str = 'aeiouaeiou'

console.log(str.search(/a/)) // 0
```

#### split

```javascript
const str = 'aeiouaeiou'

console.log(str.split(/a/)) // ['', 'eiou', 'eiou']
```