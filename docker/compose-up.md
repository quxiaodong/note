```bash
cmd > docker compose up [OPTIONS] [SERVICE...]
```

#### 常用选项

- `-d`: 在后台运行服务

```bash
cmd > docker compose up -d
```

#### 指定服务

```yml
services:
  test-mysql:
    image: mysql
  test-nginx:
    image: nginx
```

```bash
# 启动某个服务
cmd > docker compose up -d test-mysql
```