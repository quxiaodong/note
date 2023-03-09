#### 工作目录

```bash
# 修改文件
echo $(date) >> README.md

# 查看状态
git status --short
# M README.md

# 添加文件到暂存目录
git add README.md

# 查看状态
git status --short
# M  README.md

# 从暂存目录取回文件
git restore --staged README.md

# 查看状态
git status --short
# M README.md
```

#### 暂存目录

```bash
# 提交暂存目录的文件到本地仓库
git commit -m "Update README.md"

# 查看状态
git status --short
# 空

# 撤销上一次的commit, 并且撤销git add
git reset HEAD~1

# 查看状态
git status --short
# M README.md

# ----------

# 提交暂存目录的文件到本地仓库
git commit -m "Update README.md"

# 查看状态
git status --short
# 空

# 撤销上一次的commit, 但不撤销git add
git reset --soft HEAD~1

# 查看状态
git status --short
# M  README.md
```

#### 本地仓库

```bash
# 查看状态
git status
# On branch master
# Your branch is ahead of 'origin/main' by 1 commit.
#   (use "git push" to publish your local commits)

# nothing to commit, working tree clean

# 提交本地仓库到远程仓库
git push -u origin master
```

#### 远程仓库