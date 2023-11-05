```mysql
# 全部列
mysql> SELECT * FROM 表名;
```

```mysql
# 单个列
mysql> SELECT 列名 FROM 表名;
```

```mysql
# 多个列
mysql> SELECT 列名1, ..., 列名n FROM 表名;
```

#### AS

```mysql
mysql> SELECT 列名 [AS] 列的别名 FROM 表名;
```

#### DISTINCT

```mysql
# 每条数据中指定列的值都相同
mysql> SELECT DISTINCT 列名 FROM 表名;
```

```mysql
# 每条数据中指定多个列的值都相同
mysql> SELECT DISTINCT 列名1, ..., 列名n FROM 表名;
```

#### LIMIT

```mysql
mysql> SELECT 列名1, ..., 列名n FROM 表名 LIMIT 起始行数, 限制条数;
```

> `LIMIT`后面只有一个参数时，代表的是限制条数，起始行数默认为`0`

#### ORDER

```mysql
# 单个列
mysql> SELECT * FROM 表名 ORDER BY 列名 ASC|DESC;
```

```mysql
# 多个列
mysql> SELECT * FROM 表名 ORDER BY 列名1 ASC|DESC, 列名2 ASC|DESC;
```