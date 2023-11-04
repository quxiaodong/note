#### 查询全部列

```mysql
mysql> SELECT * FROM 表名;
```

#### 查询单个列

```mysql
mysql> SELECT 列名 FROM 表名;
```

#### 查询多个列

```mysql
mysql> SELECT 列名1, ..., 列名n FROM 表名;
```

#### 设置列别名

```mysql
mysql> SELECT 列名 [AS] 列的别名 FROM 表名;
```

#### 过滤单个重复列

每条数据中指定列的值都相同

```mysql
mysql> SELECT DISTINCT 列名 FROM 表名;
```

#### 过滤多个重复列

每条数据中指定多个列的值都相同

```mysql
mysql> SELECT DISTINCT 列名1, ..., 列名n FROM 表名;
```

#### 限制条数量

```mysql
mysql> SELECT 列名1, ..., 列名n FROM 表名 LIMIT 起始行数, 限制条数;
```

> `LIMIT`后面只有一个参数时，代表的是限制条数，起始行数默认为`0`

#### 排序单个列

```mysql
# 升序
mysql> SELECT * FROM 表名 ORDER BY 列名 ASC;

# 降序
mysql> SELECT * FROM 表名 ORDER BY 列名 DESC;
```

#### 排序多个列

```mysql
mysql> SELECT * FROM 表名 ORDER BY 列名1 ASC|DESC, 列名2 ASC|DESC;
```