```bash
cmd > docker build [OPTIONS] PATH | URL | -
```

#### 常用选项

- `-f`: 指定Dockerfile的名称

```bash
cmd > docker build -f Dockerfile-dev .
```

- `-t`: 新镜像的名称和版本号

```bash
cmd > docker build -t some-project/nginx:1.0 .
```