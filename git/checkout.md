```bash
# 切换分支
git checkout branchName
```

- `-b`: 创建并切换到分支

```bash
# 基于当前分支创建新分支
git checkout -b NewBranchName

# 基于远程分支创建新分支
git checkout -b NewBranchName origin/OldBranchName

# 基于某个commit创建分支
git checkout -b NewBranchName ba56c0931bcc97cc9f164422648757dd0079a1ba
```

- `--orphan`: 创建一个没有提交记录的分支

```bash
# 创建空白分支
git checkout --orphan NewBranchName
```