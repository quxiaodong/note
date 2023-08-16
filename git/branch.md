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

![https://nvie.com/posts/a-successful-git-branching-model/](./static/branch-model.png)