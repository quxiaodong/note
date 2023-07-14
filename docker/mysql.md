```bash
cmd > docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 --name test-mysql mysql:latest

# cmd > docker run \
# -d \
# -p 3306:3306 \
# -e MYSQL_ROOT_PASSWORD=123456 \
# -v /docker-mysql/data:/var/lib/mysql \
# -v /docker-mysql/log:/var/log/mysql \
# --name test-mysql \
# mysql:latest

cmd > docker exec -it test-mysql /bin/bash

# 连接数据库
cmd > mysql -uroot -p
```

```bash
# 本地电脑测试验证
cmd > mysql -h 宿主机IP -P 3306 -u root -p
```