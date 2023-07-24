```bash
# 创建空白分支
git checkout --orphan branchName
```

- `-b`: 创建并切换到分支

```bash
# 基于当前分支创建新分支
git checkout -b NewBranchName

# 基于远程分支创建新分支
git checkout -b NewBranchName origin/OldBranchName
```