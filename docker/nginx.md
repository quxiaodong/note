```bash
cmd > docker run -d -p 80:80 --name test-nginx nginx:latest

# cmd > docker run \
# -d \
# -p 80:80 \
# -v /some-project/nginx/html:/usr/share/nginx/html \
# -v /some-project/nginx/log:/var/log/nginx \
# --name test-nginx \
# nginx:latest
```

```bash
# 本地电脑测试验证
# 浏览器访问 宿主机IP:80
```