#### 工作目录

```bash
# 首次修改文件
echo $(date) >> README.md

# 丢弃所做修改
git restore README.md

# ----------

# 再次修改文件
echo $(date) >> README.md

# 没有任何改变
git restore --staged README.md
```

#### 暂存目录

```bash
# 提交文件暂存目录
git add README.md

# 保留文件修改，文件还在暂存目录
git restore README.md

# ----------

# 提交文件暂存目录
git add README.md

# 保留文件修改，文件处于工作目录
git restore --staged README.md
```