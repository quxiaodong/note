```bash
# 查看防火墙状态
firewall-cmd --state
```

```bash
# 查询端口是否开启
firewall-cmd --query-port=8080/tcp
```

```bash
# 开启端口
firewall-cmd --permanent --add-port=8080/tcp
```

```bash
# 禁用端口
firewall-cmd --permanent --remove-port=8080/tcp
```

```bash
# 刷新配置
firewall-cmd --reload
```