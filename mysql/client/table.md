#### 查看表

```mysql
mysql> SHOW TABLES;
```

```
# 使用FROM来指定查看哪个数据库名的表
mysql> SHOW TABLES FROM 数据库名;
```

#### 创建表

```mysql
mysql> CREATE TABLE 表名 (
  列名1 数据类型 [列的属性],
  ...
  列名n 数据类型 [列的属性]
);
```

```mysql
# 使用IF NOT EXISTS避免创建同名表报错
mysql> CREATE TABLE IF NOT EXISTS 表名(
  ...
);
```

```mysql
# 使用COMMENT添加表注释
mysql> CREATE TABLE 表名 (
  ...
) COMMENT '表的注释信息';
```

#### 删除表

```mysql
mysql> DROP TABLE 表名1, ..., 表名n;
```

```mysql
# 使用IF EXISTS避免删除不存在的表报错
mysql> DROP TABLE IF EXISTS 表名;
```

#### 表结构

- `DESCRIBE 表名`
- `DESC 表名`
- `EXPLAIN 表名`
- `SHOW COLUMNS FROM 表名`
- `SHOW FIELDS FROM 表名`

```mysql
mysql> DESC 表名;
```

```mysql
# 使用.来指定查看哪个数据库名的表结构
mysql> DESC 数据库名.表名;
```

#### 修改表

##### 表名称

```mysql
# 方法一
mysql> ALTER TABLE 旧表名 RENAME TO 新表名;
```

```mysql
# 方法二
mysql> RENAME TABLE 旧表名1 TO 新表名1, ..., 旧表名n TO 新表名n;
```

> 在新表名前指定数据库名，可以将表移动其他数据库下，例如`ALTER TABLE user RENAME TO 数据库名.user;`

##### 新增列

```mysql
# 默认情况下，新增的列在最后一行
mysql> ALTER TABLE 表名 ADD COLUMN 列名 数据类型 [列的属性];
```

```mysql
# 使用FIRST将新增的列位于第一行
mysql> ALTER TABLE 表名 ADD COLUMN 列名 数据类型 [列的属性] FIRST;
```

```mysql
# 使用AFTER将新增的列位于指定列后面
mysql> ALTER TABLE 表名 ADD COLUMN 列名 数据类型 [列的属性] AFTER 指定列名;
```

##### 删除列

```mysql
mysql> ALTER TABLE 表名 DROP COLUMN 列名;
```

##### 修改列

```mysql
# 方法一
mysql> ALTER TABLE 表名 MODIFY 列名 数据类型 [列的属性];
```

```mysql
# 方法二，可以修改列名
mysql> ALTER TABLE 表名 CHANGE 旧列名 新列名 数据类型 [列的属性];
```

##### 列位置

```mysql
# 将列设为表中第一列
mysql> ALTER TABLE 表名 MODIFY 列名 数据类型 [列的属性] FIRST;
```

```mysql
# 将列设为指定列后面
mysql> ALTER TABLE 表名 MODIFY 列名 数据类型 [列的属性] AFTER 指定列名;
```