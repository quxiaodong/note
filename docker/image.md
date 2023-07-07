```bash
# 查看本地镜像
cmd > docker images

# 搜索某个镜像
cmd > docker search mysql

# 拉取某个镜像
cmd > docker pull mysql

# 拉取固定版本
cmd > docker pull mysql:x.y.z

# 通过镜像ID删除镜像
cmd > docker rmi 772571a08c67

# 通过镜像名称和版本删除镜像
cmd > docker rmi mysql:x.y.z

# 删除所有镜像
# 1. 获取所有镜像ID
cmd > docker images -q
# 2. 删除所有镜像ID
cmd > docker rmi `docker images -q`
```