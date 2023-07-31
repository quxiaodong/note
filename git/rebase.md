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