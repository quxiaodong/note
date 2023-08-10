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