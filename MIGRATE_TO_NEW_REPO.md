# 将 landing-page 迁移到新仓库的步骤

## 方案 1：使用 git subtree（保留历史）

### 步骤 1：创建新的 GitHub 仓库
1. 在 GitHub 上创建一个新仓库（例如：`certo-landing-page`）
2. 复制仓库 URL

### 步骤 2：提取 landing-page 到新仓库
```bash
# 在 Certo 项目根目录执行
cd /Users/jclee/Certo

# 使用 git subtree 提取 landing-page
git subtree push --prefix=landing-page origin-subtree <新仓库URL> main

# 或者使用 filter-branch（更彻底）
git filter-branch --prune-empty --subdirectory-filter landing-page main
```

### 步骤 3：在新位置克隆并设置
```bash
# 克隆新仓库
cd ~
git clone <新仓库URL> certo-landing-page
cd certo-landing-page

# 现在 landing-page 的内容在根目录
```

## 方案 2：简单迁移（不保留历史，推荐）

### 步骤 1：创建新的 GitHub 仓库
1. 在 GitHub 上创建新仓库（例如：`certo-landing-page`）

### 步骤 2：初始化新仓库
```bash
# 创建新目录
cd ~
mkdir certo-landing-page
cd certo-landing-page

# 初始化 git
git init

# 复制 landing-page 内容
cp -r /Users/jclee/Certo/landing-page/* .
cp -r /Users/jclee/Certo/landing-page/.* . 2>/dev/null || true

# 添加并提交
git add .
git commit -m "Initial commit: Landing page"

# 添加远程仓库
git remote add origin <新仓库URL>
git branch -M main
git push -u origin main
```

### 步骤 3：从原仓库移除 landing-page
```bash
cd /Users/jclee/Certo
git rm -r landing-page
git commit -m "Move landing-page to separate repository"
git push
```

## 方案 3：使用 git filter-repo（最干净，需要安装）

```bash
# 安装 git-filter-repo（如果未安装）
# brew install git-filter-repo

# 克隆原仓库到临时位置
cd /tmp
git clone /Users/jclee/Certo certo-temp
cd certo-temp

# 提取 landing-page
git filter-repo --path landing-page --to-subdirectory-filter .

# 添加新远程仓库
git remote add origin <新仓库URL>
git push -u origin main
```

## 推荐方案

由于 landing-page 只有 2 个提交历史，**推荐使用方案 2（简单迁移）**：
- ✅ 简单快速
- ✅ 干净的新仓库
- ✅ 易于维护
- ❌ 不保留历史（但历史很短，影响不大）

