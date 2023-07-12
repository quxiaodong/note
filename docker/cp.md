```bash
cmd > docker cp [OPTIONS] CONTAINER:SRC_PATH DEST_PATH|-
cmd > docker cp [OPTIONS] SRC_PATH|- CONTAINER:DEST_PATH
```

```bash
# 从主机拷贝文件到容器根目录下
cmd > docker cp /host-docker.md test-nginx:/

# 从容器拷贝文件到主机根目录下
cmd > docker cp test-nginx:/docker-host.md /
```