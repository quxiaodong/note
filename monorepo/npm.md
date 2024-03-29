```
根目录/
├─ package.json
├─ packages
  ├─ common
    ├─ index.js
    ├─ package.json
├─ web-admin
  ├─ index.js
  ├─ package.json
```

#### 创建模块

```json
// packages/common/package.json
{
  "name": "package-common"
}
```

```javascript
// packages/common/index.js
exports.sum = (a, b) => a + b
```

#### 配置模块

```json
// package.json
{
  "workspaces": ["packages/*"]
}
```

```bash
# 根目录，模块就会出现在根目录的node_modules中
cmd > npm install
```

#### 指定模块

```json
// web-admin/package.json
{
  "workspaces": [
    // 这里也可以写成模块的相对路径
    // 例如../packages/common
    // 然后执行npm install安装
    // 这样模块就会出现在当前项目的node_modules中
    "package-common"
  ]
}
```

```javascript
// web-admin/index.js
const { sum } = require('package-common')

console.log(sum(1, 2)) // 3
```