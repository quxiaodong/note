```typescript
// 在类型定义中，属性更多的类型是子类型
interface Shape {
  type: string
}
interface Circle extends Shape {
  radius: number
}
```

```typescript
// 在集合论中，属性更少的集合是子集
type Shpae = 'Point' | 'Circle' | 'Polygon'
type Geometry = 'Circle' | 'Polygon'
```

#### 协变（Covariance）

```typescript
let shape: Shape = { type: 'shape' }
let circle: Circle = { type: 'circle', radius: 10 }

// 子类型可以赋值给父类型
// shape = circle 正常
// circle = shape 报错：类型 "Shape" 中缺少属性 "radius"，但类型 "Circle" 中需要该属性
```

> 因为子类型拥有父类型所有属性，所以在调用父类型的地方使用子类型不会报错

#### 逆变（Contravariance）

```typescript
let getShape = (shape: Shape) => {
  console.log(shape, shape.type)
}
let getCircle = (circle: Circle) => {
  console.log(circle, circle.radius)
}

// 父类型可以赋值给子类型
// getCircle = getShape 正常
// getShape = getCircle 报错：类型 "Shape" 中缺少属性 "radius"，但类型 "Circle" 中需要该属性
```

> 之前调用`getShape`传入的是`Shape`类型，通过`getShape = getCircle`赋值后，`getShape`的函数体内需要使用到`Circle`的属性，但是`Shape`中缺失，所以会报错

> `tsconfig.json`中开启`strictFunctionTypes`后才会严格按照`逆变`来约束赋值关系