# Kubectl 命令速查指南

## 快速参考表

| 场景 | 命令 |
|------|------|
| 查看所有Pod | `kubectl get pod -A` |
| 查看Pod详情 | `kubectl describe pod <name>` |
| 查看Pod日志 | `kubectl logs -f <pod-name>` |
| 进入Pod | `kubectl exec -it <pod-name> -- bash` |
| 应用配置 | `kubectl apply -f file.yaml` |
| 删除资源 | `kubectl delete -f file.yaml` |
| 更新镜像 | `kubectl set image deploy/<name> <container>=<image>` |
| 扩缩容 | `kubectl scale deploy/<name> --replicas=3` |
| 查看服务 | `kubectl get svc -o wide` |
| 端口转发 | `kubectl port-forward svc/<name> 8080:80` |
| 查看节点 | `kubectl get node -o wide` |
| 查看事件 | `kubectl get events --sort-by='.lastTimestamp'` |

## 一、基础语法

### 命令格式
```bash
kubectl [子命令] [资源类型] [资源名称] [可选参数]
```

### 配置自动补全（Bash）
```bash
# 临时生效
source <(kubectl completion bash)

# 永久生效
echo "source <(kubectl completion bash)" >> ~/.bashrc
source ~/.bashrc
```

## 二、资源类型简写表

| 完整名称 | 简写 | 说明 |
|---------|------|------|
| pod | po | Pod资源 |
| deployment | deploy | 部署控制器 |
| service | svc | 服务 |
| namespace | ns | 命名空间 |
| configmap | cm | 配置映射 |
| secret | sec | 密钥 |
| statefulset | sts | 有状态集 |
| daemonset | ds | 守护进程集 |
| node | no | 节点 |
| ingress | ing | 入口 |
| job | job | 任务 |
| cronjob | cj | 定时任务 |

## 三、常用参数

| 参数 | 完整形式 | 说明 |
|------|---------|------|
| `-n` | `--namespace=命名空间名` | 指定命名空间 |
| `-A` | `--all-namespaces` | 所有命名空间 |
| `-o yaml` | - | YAML格式输出 |
| `-o json` | - | JSON格式输出 |
| `-o wide` | - | 详细信息输出 |
| `--show-labels` | - | 显示标签 |
| `--force` | - | 强制操作 |
| `--grace-period=0` | - | 立即删除 |

## 四、增删改查操作

### 1. 创建资源

#### 通过YAML文件
```bash
# 单个文件
kubectl apply -f deployment.yaml

# 多个文件
kubectl apply -f mysql.yaml -f redis.yaml

# 整个目录
kubectl apply -f ./manifests/
```

#### 通过命令行
```bash
# 创建Deployment
kubectl create deploy nginx --image=nginx:1.25

# 创建命名空间
kubectl create ns test

# 创建ConfigMap
kubectl create configmap my-config --from-literal=key=value

# 创建Secret
kubectl create secret generic my-secret --from-literal=password=123456
```

### 2. 删除资源

#### 按名称删除
```bash
# 删除Pod
kubectl delete pod nginx-pod-xxx

# 删除Deployment
kubectl delete deployment nginx-deploy

# 删除Service
kubectl delete service nginx-svc -n test
```

#### 通过YAML文件
```bash
kubectl delete -f deployment.yaml
```

#### 批量删除
```bash
# 删除所有命名空间的Pod
kubectl delete pod -A --all

# 删除当前命名空间所有Deployment
kubectl delete deployment --all

# 删除命名空间及其所有资源
kubectl delete namespace test
```

#### 强制删除
```bash
# 强制删除卡住的Pod
kubectl delete pod stuck-pod -n default --force --grace-period=0
```

### 3. 更新资源

#### 直接编辑
```bash
# 编辑Deployment
kubectl edit deployment nginx-deploy

# 编辑Pod
kubectl edit pod nginx-pod
```

#### 修改镜像
```bash
kubectl set image deployment/nginx-deploy nginx=nginx:1.26
```

#### 补丁更新
```bash
kubectl patch pod nginx-pod -p '{"spec":{"containers":[{"name":"nginx","image":"nginx:1.26"}]}}'
```

#### 扩缩容
```bash
# 扩容到5个副本
kubectl scale deployment nginx-deploy --replicas=5
```

### 4. 查看资源

#### 基本查询
```bash
# 查看Pod
kubectl get pod                    # 当前命名空间
kubectl get pod -n test            # 指定命名空间
kubectl get pod -A                 # 所有命名空间
kubectl get pod -o wide            # 详细信息
kubectl get pod --show-labels      # 显示标签

# 查看其他资源
kubectl get deployment
kubectl get service
kubectl get namespace
kubectl get node
kubectl get configmap
kubectl get secret
```

#### 详细查询
```bash
# 查看单个资源
kubectl get pod nginx-pod-xxx
kubectl get deployment mysql-deploy -n prod

# 查看完整配置
kubectl get pod nginx-pod -o yaml
kubectl get deployment nginx-deploy -o yaml
kubectl get pod nginx-pod -o json

# 查看描述信息
kubectl describe pod nginx-pod
kubectl describe deployment nginx-deploy
```

#### 筛选查询
```bash
# 按标签筛选
kubectl get pod -l app=nginx

# 按字段筛选
kubectl get pod --field-selector=status.phase=Running

# 排序输出
kubectl get pod --sort-by='.status.startTime'
```

## 五、Pod操作

### 执行命令
```bash
# 进入容器
kubectl exec -it nginx-pod -- /bin/bash
kubectl exec -it nginx-pod -- sh

# 执行单条命令
kubectl exec nginx-pod -- ls /var/log
```

### 查看日志
```bash
# 基本查看
kubectl logs nginx-pod

# 实时日志
kubectl logs -f nginx-pod

# 指定容器
kubectl logs nginx-pod -c nginx-container

# 查看最后N行
kubectl logs nginx-pod --tail=100

# 查看最近时间
kubectl logs nginx-pod --since=1h

# 查看之前崩溃的Pod日志
kubectl logs nginx-pod --previous
```

### 文件传输
```bash
# 本地复制到Pod
kubectl cp local.txt nginx-pod:/tmp/remote.txt

# Pod复制到本地
kubectl cp nginx-pod:/tmp/remote.txt local.txt

# 指定容器
kubectl cp local.txt nginx-pod:/tmp/remote.txt -c nginx-container
```

## 六、端口转发

```bash
# 转发Pod端口
kubectl port-forward pod/nginx-pod 8080:80

# 转发Service端口
kubectl port-forward service/nginx-svc 8080:80

# 转发Deployment端口
kubectl port-forward deployment/nginx-deploy 8080:80

# 指定命名空间
kubectl port-forward -n test pod/nginx-pod 8080:80

# 后台运行
kubectl port-forward pod/nginx-pod 8080:80 &
```

## 七、命名空间管理

```bash
# 创建
kubectl create namespace test

# 查看
kubectl get namespace
kubectl get ns

# 删除
kubectl delete namespace test

# 切换默认命名空间
kubectl config set-context --current --namespace=test

# 查看当前上下文
kubectl config get-contexts

# 切换上下文
kubectl config use-context prod-cluster
```

## 八、节点管理

```bash
# 查看节点
kubectl get node
kubectl get node -o wide

# 查看节点详情
kubectl describe node node-name

# 标记节点不可调度
kubectl cordon node-name

# 恢复节点调度
kubectl uncordon node-name

# 驱逐节点上所有Pod
kubectl drain node-name --ignore-daemonsets --delete-emptydir-data

# 查看节点资源使用
kubectl top node
```

## 九、调试命令

### 查看事件
```bash
# 查看所有事件
kubectl get events

# 按时间排序
kubectl get events --sort-by='.lastTimestamp'

# 查看特定资源事件
kubectl describe pod nginx-pod
```

### 查看资源使用
```bash
# 节点资源
kubectl top node

# Pod资源
kubectl top pod

# 指定命名空间
kubectl top pod -n test
```

### 调试Pod
```bash
# 查看Pod状态
kubectl get pod -w        # 监视模式
kubectl get pod -o wide

# 查看Pod调度详情
kubectl describe pod nginx-pod | grep -A10 Events

# 调试Pod启动失败
kubectl logs nginx-pod --previous
```

## 十、YAML操作

### 生成YAML模板
```bash
# 生成Deployment YAML
kubectl create deployment nginx --image=nginx:1.25 --dry-run=client -o yaml

# 生成Service YAML
kubectl create service clusterip nginx --tcp=80:80 --dry-run=client -o yaml
```

### 导出YAML配置
```bash
# 导出运行中资源的配置
kubectl get deployment nginx-deploy -o yaml > deployment.yaml
kubectl get service nginx-svc -o yaml --export > service.yaml
```

## 十一、实用组合命令

```bash
# 一键清理失败的Pod
kubectl delete pod --field-selector=status.phase=Failed

# 批量重启Deployment
kubectl rollout restart deployment -n default

# 查看所有容器镜像版本
kubectl get pods -o jsonpath='{.items[*].spec.containers[*].image}'

# 列出所有Pod及其运行节点
kubectl get pod -o=custom-columns=NAME:.metadata.name,STATUS:.status.phase,NODE:.spec.nodeName

# 检查集群状态
kubectl get componentstatuses
kubectl version
kubectl cluster-info
```

## 十二、常用命令别名

```bash
# 添加到 ~/.bashrc 或 ~/.zshrc
alias k='kubectl'
alias kg='kubectl get'
alias kd='kubectl describe'
alias kc='kubectl create'
alias ka='kubectl apply'
alias kdel='kubectl delete'
alias ke='kubectl edit'
alias kl='kubectl logs'
alias kex='kubectl exec -it'
alias kpf='kubectl port-forward'
alias kt='kubectl top'
alias kns='kubectl config set-context --current --namespace'
```
