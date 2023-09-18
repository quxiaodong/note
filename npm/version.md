npm中的包模块版本遵循[SemVer](https://semver.org/)（Semantic Version，语义化版本）规范。这是由 Github 起草的一个具有指导意义的，统一的版本号表示规则。

| 版本名称 | 介绍 | 说明 |
| - | - | - |
| alpha | 内测版 | 内部测试版，不向外部发布 |
| beta | 公测版 | 这个阶段的版本会一直加入新的功能 |
| experimental | 实验版 |  |
| latest | 默认版 | 不指定版本情况下默认安装的最新版本 |
| next | 下一版 |  |
| rc | 候选版 | 几乎不会加入新的功能，而主要着重于除错 |
| release | 正式版 | 稳定版本 |

```bash
# major.minor.patch-{identifier}.{identifier}.{identifier}
1.0.3-alpha.1
```

- `1.2.3`: 固定版本号
- `1.x`: >= 1.0.0 < 2.0.0
- `1.2.x`: >= 1.2.0 < 1.3.0
- `^1.2.3`: 保持主版本号不变的情况下，次版本号、修订版本号为最新版本
- `~1.2.3`: 保持主版本号、次版本号不变的情况下，修订版本号为最新版本
- `>`: 接受高于指定版本的任何版本
- `>=`: 接受等于或高于指定版本的任何版本
- `<=`: 接受等于或低于指定版本的任何版本
- `<`: 接受低于指定版本的任何版本
- `=`: 接受确切的版本
- `-`: 接受一定范围的版本，例如 2.1.0 - 2.6.2
- `||`: 组合集合，例如 < 2.1 || > 2.6

#### 版本比较

```json
{
  "engines": {
    "node": "16.19.0"
  }
}
```

```bash
cmd > npm install semver
```

```javascript
import semver from 'semver'
import { engines } from './package'

const version = engines.node
if (!semver.satisfies(process.version, version)) {
  console.log(`Required node version ${version} not satisfied with current version ${process.version}.`)
  process.exit(1)
}
```

#### 依赖更新

```bash
# 列出哪些还没有升级到最新版本的依赖
cmd > npm outdated

# 升级所有的红色依赖
cmd > npm update
```