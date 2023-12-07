#### baseUrl

用于解析非(绝对或相对)路径开头的目录

```json
{
  "compilerOptions": {
    "baseUrl": "src"
  }
}
```

```
根目录/
├─ src
  ├─ index.ts
  ├─ utils.ts
```

```typescript
// 此时，路径会以src作为起始目录
import { sum } from 'utils'
```

#### esModuleInterop

针对多个文件里面有相同的变量名

```json
{
  "compilerOptions": {
    "esModuleInterop": true
  }
}
```

#### exclude

只对`include`的配置起作用

```json
{
  "include": ["src/**/*"],
  "exclude": ["src/utils/*"]
}
```

```
# src/utils 中的文件不会被编译
```

#### files

```json
{
  "files": ["src/index.ts"]
}
```

```
# 只会编译 src/index.ts
```

> `files`优先级高于`exclude`

#### include

```json
{
  "include": ["src/**/*"]
}
```

```
# 只会编译 src 下的文件
```

#### module

指定编译后的模块化规范

```typescript
export const sum = (a, b) => a + b
```

```json
{
  "compilerOptions": {
    "module": "CommonJS"
  }
}
```

```javascript
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = void 0;
var sum = function (a, b) { return a + b; };
exports.sum = sum;
```

```json
{
  "compilerOptions": {
    "module": "AMD"
  }
}
```

```javascript
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sum = void 0;
    var sum = function (a, b) { return a + b; };
    exports.sum = sum;
});
```

#### noLib

禁止自动包含任何库文件

```json
{
  "compilerOptions": {
    "noLib": true
  }
}
```

```typescript
// 找不到名称“document”。是否需要更改目标库? 请尝试更改 “lib” 编译器选项以包括 “dom”。
document.addEventListener('click', () => {}) // 报错
```

#### outDir

指定编译结果输出目录

```json
{
  "compilerOptions": {
    "outDir": "dist"
  }
}
```

#### sourceMap

生成`sourceMap`

```json
{
  "compilerOptions": {
    "sourceMap": true
  }
}
```

#### target

指定编译后的ES版本

```typescript
const sum = (a, b) => a + b
```

```json
{
  "compilerOptions": {
    "target": "ES5"
  }
}
```

```javascript
var sum = function (a, b) { return a + b; };
```

```json
{
  "compilerOptions": {
    "target": "ESNext"
  }
}
```

```javascript
const sum = (a, b) => a + b;
```

#### typeRoots

指定类型声明文件目录，默认值`node_modules/@types`

```json
{
  "compilerOptions": {
    "typeRoots": ["./typings"]
  }
}
```