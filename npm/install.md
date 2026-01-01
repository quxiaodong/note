#### 常用选项

- `save`: 依赖位于`dependencies`

```bash
cmd > npm install --save lodash
```

```json
{
  "dependencies": {
    "lodash": "^4.17.21"
  }
}
```

- `save-dev`: 依赖位于`devDependencies`

```bash
cmd > npm install --save-dev webpack
```

```json
{
  "devDependencies": {
    "webpack": "^5.89.0"
  }
}
```

- `save-exact`: 固定版本号

```bash
cmd > npm install --save-exact webpack
```

```json
{
  "dependencies": {
    "webpack": "5.89.0"
  }
}
```

- `verbose`: 安装进度

```bash
cmd > npm install --verbose
```
