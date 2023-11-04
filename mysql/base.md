#### 连接数据库

```bash
cmd > mysql -h主机名 -u用户名 -p密码
cmd > mysql -h 主机名 -u 用户名 -p密码
cmd > mysql --host=主机名 --user=用户名 --password=密码
```

#### 断开数据库

- `quit`
- `exit`
- `\q`

```mysql
mysql> quit
```

#### 命令结束符

- `;`
- `\g`
- `\G`

```mysql
mysql> SELECT NOW();
```

#### 放弃操作符

- `\c`

```mysql
mysql> SELECT NOW() \c
```