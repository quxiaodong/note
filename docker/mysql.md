```bash
cmd > docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 --name test-mysql mysql:latest
# cmd > docker run -d \
# -p 3306:3306 \
# -e MYSQL_ROOT_PASSWORD=123456 \
# -v /some-project/mysql/log:/var/log/mysql \
# -v /some-project/mysql/data:/var/lib/mysql \
# -v /some-project/mysql/conf:/etc/mysql/conf.d \
# --name test-mysql \
# mysql:latest
cmd > docker exec -it test-mysql /bin/bash

# 连接数据库
cmd > mysql -uroot -p
```

```bash
# 在本地电脑
cmd > mysql -h 宿主机IP -P 3306 -u root -p
```