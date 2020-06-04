
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
create table book(id int primary key auto_increment not null,name char(10) not null, introduce char(10), value int not null, remark char(10), statu int not null default 0, borrowtime char(10));
create table user(id int primary key auto_increment not null,name char(10) not null, introduce char(10), remark char(10));
INSERT INTO user ( name ) VALUES ( '张三' );
```