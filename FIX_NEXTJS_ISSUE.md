# Next.js 模块错误修复方案

## 问题诊断

错误信息：
```
Error: Cannot find module '../server/require-hook'
```

**原因**：Next.js 的 `node_modules` 安装不完整或损坏，缺少 `next/server/require-hook.js` 文件。

## 解决方案

### 方案 1：重新安装依赖（推荐）

```bash
cd /Users/jclee/Portfolio

# 删除 node_modules 和 lock 文件
rm -rf node_modules package-lock.json

# 重新安装依赖
npm install
```

### 方案 2：清理缓存后重新安装

```bash
cd /Users/jclee/Portfolio

# 清理 npm 缓存
npm cache clean --force

# 删除 node_modules
rm -rf node_modules package-lock.json

# 重新安装
npm install
```

### 方案 3：使用 yarn（如果 npm 有问题）

```bash
cd /Users/jclee/Portfolio

# 删除 node_modules
rm -rf node_modules package-lock.json

# 使用 yarn 安装
yarn install
```

## 验证修复

安装完成后，运行：

```bash
npm run dev
```

如果成功，应该看到：
```
- ready started server on 0.0.0.0:3000
- Local:        http://localhost:3000
```

## 如果问题仍然存在

1. **检查 Node.js 版本**：
   ```bash
   node --version
   ```
   Next.js 14.2.0 需要 Node.js >= 18.17.0

2. **检查磁盘空间**：
   ```bash
   df -h
   ```

3. **检查权限**：
   确保对 `/Users/jclee/Portfolio` 目录有读写权限

