```bash
cmd > docker exec [OPTIONS] CONTAINER COMMAND [ARG...]
```

#### 常用选项

- `-t`: 分配一个终端。通常与`-i`结合使用

```bash
cmd > docker exec -it 容器名 /bin/bash
```