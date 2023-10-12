#### type declaration space

```typescript
// interface 只存在于类型声明空间
interface Person {}
// type 只存在于类型声明空间
type Animal = {}

let person1: Person // 正常
let animal1: Animal // 正常

let person2 = Person // 报错
let animal2 = Animal // 报错
```

#### variable declaration space

```typescript
// class 即存在于类型声明空间，又存在于变量声明空间
class Person {}
// enum 即存在于类型声明空间，又存在于变量声明空间
enum Animal {}

let person1: Person // 正常
let animal1: Animal // 正常

let person2 = Person // 正常
let animal2 = Animal // 正常
```