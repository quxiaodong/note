```bash
# 1. 基于容器创建镜像
cmd > docker commit client-web(容器名) some-project/client-web:1.0

# 2. 查看生成后的镜像
cmd > docker images
# REPOSITORY                TAG       IMAGE ID       CREATED         SIZE
# some-project/client-web   1.0       28a9b9a72940   7 seconds ago   192MB

# 3. 测试镜像是否正常
cmd > docker run -id --name test-client-web some-project/client-web:1.0
```

#### 阿里云

```bash
# 1. 阿里云控制台
# 2. 容器镜像服务
# 3. 创建全名空间
# 4. 创建镜像仓库
# 5. 选择本地仓库

# 6. 登录远程服务
cmd > docker login --username=2406*****@qq.com registry.cn-hangzhou.aliyuncs.com

# 7. 创建目标镜像
cmd > docker tag 28a9b9a72940(镜像ID) registry.cn-hangzhou.aliyuncs.com/some-project/client-web:1.0

# 8. 查看本地镜像
cmd > docker images
# REPOSITORY                                                  TAG       IMAGE ID       CREATED          SIZE
# some-project/client-web                                     1.0       28a9b9a72940   58 minutes ago   192MB
# registry.cn-hangzhou.aliyuncs.com/some-project/client-web   1.0       28a9b9a72940   58 minutes ago   192MB

# 9. 推送目标镜像
cmd > docker push registry.cn-hangzhou.aliyuncs.com/some-project/client-web:1.0

# 10. 测试拉取镜像
cmd > docker pull registry.cn-hangzhou.aliyuncs.com/some-project/client-web:1.0
```

#### 私有云

```bash
# 1. 拉取镜像仓库
cmd > docker pull registry

# 2. 配置运行仓库
cmd > docker run -id -p 5000:5000 -v /registry/:/tmp/registry --name registry registry:latest

# 3. 创建目标镜像
cmd > docker tag 28a9b9a72940(镜像ID) 127.0.0.1:5000/some-project/client-web:1.0

# 4. 查看本地镜像
cmd > docker images
# REPOSITORY                               TAG       IMAGE ID       CREATED          SIZE
# some-project/client-web                  1.0       28a9b9a72940   20 minutes ago   192MB
# 127.0.0.1:5000/some-project/client-web   1.0       28a9b9a72940   20 minutes ago   192MB

# 5. 推送目标镜像
cmd > docker push 127.0.0.1:5000/some-project/client-web:1.0

# 6. 查看远程仓库
cmd > curl -XGET 127.0.0.1:5000/v2/_catalog
# {"repositories":["some-project/client-web"]}

# 7. 测试拉取镜像
cmd > docker pull 127.0.0.1:5000/some-project/client-web:1.0
```