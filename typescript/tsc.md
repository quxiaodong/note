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

- `--watch`: 监听文件变化，并自动执行编译

```bash
# 监听所有文件
cmd > tsc --watch

# 监听某个文件
cmd > tsc --watch index.ts
```