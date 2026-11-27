```text
printf(格式控制字符串, 参数1, 参数2, ...)
```

- 整形

```c
printf("%hd", (short)10); // short
printf("%d", 10);         // int
printf("%ld", 10L);       // long
printf("%lld", 10LL);     // long long
```

- 浮点型

```c
printf("%f", 3.14F);  // float
printf("%lf", 3.14);  // double
printf("%Lf", 3.14L); // long double
```

- 字符

```c
printf("%c", 'A');     // char
printf("%s", "Hello"); // string
```

- 指针

```c
int a;
int *p = &a;
printf("%p", (void*)p); // 指针
```

- size_t(sizeof的返回类型)

```c
printf("%zu", sizeof(int)); // sizeof
```

- unsigned

```c
printf("%hu", (unsigned short)10);  // unsigned short
printf("%u", 10U);                  // unsigned int
printf("%lu", 10UL);                // unsigned long
printf("%llu", 10ULL);              // unsigned long long
```
