#### 网络模式

- bridge: 默认模式，为每一个容器分配IP

```bash
cmd > docker run -id --name alpine-1 alpine:latest
cmd > docker inspect --format='{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' alpine-1
# 172.17.0.2

cmd > docker run -id --name alpine-2 alpine:latest
cmd > docker inspect --format='{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' alpine-2
# 172.17.0.3

cmd > docker exec -it alpine-1 /bin/sh
cmd > ping 172.17.0.3 # 能通
cmd > ping alpine-2 # 不能通

cmd > docker exec -it alpine-2 /bin/sh
cmd > ping 172.17.0.2 # 能通
cmd > ping alpine-1 # 不能通
```

> 当容器挂掉之后，IP有可能发生变更

- host: 共用宿主机的IP和端口
- none: 不分配IP
- container: 和指定的容器共用IP和端口
- 自定义网络

```bash
# 创建网络
cmd > docker network create some-project

cmd > docker run -id --network some-project --name alpine-1 alpine:latest
cmd > docker inspect --format='{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' alpine-1
# 172.18.0.2

cmd > docker run -id --network some-project --name alpine-2 alpine:latest
cmd > docker inspect --format='{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' alpine-2
# 172.18.0.3

cmd > docker exec -it alpine-1 /bin/sh
cmd > ping 172.18.0.3 # 能通
cmd > ping alpine-2 # 能通

cmd > docker exec -it alpine-2 /bin/sh
cmd > ping 172.18.0.2 # 能通
cmd > ping alpine-1 # 能通
```

#### 常用命令

```bash
# 查看网络
cmd > docker network ls
```