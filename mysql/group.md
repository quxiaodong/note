```mysql
# 普通分组
mysql> SELECT 列名 FROM 表名 GROUP BY 列名;

# 嵌套分组
mysql> SELECT 列名1, 列名2 FROM 表名 GROUP BY 列名1, 列名2;

# 分组之后再过滤
mysql> SELECT 列名 FROM 表名 GROUP BY 列名 HAVING 表达式;
```

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
  ('e', 50, NULL);
```

```mysql
mysql> SELECT gender, AVG(age) FROM user GROUP BY gender;
+--------+----------+
| gender | AVG(age) |
+--------+----------+
| male   |  20.0000 |
| female |  30.0000 |
| NULL   |  50.0000 |
+--------+----------+
3 rows in set (0.00 sec)
```

```mysql
mysql> SELECT gender, AVG(age) FROM user GROUP BY gender HAVING gender IS NOT NULL;
+--------+----------+
| gender | AVG(age) |
+--------+----------+
| male   |  20.0000 |
| female |  30.0000 |
+--------+----------+
2 rows in set (0.00 sec)
```