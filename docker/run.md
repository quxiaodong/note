```bash
cmd > docker run [OPTIONS] IMAGE [COMMAND] [ARG...]
```

#### 常用选项

- `-d`: 在后台运行容器，并输出容器ID。通常与`-i`结合使用

```bash
cmd > docker run -id nginx:latest
```

- `--name`: 给容器命名

```bash
cmd > docker run --name test-nginx nginx:latest
```

- `-t`: 分配一个终端。通常与`-i`结合使用

```bash
cmd > docker run -it nginx:latest /bin/bash
```