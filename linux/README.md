#### 目录结构

```
根目录/
├─ bin       # 即binary，存放可执行二进制文件，如ls、mv、cat
├─ boot      # 存放系统启动时用到的文件
├─ dev       # 即device，存放系统下的设备文件
├─ etc       # 存放系统配置文件
├─ home      # 存放所有用户目录
  ├─ user1
    ├─ Desktop
    ├─ Documents
    ├─ Downloads
  ├─ user2
├─ lib       # 即library，存放系统使用的函数库
├─ mnt       # 即mount，用于挂载一些外部存储设备，如硬盘
├─ proc      # 即process directory，保存进程信息
├─ sbin      # 即system binary，存放可执行二进制文件，如shutdown、reboot
├─ usr       # 即unix software resource
  ├─ bin
  ├─ sbin
```

#### 命令格式

```bash
# 命令 [可选项] [可选参数1] [可选参数2]
command [-options] [parameter1] [parameter2]
```

```bash
ls
touch test.txt
rm -r downloads
```

#### 帮助信息

```bash
# 显示命令的帮助信息
command --help
```

```bash
ls --help
touch --help
```

#### 查阅手册

```bash
# 查阅命令的使用手册，man是manual的缩写
man command
```

```bash
man ls
man touch
```

| 操作 | 功能 |
| - | - |
| 空格 | 显示手册页的下一屏 |
| 回车 | 一次滚动手册页的一行 |
| b | back，回滚一屏 |
| f | front，前滚一屏 |
| q | quit，退出 |
| /word | 搜索word字符串 |

#### 常用命令

| 命令 | 英文 | 作用 |
| - | - | - |
| [cat](/linux/cat.md) | concatenate | 查看文件内容、创建文件、文件合并、追加文件内容 |
| [cd](/linux/cd.md) | change directory | 切换目录 |
| [clear](/linux/clear.md) | clear | 清屏 |
| [cp](/linux/cp.md) | copy | 复制文件或文件夹 |
| [curl](/linux/curl.md) | curl | 在命令行中与服务器进行数据传输 |
| [firewall-cmd](/linux/firewall-cmd.md) |  | 防火墙配置 |
| [ln](/linux/ln.md) | link | 创建链接 |
| [ls](/linux/ls.md) | list | 查看当前目录的内容 |
| [mkdir](/linux/mkdir.md) | make directory | 新建文件夹 |
| [more](/linux/more.md) | more | 分屏显示文件内容 |
| [mv](/linux/mv.md) | move | 移动或重命名文件和文件夹 |
| [pwd](/linux/pwd.md) | print work directory | 查看当前目录的路径 |
| [rm](/linux/rm.md) | remove | 删除文件或文件夹，删除后不能恢复 |
| [tar](/linux/tar.md) | tape archive | 归档解档文件 |
| [touch](/linux/touch.md) | touch | 新建文件 |
| [tree](/linux/tree.md) | tree | 以树状图的形式列出文件目录结构 |
| [vi](/linux/vi.md) | visual interface | 文本编辑器 |