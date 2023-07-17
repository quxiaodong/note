```bash
cmd > docker run -d -p 80:80 --name test-nginx nginx:latest

# cmd > docker run \
# -d \
# -p 80:80 \
# -v /docker-nginx/html:/usr/share/nginx/html \
# -v /docker-nginx/log:/var/log/nginx \
# --restart=always \
# --name test-nginx \
# nginx:latest
```

```bash
# 本地电脑测试验证
# 浏览器访问 宿主机IP:80
```