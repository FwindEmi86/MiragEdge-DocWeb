FROM php:8-fpm-alpine

# 1. 安装 GD 及其它扩展所需的系统依赖库
RUN apk add --no-cache \
    zlib-dev \
    libpng-dev \
    libjpeg-turbo-dev \
    freetype-dev \
    libwebp-dev \
    libxpm-dev \
    libzip-dev \
    oniguruma-dev

# 2. 配置 GD 扩展（启用对 jpeg, png, freetype, webp, xpm 的支持）
RUN docker-php-ext-configure gd \
    --with-freetype \
    --with-jpeg \
    --with-webp \
    --with-xpm

# 3. 安装 PHP 扩展
RUN docker-php-ext-install \
    mysqli \
    pdo_mysql \
    gd \
    exif \
    zip \
    mbstring

# 4. 复制自定义 PHP 配置（大文件上传、超时等）
COPY uploads.ini /usr/local/etc/php/conf.d/uploads.ini

# 5. （可选）安装 Redis 等第三方扩展
# RUN pecl install redis && docker-php-ext-enable redis

# 6. 清理缓存
RUN rm -rf /var/cache/apk/*

# 7. 设置时区
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo "Asia/Shanghai" > /etc/timezone

# 8. 使用非 root 用户运行
#USER www-data
USER root