```bash
cmd > docker run -d -p 8000:8000 -p 9000:9000 --name test-portainer portainer/portainer-ce:latest

# cmd > docker run \
# -d \
# -p 8000:8000 \
# -p 9000:9000 \
# --restart=always \
# --name test-portainer \
# portainer/portainer-ce:latest
```

```bash
# 本地电脑测试验证
# 浏览器访问 宿主机IP:9000
```