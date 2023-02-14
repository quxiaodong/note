```bash
ln 源文件 目标文件
```

#### 常用选项

- `-s`: 链接类型为软链接

> 硬链接(hard link): 相当于创建了文件的副本，不能对目录建立硬链接
>
> 软链接(symbolic link): 相当于创建了快捷方式，可以对目录建立软链接

```bash
ln -s /opt/nodejs/bin/node /usr/local/bin/
ln -s /opt/nodejs/bin/npm /usr/local/bin/
```

- `-f`: 建立时，将同档案名删除