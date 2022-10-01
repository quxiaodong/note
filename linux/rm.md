#### 常用选项

- `-r`: 递归删除目录下的内容
- `-f`: 强制删除，忽略不存在的文件，无需提示

```bash
mkdir -p a/b/c
rm -r a
# rm: descend into directory ‘a’? y
# rm: descend into directory ‘a/b’? y
# rm: remove directory ‘a/b/c’? y
# rm: remove directory ‘a/b’? y
# rm: remove directory ‘a’? y

mkdir -p a/b/c
rm -rf a
# 删除的时候，没有任何提示
```