# heyiwei-web 开发指南

## 项目概述

heyiwei-web 是一个收集和展示网络热词与流行文化词条的网站，采用前后端分离的静态单页应用架构，使用 Vue 3 和 Vite 构建。

## 技术栈

- **框架**: Vue 3 (^3.5.24)
- **构建工具**: Vite (via rolldown-vite@7.2.5)
- **路由**: vue-router ^4.6.3
- **HTTP 客户端**: axios ^1.13.2
- **样式**: Bootstrap ^5.3.8 + Sass ^1.95.1
- **CSS 处理**: postcss ^8.5.6 + autoprefixer ^10.4.22

## 开发环境设置

### 环境要求

- Node.js (建议 v16+)
- npm 或 pnpm
- Git

### 安装步骤

1. 克隆仓库：
   ```bash
   git clone https://github.com/Nico6719/whatmean.com.git
   ```

2. 进入项目目录并安装依赖：
   ```bash
   cd whatmean.com
   npm install
   ```

3. 启动本地开发服务器：
   ```bash
   npm run dev
   ```

## 项目结构

```
heyiwei-web/
├── entry/                    # 存放词条 JSON 文件
│   └── simple.json
├── src/
│   ├── components/          # 可复用 UI 组件
│   ├── router/              # 路由配置
│   ├── services/            # API 服务
│   ├── views/               # 页面级视图组件
│   ├── App.vue              # 根组件
│   ├── main.js              # 应用入口
│   └── style.css            # 全局样式
├── API_DOCUMENTATION.md     # API 文档
├── README.md
├── DEVELOPMENT_GUIDE.md     # 本开发指南
├── package.json
└── vite.config.js
```

## 主要组件说明

- [Header.vue](/heyiwei-web/src/components/Header.vue) / [Footer.vue](/heyiwei-web/src/components/Footer.vue): 页面头部和底部
- [Sidebar.vue](/heyiwei-web/src/components/Sidebar.vue): 导航侧边栏
- [LiquidGlassButton](/heyiwei-web/src/components/LiquidGlassButton.vue)/[Card](/heyiwei-web/src/components/LiquidGlassCard.vue), [MorphModal](/heyiwei-web/src/components/MorphModal.vue): 特效 UI 组件
- [MainContent.vue](/heyiwei-web/src/components/MainContent.vue): 主区域内容容器
- [Index.vue](/heyiwei-web/src/views/Index.vue): 首页
- [Entry.vue](/heyiwei-web/src/views/Entry.vue): 词条详情页
- [About.vue](/heyiwei-web/src/views/About.vue): 关于页面

## 开发规范

### 代码规范

- 使用 camelCase 命名变量和函数
- 组件名使用 PascalCase 命名
- 文件名使用 kebab-case 命名
- 所有 Vue 组件的 `<template>`, `<script>`, `<style>` 标签必须正确闭合

### 数据结构规范

- 词条数据以 JSON 格式存储在 [entry/](/heyiwei-web/entry) 目录
- 为优化性能，建议将多个小 JSON 文件合并为单个 JSON 文件
- JSON 文件需验证字段完整性

### 响应式设计规范

- 移动端采用单列垂直布局
- 小屏幕设备需调整字体大小、间距和内边距
- 移动端全屏背景区域应设置为 `100vh` 高度
- 分隔符在移动端应隐藏，改用垂直间距分隔元素

## 命令说明

- `npm run dev`: 启动开发服务器
- `npm run build`: 构建生产版本到 dist 目录
- `npm run preview`: 预览生产构建

## 词条贡献流程

1. 在 [entry/](/heyiwei-web/entry) 目录下创建新的 JSON 文件
2. 按照现有格式添加词条信息
3. 提交 PR 进行审核

## 常见问题

### Vue 组件标签未闭合

确保所有 Vue 组件的 `<template>`, `<script>`, `<style>` 标签都有正确的开始和结束标签。

### JSON 文件格式错误

在提交新的词条 JSON 文件前，请验证其格式正确性，避免因格式错误导致应用无法正常加载。

### 性能优化

- 当词条数量增长时，考虑实现分页或懒加载功能
- 合并多个小 JSON 文件以减少请求开销