```bash
# 创建空白提交
git commit --allow-empty -m "Empty-Commit"
```

```bash
# 提交不校验信息
git commit -m "commit description" --no-verify
```

#### 合并进上一次提交

```bash
git add a.file
git commit --amend
git push -f
```