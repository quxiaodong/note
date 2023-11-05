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

#### WHERE

| 操作符 | 描述 | 用法 |
| - | - | - |
| `=` | 等于 | SELECT * FROM 表名 WHERE 列名 = 值; |
| `<>`或者`!=` | 不等于 | SELECT * FROM 表名 WHERE 列名 != 值; |
| `<` | 小于 | SELECT * FROM 表名 WHERE 列名 < 值; |
| `<=` | 小于等于 | SELECT * FROM 表名 WHERE 列名 <= 值; |
| `>` | 大于 | SELECT * FROM 表名 WHERE 列名 > 值; |
| `>=` | 大于等于 | SELECT * FROM 表名 WHERE 列名 >= 值; |
| `BETWEEN` | 在...之间 | SELECT * FROM 表名 WHERE 列名 BETWEEN 值1 AND 值2; |
| `NOT BETWEEN` | 不在...之间 | SELECT * FROM 表名 WHERE 列名 NOT BETWEEN 值1 AND 值2; |
| `IN` | 满足其中一个 | SELECT * FROM 表名 WHERE 列名 IN (值1, 值2); |
| `NOT IN` | 不满足任何一个 | SELECT * FROM 表名 WHERE 列名 NOT IN (值1, 值2); |
| `IS NULL` | 值是`NULL` | SELECT * FROM 表名 WHERE 列名 IS NULL; |
| `IS NOT NULL` | 值不是`NULL` | SELECT * FROM 表名 WHERE 列名 IS NOT NULL; |
| `AND` | 满足全部条件 | SELECT * FROM 表名 WHERE 列名1 = 值 AND 列名2 > 值; |
| `OR` | 满足其中一个条件 | SELECT * FROM 表名 WHERE 列名1 = 值 OR 列名2 > 值; |
| `LIKE` | 匹配 | SELECT * FROM 表名 WHERE 列名 LIKE '值%'; |
| `NOT LIKE` | 不匹配 | SELECT * FROM 表名 WHERE 列名 NOT LIKE '值_'; |

> 1. `%`匹配0~n个字符
> 2. `_`匹配一个字符
> 3. `AND`操作符的优先级高于`OR`操作符