# 后端API接入计划

## 1. 安装Axios
- 安装Axios库用于发送HTTP请求到后端API
- 命令：`npm install axios`

## 2. 创建API服务层
- 创建`src/services/api.js`文件，封装所有与后端API的交互逻辑
- 配置Axios实例，设置基础URL和默认headers
- 实现以下API方法：
  - `getEntries()` - 获取所有词条
  - `getEntryById(id)` - 根据ID获取词条
  - `createEntry(entry)` - 创建新词条
  - `updateEntry(id, entry)` - 更新词条
  - `deleteEntry(id)` - 删除词条
  - `searchEntries(query)` - 搜索词条

## 3. 修改Entry组件
- 将当前硬编码的`allMemes`数组替换为从API获取的数据
- 使用`onMounted`钩子在组件加载时调用API获取所有词条
- 调整数据结构以匹配API返回格式
- 添加加载状态和错误处理

## 4. 实现词条搜索功能
- 在Entry页面添加搜索输入框
- 实现搜索逻辑，调用`searchEntries`方法
- 显示搜索结果

## 5. 实现词条管理功能（可选）
- 添加创建新词条的表单
- 实现编辑和删除词条的功能
- 添加模态框用于编辑和创建词条

## 6. 更新路由和其他组件（如需）
- 根据需要更新路由配置
- 在其他组件中集成API调用

## 技术要点
- 使用Vue 3的Composition API
- 实现响应式数据处理
- 添加适当的错误处理和加载状态
- 保持代码的可维护性和可扩展性

## 预期效果
- 所有词条数据从后端API动态获取
- 实现完整的CRUD功能
- 支持词条搜索
- 提供良好的用户体验，包括加载状态和错误提示