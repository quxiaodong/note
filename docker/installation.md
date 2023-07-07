#### CentOS

```bash
cmd > yum install -y yum-utils
cmd > yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
cmd > yum install -y docker-ce

cmd > docker -v
```

```bash
# 启动程序
cmd > systemctl start docker

# 停止程序
cmd > systemctl stop docker

# 重启程序
cmd > systemctl restart docker

# 查看状态
cmd > systemctl status docker

# 开机启动程序
cmd > systemctl enable docker
```