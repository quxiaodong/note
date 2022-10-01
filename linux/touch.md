> - 如果文件不存在，则会创建文件
> - 如果文件存在，则会修改文件的最后一次修改日期，里面内容不变

```bash
touch 123.txt
ls -l
# -rw-r--r--  1 root root 0 Jul 23 22:52 123.txt

echo "this is 123.txt" > 123.txt

touch 123.txt
ls -l
# -rw-r--r--  1 root root 16 Jul 23 22:53 123.txt

cat 123.txt
# this is 123.txt
```