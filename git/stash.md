#### 创建存储

```bash
# 修改某个文件
echo $(date) >> README.md

# 存储当前修改
git stash save "2023-09-20 10:24"

# 查看存储列表
git stash list
# stash@{0}: On main: 2023-09-20 10:24
```

> 最新创建的存储永远为0

#### 恢复存储

```bash
# 恢复某个存储，不会删除存储
git stash apply stash@{0}

# 恢复某个存储，并且删除存储
git stash pop stash@{0}
```

#### 删除存储

```bash
# 删除某个存储
git stash drop stash@{0}

# 清空所有存储
git stash clear
```