```yml
services:
  influxdb:
    image: influxdb:2.7
    restart: always
    ports:
      - 8086:8086
    volumes:
      - /monitor/influxdb:/var/lib/influxdb
      - /monitor/influxdb2:/var/lib/influxdb2
    environment:
      - DOCKER_INFLUXDB_INIT_USERNAME=root
      - DOCKER_INFLUXDB_INIT_PASSWORD=123456
    networks:
      - monitor-network

  cadvisor:
    image: google/cadvisor:latest
    restart: always
    ports:
      - 8080:8080
    networks:
      - monitor-network

  grafana:
    image: grafana/grafana:latest
    restart: always
    ports:
      - 3000:3000
    volumes:
      - /monitor/grafana:/var/lib/grafana
    networks:
      - monitor-network
    user: "0"

networks:
  monitor-network:
```

```bash
# 测试grafana
# 浏览器访问 宿主机IP:3000
# 默认账号: admin 默认密码: admin
```

#### 常用命令

```bash
# 解析并打印compose文件
cmd > docker compose config
```

- `-q`: 只校验配置不打印任何信息

```bash
# 查看运行中的compose项目
cmd > docker compose ls
```

```bash
# 启动服务
cmd > docker compose start
```

```bash
# 停止服务
cmd > docker compose stop
```

```bash
# 创建并启动容器
cmd > docker compose up
```

- `-d`: 在后台运行容器

```bash
# 查看compose版本
cmd > docker compose version
```