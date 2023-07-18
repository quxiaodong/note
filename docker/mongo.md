```bash
cmd > docker run -d -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=123456 --name test-mongo mongo:latest

# cmd > docker run \
# -d \
# -p 27017:27017 \
# -e MONGO_INITDB_ROOT_USERNAME=root \
# -e MONGO_INITDB_ROOT_PASSWORD=123456 \
# -v /docker-mongo/data/db:/data/db \
# -v /docker-mongo/data/configdb:/data/configdb \
# -v /docker-mongo/log:/var/log/mongodb \
# --restart=always \
# --name test-mongo \
# mongo:latest

cmd > docker exec -it test-mongo /bin/bash

# 连接数据库
cmd > mongosh -u root -p
```

```bash
# 本地电脑测试验证
cmd > mongosh --host 宿主机IP --port 27017 -u root -p
```