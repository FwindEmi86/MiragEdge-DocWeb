#!/bin/bash

# ---------- 配置参数 ----------
REPO_DIR="/www/MiragEdge/MiragEdge-DocWeb"
BRANCH="main"
SSH_KEY="/root/.ssh/miragedge_web"

cd $REPO_DIR || exit 1

# 启动 SSH 代理
eval "$(ssh-agent -s)"
ssh-add $SSH_KEY

echo " "
echo " "
echo "启动SSH代理完成！正在拉取最新git代码构建..."
echo " "
echo " "

# 强制重置代码
git fetch origin $BRANCH
git reset --hard origin/$BRANCH

#echo " "
#echo " "
#echo "代码拉取完成！正在清理安装npm依赖..."
#echo " "
#echo " "

# 清理并安装依赖
#rm -rf node_modules
#npm install --force

echo " "
echo " "
#echo "清理安装完成！正在构建网站..."
#echo "代码拉取完成！正在构建网站..."
echo "构建和代码拉取完成！"
echo " "
echo " "

# 构建网站
npm run build

echo " "
echo " "
echo "构建完成！正在启动文档网站服务..."
#echo "正在启动文档网站服务..."
echo " "
echo " "

# 重启 Systemd 服务
#systemctl restart miragedge_web

echo " "
#echo "服务重启完成！文档网站服务现在运行在后台。"


#docker run -d --name docweb-nginx -p 5173:80 -v /www/MiragEdge/MiragEdge-DocWeb/.vitepress/dist/:/app --restart=always doc_nginx:main