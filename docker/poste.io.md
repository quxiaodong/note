```bash
cmd > docker run -d --network=host --name test-poste.io analogic/poste.io:latest

# cmd > docker run \
# -d \
# --network=host \
# -v /docker-poste/data:/data \
# --name test-poste.io \
# analogic/poste.io:latest
```

```bash
# 本地电脑测试验证
# 管理员访问 mail.宿主机IP/admin/install/server
# 邮箱用户访问 mail.宿主机IP/webmail
```