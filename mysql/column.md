#### 默认值

```mysql
mysql> CREATE TABLE 表名 (
  列名 数据类型 DEFAULT 默认值
);
```

#### 禁止为空

```mysql
mysql> CREATE TABLE 表名 (
  列名 数据类型 NOT NULL
);
```

#### 主键

当通过某个列或者某些列组合确定唯一的一条记录时，我们就可以把这个列或者这些列组合称为`候选键`

一个表可以有多个`候选键`，但表最多只能有一个`主键`，可以指定某个`候选键`作为主键

```mysql
# 方法一
mysql> CREATE TABLE 表名 (
  列名 数据类型 PRIMARY KEY
);
```

```mysql
# 方法二
# 某些列组合成为候选键时，必须使用这种方法
mysql> CREATE TABLE 表名 (
  列名 数据类型 [列的属性],
  PRIMARY KEY (列名1, 列名2, ...)
);
```

#### 唯一约束

对于不是主键的其他候选键，如果也想让MySQL在我们向表中插入新记录的时候帮助我们校验一下某个列或者列组合的值是否重复

```mysql
# 方法一
mysql> CREATE TABLE 表名 (
  列名 数据类型 UNIQUE KEY
);
```

```mysql
# 方法二
# 某些列组合成为候选键时，必须使用这种方法
mysql> CREATE TABLE 表名 (
  列名 数据类型 [列的属性],
  UNIQUE KEY [约束名称] (列名1, 列名2, ...)
);
```

#### 外键

假设：约束插入`order`表中的`userid`列的值必须能在`user`表中的`id`列中找到

```mysql
mysql> CREATE TABLE 表名 (
  列名 数据类型 [列的属性],
  CONSTRAINT [外键名称] FOREIGN KEY(列1, 列2, ...) REFERENCES 父表名(父列1, 父列2, ...)
);
```

#### 自增长

如果一个表中的某个列的数据类型是整数类型或者浮点数类型，那么这个列可以设置`AUTO_INCREMENT`属性

```mysql
mysql> CREATE TABLE 表名 (
  列名 数据类型 AUTO_INCREMENT
);
```

> 1. 一张表中最多有一个具有`AUTO_INCREMENT`的列
> 2. 指定`AUTO_INCREMENT`的列必须建立索引，具有`PRIMARY KEY`或`UNIQUE KEY`的列会自动建立索引

#### 注释

```mysql
mysql> CREATE TABLE 表名 (
  列名 数据类型 COMMENT '注释内容'
);
```