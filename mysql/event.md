#### 查看事件

```mysql
mysql> SHOW EVENTS;
```

```mysql
# 查看某个事件
mysql> SHOW CREATE EVENT 事件名;
```

#### 创建事件

```mysql
mysql> CREATE EVENT 事件名
  ON SCHEDULE
  {AT 具体时间 | EVERY 时间间隔 [STARTS datetime] [ENDS datetime]}
  DO
  BEGIN
    具体的语句
  END
```

##### 案例

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
mysql> DELIMITER $
mysql> CREATE EVENT insertData
  ON SCHEDULE
  AT DATE_ADD(NOW(), INTERVAL 1 MINUTE)
  DO
  BEGIN
    INSERT INTO user(nickname, age, gender) VALUES('f', 60, NULL);
  END
$
mysql> DELIMITER ;
```

```mysql
mysql> DELIMITER $
mysql> CREATE EVENT insertData
  ON SCHEDULE
  EVERY 1 MINUTE STARTS NOW() ENDS DATE_ADD(NOW(), INTERVAL 3 MINUTE)
  DO
  BEGIN
    INSERT INTO user(nickname, age, gender) VALUES(CURTIME(), 100, NULL);
  END
$
mysql> DELIMITER ;
```

#### 删除事件

```mysql
mysql> DROP EVENT 事件名;
```

#### 注意事项

> 如果事件没有按预期执行，需要设置`SET GLOBAL event_scheduler = ON;`

> 事件执行完后默认会删除