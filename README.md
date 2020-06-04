
## 简易js后端

## 给docker玩家

```
https://www.cnblogs.com/liuyublog/p/9099376.html
```

```
$docker pull mysql/mysql-server:5.5

$docker run --name mysql5.5 -p 3308:3306 -e MYSQL\_ROOT\_PASSWORD=123999 -d mysql/mysql-server:5.5

$docker exec -it mysql5.5 bash

$mysql -u root -p

$GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION
$FLUSH PRIVILEGES

$mysql -u root -p -h 127.0.0.1 -P 3308
```

## 安装依赖

    npm install

## 运行server

    node src/server.js

## 运行httpserver 

    node src/httpserver.js
    
## 初始化数据库

```
create database book;
create table book(id int primary key auto_increment not null,name char(100) not null, introduce char(100), value int not null, remark char(100), statu char(100) not null default '在架', borrowuser char(100), borrowtime char(100));
create table user(id int primary key auto_increment not null,name char(100) not null unique, introduce char(100), remark char(100));
INSERT INTO user ( name ) VALUES ( '张三' );
INSERT INTO book ( name,value ) VALUES ( '飘',10 );
INSERT INTO book ( name,value ) VALUES ( '飘',10 );
INSERT INTO book ( name,value ) VALUES ( '离散数学',10 );
INSERT INTO book ( name,value ) VALUES ( '书名一定要长长长长长',10 );
```
