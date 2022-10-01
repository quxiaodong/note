> - 文件或目录名称最长可以有`256`个字符
> - 以`.`开头的文件为隐藏文件，需要用`-a`才能显示

#### 常用选项

- `-a`: 显示所有文件和文件夹，包括隐藏文件
- `-l`: 以列表形式显示文件和文件夹的信息

```bash
touch 123.txt
mkdir test
ls -l
# -rw-r--r--  1 quxiaodong  staff   0  7 23 15:20 123.txt
# drwxr-xr-x  2 quxiaodong  staff  64  7 23 15:20 test

# [0][0]   如果是文件夹则是d，如果是文件则是-
# [4]      文件大小
# [5]      7月
# [6]      23日
# [7]      15:10
# [8]      文件名
```

- `-h`: 配合`-l`，显示文件和文件夹的大小

```bash
ls -lh 或 ls -l -h
# -rw-r--r--  1 quxiaodong  staff     0B  7 23 15:20 123.txt
# drwxr-xr-x  2 quxiaodong  staff    64B  7 23 15:20 test
```