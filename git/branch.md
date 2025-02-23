#### 查看分支

```bash
# 查看本地分支
git branch

# 查看所有分支
git branch -a
```

#### 创建分支

```bash
# 基于当前分支创建本地分支
git branch branchName

# 基于本地分支创建远程分支
git push origin branchName:branchName
```

#### 删除分支

```bash
# 删除本地某个分支
git branch -d branchName

# 删除远程某个分支
git push origin -d branchName
```

#### 常用选项

- `-m`: 重命名当前的分支

```bash
git branch -m branchName
```

- `-vv`: 查看上游分支

```bash
git branch -vv
# * main cb31def [gitee/main] feat: 打包配置优化
#   mock 4524018 [gitee/mock] feat: 模拟后端数据
```

- `--set-upstream-to`: 设置上游分支(适用于当前分支已存在于远程仓库)

```bash
git branch --set-upstream-to=github/main main

# git branch -vv
# * main cb31def [github/main] feat: 打包配置优化
#   mock 4524018 [gitee/mock] feat: 模拟后端数据
```

![https://nvie.com/posts/a-successful-git-branching-model/](./static/branch-model.png)