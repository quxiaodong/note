```bash
# 运行某个容器
cmd > docker run -id nginx:latest

# 停止某个容器
cmd > docker stop 容器名

# 启动某个容器
cmd > docker start 容器名

# 进入某个容器
cmd > docker exec -it 容器名 /bin/bash

# 通过容器ID删除容器
cmd > docker rm fd618fdddcfa

# 通过容器名删除容器
cmd > docker rm test-nginx

# 删除所有容器
# 1. 获取所有容器ID
cmd > docker ps -aq
# 2. 删除所有容器ID
cmd > docker rm `docker ps -aq`
```