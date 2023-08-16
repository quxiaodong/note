```bash
cmd > npm install typescript
```

#### 常用选项

- `--init`: 生成tsconfig.json文件

```bash
cmd > tsc --init
```

- `--noEmitOnError`: 编译发生错误时不生成`js`文件

默认情况下，编译的时候发生错误也会生成`js`文件

```typescript
// index.ts
let username: string = 'xiaoming'
username = 123
```

```bash
cmd > tsc --noEmitOnError index.ts
```

- `--noImplicitAny`: 对具有隐含的`any`类型的表达式和声明引发错误

```typescript
// index.ts
function getValue(value) {
  console.log(value)
}
```

```bash
cmd > tsc --noImplicitAny index.ts
```

- `--project`: 指定编译配置文件

```bash
cmd > tsc --project envconfig.json
```

- `--sourceMap`: 生成源代码映射信息

```bash
cmd > tsc --sourceMap index.ts
```

- `--target`: 指定编译版本，会覆盖`tsconfig.json`中的配置

```bash
cmd > tsc --target es5
```

- `--watch`: 监听文件变化，并自动执行编译

```bash
# 监听所有文件
cmd > tsc --watch

# 监听某个文件
cmd > tsc --watch index.ts
```