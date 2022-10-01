#### 常用选项

- `-c`: 归档文件
- `-x`: 解档文件
- `-v`: 列出归档或解档的详细过程，显示进度
- `-f`: 指定`tar`文件名称，f后面一定是`.tar`文件，所以必须放在选项最后

```bash
# 归档文件
tar -cvf abc.tar 123.txt 456.txt

# 解档文件
tar -xvf abc.tar
```

- `-C`: 解压到指定目录，目录必须存在

```bash
# 解压到指定目录
tar -xvf abc.tar -C 目录路径
```

##### gzip

- `-z`: 调用`gzip`，实现压缩和解压
  - `tar`只负责打包文件，但不压缩
  - 用`gzip`压缩`tar`打包后的文件，其扩展名一般为`xxx.tar.gz`

```bash
# 压缩文件
tar -zcvf a.tar.gz 123.txt 456.txt

# 解压文件
tar -zxvf a.tar.gz
```

##### bzip2

- `-j`: 调用`bzip`，实现压缩和解压
  - `tar`只负责打包文件，但不压缩
  - 用`bzip2`压缩`tar`打包后的文件，其扩展名一般为`xxx.tar.bz2`

```bash
# 压缩文件
tar -jcvf a.tar.bz2 123.txt 456.txt

# 解压文件
tar -jxvf a.tar.bz2
```