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

指定编译后的模块规范

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

```typescript
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sum = void 0;
    var sum = function (a, b) { return a + b; };
    exports.sum = sum;
});
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

#### target

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