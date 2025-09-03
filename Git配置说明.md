# Git 配置说明

## .gitignore 文件配置

本项目已经配置了完整的 `.gitignore` 文件，确保以下类型的文件不会被提交到Git仓库：

### 🚫 被忽略的文件类型

#### 依赖文件
- `node_modules/` - npm包依赖目录
- `package-lock.json` - npm锁定文件
- `yarn.lock` - Yarn锁定文件
- `pnpm-lock.yaml` - pnpm锁定文件

#### 构建输出
- `dist/` - Vite构建输出目录
- `build/` - 构建输出目录
- `out/` - 输出目录
- `.vite/` - Vite缓存目录

#### 环境变量
- `.env` - 环境变量文件
- `.env.local` - 本地环境变量
- `.env.development.local` - 开发环境变量
- `.env.test.local` - 测试环境变量
- `.env.production.local` - 生产环境变量

#### IDE和编辑器文件
- `.vscode/` - VS Code配置
- `.idea/` - IntelliJ IDEA配置
- `*.swp`, `*.swo` - Vim临时文件
- `*~` - 编辑器备份文件

#### 操作系统文件
- `.DS_Store` - macOS系统文件
- `Thumbs.db` - Windows缩略图文件
- `ehthumbs.db` - Windows缩略图数据库

#### 日志和缓存
- `*.log` - 日志文件
- `npm-debug.log*` - npm调试日志
- `yarn-debug.log*` - Yarn调试日志
- `.eslintcache` - ESLint缓存
- `*.tsbuildinfo` - TypeScript构建信息

#### 测试覆盖率
- `coverage/` - 测试覆盖率报告
- `*.lcov` - LCOV覆盖率文件
- `.nyc_output` - NYC覆盖率输出

### ✅ 应该提交的文件

- `src/` - 源代码目录
- `public/` - 公共资源
- `package.json` - 项目配置
- `tsconfig.json` - TypeScript配置
- `vite.config.ts` - Vite配置
- `README.md` - 项目说明
- `.gitignore` - Git忽略规则
- `数据更新指南.md` - 数据更新说明

### 🔧 常用Git命令

```bash
# 查看当前状态
git status

# 查看被忽略的文件
git status --ignored

# 添加文件到暂存区
git add .

# 提交更改
git commit -m "更新说明"

# 推送到远程仓库
git push

# 强制添加被忽略的文件（不推荐）
git add -f filename
```

### 📝 注意事项

1. **不要提交敏感信息** - 确保 `.env` 文件包含敏感信息时不被提交
2. **依赖管理** - 只提交 `package.json`，不提交 `node_modules/`
3. **构建文件** - 构建输出应该在部署时生成，不需要提交
4. **个人配置** - IDE配置文件通常不需要共享

### 🆘 如果误提交了被忽略的文件

```bash
# 从Git历史中移除文件（但保留本地文件）
git rm --cached filename

# 从Git历史中移除目录
git rm -r --cached directory/

# 提交更改
git commit -m "移除被忽略的文件"
```

这样配置可以确保仓库保持干净，只包含必要的源代码和配置文件。
