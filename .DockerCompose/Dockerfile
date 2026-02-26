# Dockerfile 内容
# 基础镜像：官方最新nginx
FROM nginx:latest

# 将自定义nginx配置替换容器默认的配置（nginx默认加载conf.d下的default.conf）
COPY default.conf /etc/nginx/conf.d/default.conf

# 暴露容器80端口（可选，仅作声明，运行时-p参数才是实际映射）
EXPOSE 80

# nginx镜像默认启动命令为：nginx -g 'daemon off;'，无需额外编写启动命令