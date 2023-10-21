```
根目录/
├─ package.json
├─ packages
  ├─ common
    ├─ index.js
    ├─ package.json
├─ web-admin
  ├─ src
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
# 根目录
cmd > npm install
```

#### 指定模块

```json
// web-admin/package.json
{
  "workspaces": [
    "package-common"
  ]
}
```

```bash
# web-admin
cmd > npm install
```

```javascript
// web-admin/index.js
const { sum } = require('package-common')

console.log(sum(1, 2)) // 3
```