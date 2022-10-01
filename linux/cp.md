```bash
cp 源文件 目标文件
```

> - 如果目标文件是文件夹，则会复制到文件夹里
> - 如果目标文件是已经存在的文件，则会覆盖目标文件的内容
> - 如果目标文件不存在，则会创建目标文件，内容是源文件的内容

```bash
touch 123.txt
mkdir abc
cp 123.txt abc
# 由于abc是文件夹，因此会复制123.txt到abc目录里

touch 123.txt 456.txt
cp 123.txt 456.txt
# 由于456.txt已经存在，会提示是否覆盖456.txt内容

touch 123.txt
cp 123.txt xyz
# 由于xyz不存在，因此会创建xyz，内容是123.txt的内容
```

#### 常用选项

- `-i`: 覆盖文件前的提示
- `-r`: `cp`不能直接复制文件夹，如果要复制文件夹，需要使用`-r`

```bash
mkdir abc xyz
cp -r abc xyz
```