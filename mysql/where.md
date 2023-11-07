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
| `XOR` | 有且只有一个条件为真 | SELECT * FROM 表名 WHERE 列名1 = 值 XOR 列名2 > 值; |
| `LIKE` | 匹配 | SELECT * FROM 表名 WHERE 列名 LIKE '值%'; |
| `NOT LIKE` | 不匹配 | SELECT * FROM 表名 WHERE 列名 NOT LIKE '值_'; |

> 1. `%`匹配0~n个字符
> 2. `_`匹配一个字符
> 3. `AND`操作符的优先级高于`OR`操作符

```mysql
mysql> CREATE TABLE user(
  id INT AUTO_INCREMENT PRIMARY KEY,
  nickname VARCHAR(10),
  age INT,
  gender ENUM('male', 'female')
);

mysql> INSERT INTO user(nickname, age, gender) VALUES
  ('a', 10, 'male'),
  ('b', 20, 'female'),
  ('c', 30, 'male'),
  ('d', 40, 'female'),
  ('e', 50, NULL)
;
```

```mysql
mysql> SELECT * FROM user WHERE age BETWEEN 20 AND 40;
+----+----------+------+--------+
| id | nickname | age  | gender |
+----+----------+------+--------+
|  2 | b        |   20 | female |
|  3 | c        |   30 | male   |
|  4 | d        |   40 | female |
+----+----------+------+--------+
3 rows in set (0.00 sec)
```

```mysql
mysql> SELECT * FROM user WHERE gender IN ('male', 'female');
+----+----------+------+--------+
| id | nickname | age  | gender |
+----+----------+------+--------+
|  1 | a        |   10 | male   |
|  2 | b        |   20 | female |
|  3 | c        |   30 | male   |
|  4 | d        |   40 | female |
+----+----------+------+--------+
4 rows in set (0.00 sec)
```

```mysql
mysql> SELECT * FROM user WHERE gender IS NULL;
+----+----------+------+--------+
| id | nickname | age  | gender |
+----+----------+------+--------+
|  5 | e        |   50 | NULL   |
+----+----------+------+--------+
1 row in set (0.00 sec)
```

```mysql
mysql> SELECT * FROM user WHERE gender = 'male' AND age > 20;
+----+----------+------+--------+
| id | nickname | age  | gender |
+----+----------+------+--------+
|  3 | c        |   30 | male   |
+----+----------+------+--------+
1 row in set (0.00 sec)
```

```mysql
mysql> SELECT * FROM user WHERE gender LIKE 'fe%';
+----+----------+------+--------+
| id | nickname | age  | gender |
+----+----------+------+--------+
|  2 | b        |   20 | female |
|  4 | d        |   40 | female |
+----+----------+------+--------+
2 rows in set (0.00 sec)
```