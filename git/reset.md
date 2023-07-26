```bash
# 第一次修改
echo $(date) >> README.md
git add README.md
git commit -m "first commit"

# 第二次修改
echo $(date) >> README.md
git add README.md
git commit -m "second commit"
```

- `--mixed`: 默认

```bash
# 保留两次修改，文件处于工作目录
git reset HEAD~2
```

- `--hard`

```bash
# 丢弃两次修改，如果文件是新创建的，还会删除文件
git reset --hard HEAD~2
```

- `--soft`

```bash
# 保留两次操作，文件处于暂存目录
git reset --soft HEAD~2
```