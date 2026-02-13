FROM php:8-fpm-alpine

# 安装 WordPress 必需的扩展
RUN docker-php-ext-install mysqli pdo_mysql gd exif zip \
    && docker-php-ext-enable mysqli pdo_mysql gd exif zip

# 推荐：设置时区（可选）
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo "Asia/Shanghai" > /etc/timezone

# 使用非 root 用户运行（官方镜像已默认 www-data）
USER www-data