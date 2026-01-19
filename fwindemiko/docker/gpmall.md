# 单应用容器化部署 - GPMall 电商系统

## 一、项目概述

将单体电商应用 GPMall 容器化部署，涉及多个服务组件的 Docker 镜像构建和 Docker Compose 编排。

## 二、环境准备

### 1. 下载项目资源
```bash
# 下载并解压项目资源包
tar -zvxf gpmall.tar.gz
```

### 2. 加载基础镜像
```bash
# 加载 CentOS 基础镜像
docker load -f centos7.9.2009.tar
```

### 3. 配置本地 YUM 源（也方便给容器用）
创建 `/etc/yum.repos.d/local.repo` 文件：
```ini
[centos]
name=centos
baseurl=http://mirrors.54mc.cn/centos
gpgcheck=0
enabled=1

[gpmall]
name=gpmall
baseurl=file:///opt/gpmall
gpgcheck=0
enabled=1
```

## 三、各服务镜像构建

### 1. Redis 镜像构建

#### Dockerfile (`redis.Dockerfile`)
```dockerfile
FROM centos:centos7.9.2009
ADD gpmall.tar /opt
RUN rm -fv /etc/yum.repos.d/*
ADD local.repo /etc/yum.repos.d/
RUN yum install -y redis
RUN sed -i 's/bind 127.0.0.1/bind 0.0.0.0/g' /etc/redis.conf
RUN sed -i 's/protected-mode yes/protected-mode no/g' /etc/redis.conf
RUN sed -i 's/daemonize yes/daemonize no/g' /etc/redis.conf
EXPOSE 6379
ENTRYPOINT ["redis-server", "/etc/redis.conf"]
```

#### 构建命令
```bash
docker build -t gpmall-redis:v1.0 -f redis.Dockerfile .
```

### 2. MariaDB 镜像构建

#### 数据库初始化脚本 (`init-db.sh`)
```bash
#!/bin/bash
mysql_install_db --user=root
mysqld_safe --user=root &
sleep 8
mysqladmin -u root password '123456'
mysql -uroot -p123456 -e "grant all on *.* to 'root'@'%' identified by '123456';flush privileges;"
mysql -uroot -p123456 -e "create database gpmall;use gpmall;source /opt/gpmall.sql;"
```

#### Dockerfile (`mariadb.Dockerfile`)
```dockerfile
FROM centos:centos7.9.2009
ADD gpmall.tar /opt/
RUN rm -fv /etc/yum.repos.d/*
ADD local.repo /etc/yum.repos.d/
RUN yum install -y mariadb-server mariadb
ADD init-db.sh /opt/
RUN chmod +x /opt/init-db.sh
EXPOSE 3306
ENTRYPOINT ["/opt/init-db.sh"]
```

#### 构建命令
```bash
docker build -t gpmall-mariadb:v1.0 -f mariadb.Dockerfile .
```

### 3. ZooKeeper 镜像构建

#### Dockerfile (`zookeeper.Dockerfile`)
```dockerfile
FROM centos:centos7.9.2009
ADD gpmall.tar /opt/
RUN rm -fv /etc/yum.repos.d/*
ADD local.repo /etc/yum.repos.d/
RUN yum install -y java zookeeper
ADD zoo.cfg /etc/zookeeper/
EXPOSE 2181 2888 3888
ENTRYPOINT ["zkServer.sh", "start-foreground"]
```

#### 构建命令
```bash
docker build -t gpmall-zookeeper:v1.0 -f zookeeper.Dockerfile .
```

### 4. Kafka 镜像构建

#### Dockerfile (`kafka.Dockerfile`)
```dockerfile
FROM centos:centos7.9.2009
ADD gpmall.tar /opt/
RUN rm -fv /etc/yum.repos.d/*
ADD local.repo /etc/yum.repos.d/
RUN yum install -y java kafka
ADD server.properties /opt/kafka/config/
EXPOSE 9092
ENTRYPOINT ["kafka-server-start.sh", "/opt/kafka/config/server.properties"]
```

#### 构建命令
```bash
docker build -t gpmall-kafka:v1.0 -f kafka.Dockerfile .
```

### 5. Nginx + 应用镜像构建

#### Nginx 配置文件 (`default.conf`)
```nginx
server {
    listen 80;
    server_name localhost;

    location / {
        root /usr/share/nginx/html;
        index index.html index.htm;
    }

    location /shopping {
        proxy_pass http://127.0.0.1:8081;
    }

    location /user {
        proxy_pass http://127.0.0.1:8082;
    }

    location /cashier {
        proxy_pass http://127.0.0.1:8083;
    }
}
```

#### 应用启动脚本 (`run.sh`)
```bash
#!/bin/bash
# 启动各个 Java 服务
nohup java -jar /root/shopping-provider-0.0.1-SNAPSHOT.jar &
sleep 25  # 延长等待时间确保服务完全启动

nohup java -jar /root/user-provider-0.0.1-SNAPSHOT.jar &
sleep 25

nohup java -jar /root/gpmall-shopping-0.0.1-SNAPSHOT.jar &
sleep 25

nohup java -jar /root/gpmall-user-0.0.1-SNAPSHOT.jar &
sleep 25

# 启动 Nginx（前台运行）
nginx -g 'daemon off;'
```

#### Dockerfile (`nginx.Dockerfile`)
```dockerfile
FROM centos:centos7.9.2009
ADD gpmall.tar /opt/
RUN rm -fv /etc/yum.repos.d/*
ADD local.repo /etc/yum.repos.d/
RUN yum install -y java nginx
RUN rm -rf /usr/share/nginx/html/*
ADD dist.tar /usr/share/nginx/html
ADD default.conf /etc/nginx/conf.d/
COPY *.jar /root/
ADD run.sh /root/
RUN chmod 755 /root/run.sh
EXPOSE 80 443 8081 8082 8083
ENTRYPOINT ["/root/run.sh"]
```

#### 构建命令（使用 --no-cache）
```bash
docker build --no-cache -t gpmall-nginx:v1.0 -f nginx.Dockerfile .
```

## 四、Docker Compose 编排

### Docker Compose 文件 (`docker-compose.yml`)
```yaml
version: '3'
services:
  mall-mysql:
    image: gpmall-mariadb:v1.0
    container_name: gpmall-mariadb
    ports:
      - "3306:3306"
    networks:
      - gpmall-network

  mall-redis:
    image: gpmall-redis:v1.0
    container_name: gpmall-redis
    ports:
      - "6379:6379"
    networks:
      - gpmall-network

  mall-zookeeper:
    image: gpmall-zookeeper:v1.0
    container_name: gpmall-zookeeper
    ports:
      - "2181:2181"
    networks:
      - gpmall-network

  mall-kafka:
    image: gpmall-kafka:v1.0
    container_name: gpmall-kafka
    ports:
      - "9092:9092"
    links:
      - mall-zookeeper:zookeeper.mall
    networks:
      - gpmall-network

  mall-nginx:
    image: gpmall-nginx:v1.0
    container_name: gpmall-nginx
    depends_on:
      - mall-mysql
      - mall-redis
      - mall-zookeeper
      - mall-kafka
    links:
      - mall-mysql:mysql.mall
      - mall-redis:redis.mall
      - mall-zookeeper:zookeeper.mall
      - mall-kafka:kafka.mall
    ports:
      - "80:80"
      - "443:443"
    networks:
      - gpmall-network

networks:
  gpmall-network:
    driver: bridge
```

### 启动应用
```bash
# 启动所有服务
docker-compose up -d

# 查看运行状态
docker-compose ps

# 查看日志
docker-compose logs -f mall-nginx

# 停止服务
docker-compose down
```

## 五、问题排查与解决

### 1. 清除 Harbor 镜像仓库
```bash
# 如果集群中已存在 Harbor，需要先卸载
helm uninstall -n harbor harbor
```

### 2. 调试技巧

#### 检查容器日志
```bash
# 查看指定容器的实时日志
docker logs -f gpmall-nginx

# 查看最后 N 行日志
docker logs --tail=100 gpmall-nginx

# 查看容器内的进程
docker exec gpmall-nginx ps aux
```

#### 进入容器调试
```bash
# 进入运行中的容器
docker exec -it gpmall-nginx /bin/bash
```

#### 重建镜像（清除缓存）
```bash
# 使用 --no-cache 参数避免缓存问题
docker build --no-cache -t gpmall-nginx:v1.0 -f nginx.Dockerfile .
```

## 六、验证部署

### 1. 检查容器状态
```bash
# 检查所有容器是否正常运行
docker ps

# 预期输出
CONTAINER ID   IMAGE                    STATUS         PORTS
xxxxxxxxxxxx   gpmall-nginx:v1.0        Up 5 minutes   0.0.0.0:80->80/tcp, 0.0.0.0:443->443/tcp
xxxxxxxxxxxx   gpmall-mariadb:v1.0      Up 5 minutes   0.0.0.0:3306->3306/tcp
xxxxxxxxxxxx   gpmall-redis:v1.0        Up 5 minutes   0.0.0.0:6379->6379/tcp
xxxxxxxxxxxx   gpmall-kafka:v1.0        Up 5 minutes   0.0.0.0:9092->9092/tcp
xxxxxxxxxxxx   gpmall-zookeeper:v1.0    Up 5 minutes   0.0.0.0:2181->2181/tcp
```

### 2. 测试服务连通性
```bash
# 测试数据库连接
mysql -h127.0.0.1 -P3306 -uroot -p123456 -e "show databases;"

# 测试 Redis 连接
redis-cli -h 127.0.0.1 -p 6379 ping

# 测试 Web 访问
curl http://localhost/
```

### 3. 访问应用
- 打开浏览器访问: `http://<服务器IP>`
- 能看到 GPMall 前端界面