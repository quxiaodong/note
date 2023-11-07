```mysql
# 查询全部列
mysql> SELECT * FROM 表名;
```

```mysql
# 查询单个列
mysql> SELECT 列名 FROM 表名;
```

```mysql
# 查询多个列
mysql> SELECT 列名1, ..., 列名n FROM 表名;
```

```mysql
# 查询满足条件的数据
mysql> SELECT 列名1, ..., 列名n FROM 表名 [表达式];
```

```mysql
# 字段顺序
mysql> SELECT [DISTINCT] 查询列表 [FROM 表名] [WHERE 布尔表达式] [GROUP BY 分组列表 ] [HAVING 分组过滤条件] [ORDER BY 排序列表] [LIMIT 开始行, 限制条数]
```