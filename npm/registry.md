```bash
# 查看镜像源
cmd > npm config get registry

# 设置镜像源
cmd > npm config set registry https://registry.npmjs.org
```

```bash
# 临时使用其他镜像源，安装全部依赖
cmd > npm --registry https://registry.npm.taobao.org install

# 临时使用其他镜像源，安装某个依赖
cmd > npm --registry https://registry.npm.taobao.org install jquery
```