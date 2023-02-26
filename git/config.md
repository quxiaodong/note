- **local**: 针对当前某个仓库的配置，`优先级高`
- **global**: 针对当前登录用户的配置，`优先级中`
- **system**: 针对当前整个系统的配置，`优先级低`

#### 查看配置

```bash
# 查看全部配置
git config --list

# 查看当前某个仓库的配置
git config --local --list

# 查看当前登录用户的配置
git config --global --list

# 查看当前整个系统的配置
git config --system --list
```

#### 修改配置

```bash
# 同local
git config user.name "yourname"

# 修改当前某个仓库的配置
git config --local user.name "yourname"

# 修改当前登录用户的配置
git config --global user.name "yourname"

# 修改当前整个系统的配置
git config --system user.name "yourname"
```

#### 删除配置

```bash
# 同local
git config --unset user.name

# 删除当前某个仓库的配置
git config --local --unset user.name

# 删除当前登录用户的配置
git config --global --unset user.name

# 删除当前整个系统的配置
git config --system --unset user.name
```