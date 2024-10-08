> 修改首次提交: `git rebase -i --root`

> `rebase`会改变commit的hash值

#### 合并连续的提交记录

```bash
# 查看历史提交记录
git log --oneline

# efd3942 (HEAD -> master, origin/master) This is second commit
# 7a63c34 This is first commit
# eb6a385 initial commit
```

```bash
# 选择需要合并的提交
git rebase -i HEAD~2

# pick 7a63c34 This is first commit
# s efd3942 This is second commit
```

```bash
# 查看更新后的提交记录
git log --oneline

# 强制推送到远程仓库
git push -f
```

#### 合并不连续的提交记录

```bash
# 查看历史提交记录
git log --oneline

# f52d231 (HEAD -> main, origin/main) This is third commit
# e7dcd29 This is second commit
# 432bbb9 This is first commit
# 69b2d0c initial commit
```

```bash
git rebase -i HEAD~3

# 调整顺序
# pick 432bbb9 This is first commit
# s f52d231 This is third commit
# pick e7dcd29 This is second commit
```

```bash
# 查看更新后的提交记录
git log --oneline

# 强制推送到远程仓库
git push -f
```

#### 修改远程提交信息

```bash
# 查看历史提交记录
git log --oneline

# 8bb3f0b (HEAD -> main, origin/main) This is second commit
# b9c8ea9 This is first commit
# 69b2d0c initial commit
```

```bash
# 选择需要修改的提交
git rebase -i HEAD~2

# r b9c8ea9 This is first commit
# pick 8bb3f0b This is second commit
```

```bash
# 查看更新后的提交记录
git log --oneline

# 强制推送到远程仓库
git push -f
```

#### 修改远程提交记录

```bash
# 查看历史提交记录
git log --oneline

# 8bb3f0b (HEAD -> main, origin/main) This is second commit
# b9c8ea9 This is first commit
# 69b2d0c initial commit
```

```bash
# 选择需要修改的提交
git rebase -i HEAD~2

# edit b9c8ea9 This is first commit
# pick 8bb3f0b This is second commit
```

```bash
# 修改以后
git add .
git commit --amend
# 此时，这次修改会合并到同一个commit

# 修改以后
git add .
git commit -m "new commit"
# 此时，这次修改会生成一条新的commit
```

```bash
git rebase --continue
```

```bash
# 查看更新后的提交记录
git log --oneline

# 强制推送到远程仓库
git push -f
```

#### 拆分commit(多个文件)

```bash
# 查看历史提交记录
git log --oneline

# efd3942 (HEAD -> master, origin/master) This is second commit
# 7a63c34 This is first commit
# eb6a385 initial commit
```

```bash
git rebase -i HEAD~3

# pick eb6a385 initial commit
# edit 7a63c34 This is first commit
# pick efd3942 This is second commit

# reset 到那次 commit 的上一个 commit
git reset HEAD^

# 按需新增
git add a.md
git commit -m 'This is first 1 commit'

git add b.md
git commit -m 'This is first 2 commit'

# 修改完毕
git rebase --continue
```

```bash
# 查看更新后的提交记录
git log --oneline

# 强制推送到远程仓库
git push -f
```

#### 分支合并变基

```
A - B - C
         \
          D - E
```

```
A - B - C - B1
         \
          D - E
```

##### 方法一

```bash
git checkout main
# 把B1合进B，会改变B的hash
git rebase
git push -f

git checkout development
# 合并分支，不产生合并信息
git merge main --no-commit
# 解决冲突
git push
# 删除main上面旧的commit
# 把main上面新的commit往前移
# 顺序匹配main分支
git rebase
git push -f
```

##### 方法二

```bash
git checkout development

# 使用rebase将development分支基于main分支的最新提交进行重构
git fetch origin
git rebase origin/main

# 如果在rebase过程中遇到冲突，按照提示解决冲突后，继续执行
git rebase --continue

# 完成后，强制推送development分支到远程（因为本地的历史已经重写）
git push -f origin development
```