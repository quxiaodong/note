> 默认情况下，结束符是`;`、`\g`和`\G`

#### 配置结束符

```mysql
mysql> DELIMITER 结束符
```

##### 案例

```mysql
mysql> DELIMITER $
mysql> SELECT * FROM 表名$
```

#### 恢复结束符

```mysql
mysql> DELIMITER ;
```