# API 调用文档

本文档详细描述了词条管理系统的 API 接口规范。

## 基础信息

- 服务器地址：`http://localhost:3000`
- API 前缀：`/api`
- 返回格式：JSON

## 1. 创建词条

### 请求

```http
POST /api/entries HTTP/1.1
Host: localhost:3000
Content-Type: application/json
```

#### 请求体

```json
{
  "name": "人工智能",
  "explanation": "人工智能是计算机科学的一个分支，致力于创建能够执行通常需要人类智能的任务的机器。",
  "tags": "科技,计算机,未来",
  "year": 1956
}
```

### 成功响应

```http
HTTP/1.1 201 Created
Content-Type: application/json
```

```json
{
  "id": 1,
  "name": "人工智能",
  "explanation": "人工智能是计算机科学的一个分支，致力于创建能够执行通常需要人类智能的任务的机器。",
  "tags": "科技,计算机,未来",
  "year": 1956
}
```

### 失败响应

```http
HTTP/1.1 400 Bad Request
Content-Type: application/json
```

```json
{
  "message": "输入数据验证失败",
  "errors": [
    "词条名称不能为空"
  ]
}
```

## 2. 获取所有词条

### 请求

```http
GET /api/entries HTTP/1.1
Host: localhost:3000
```

### 成功响应

```http
HTTP/1.1 200 OK
Content-Type: application/json
```

```json
[
  {
    "id": 1,
    "name": "人工智能",
    "explanation": "人工智能是计算机科学的一个分支，致力于创建能够执行通常需要人类智能的任务的机器。",
    "tags": "科技,计算机,未来",
    "year": 1956,
    "created_at": "2023-05-01T10:00:00.000Z",
    "updated_at": "2023-05-01T10:00:00.000Z"
  },
  {
    "id": 2,
    "name": "区块链",
    "explanation": "区块链是一种分布式数据库技术，它通过加密算法保证数据不可篡改。",
    "tags": "科技,金融,加密",
    "year": 2008,
    "created_at": "2023-05-01T11:00:00.000Z",
    "updated_at": "2023-05-01T11:00:00.000Z"
  }
]
```

## 3. 根据 ID 获取词条

### 请求

```http
GET /api/entries/1 HTTP/1.1
Host: localhost:3000
```

### 成功响应

```http
HTTP/1.1 200 OK
Content-Type: application/json
```

```json
{
  "id": 1,
  "name": "人工智能",
  "explanation": "人工智能是计算机科学的一个分支，致力于创建能够执行通常需要人类智能的任务的机器。",
  "tags": "科技,计算机,未来",
  "year": 1956,
  "created_at": "2023-05-01T10:00:00.000Z",
  "updated_at": "2023-05-01T10:00:00.000Z"
}
```

### 词条不存在响应

```http
HTTP/1.1 404 Not Found
Content-Type: application/json
```

```json
{
  "message": "未找到ID为 1 的词条"
}
```

## 4. 更新词条

### 请求

```http
PUT /api/entries/1 HTTP/1.1
Host: localhost:3000
Content-Type: application/json
```

#### 请求体

```json
{
  "name": "人工智能(AI)",
  "explanation": "人工智能是计算机科学的一个分支，致力于创建能够执行通常需要人类智能的任务的机器。",
  "tags": "科技,计算机,未来,AI",
  "year": 1956
}
```

### 成功响应

```http
HTTP/1.1 200 OK
Content-Type: application/json
```

```json
{
  "id": 1,
  "name": "人工智能(AI)",
  "explanation": "人工智能是计算机科学的一个分支，致力于创建能够执行通常需要人类智能的任务的机器。",
  "tags": "科技,计算机,未来,AI",
  "year": 1956
}
```

### 词条不存在响应

```http
HTTP/1.1 404 Not Found
Content-Type: application/json
```

```json
{
  "message": "未找到ID为 1 的词条"
}
```

## 5. 删除词条

### 请求

```http
DELETE /api/entries/1 HTTP/1.1
Host: localhost:3000
```

### 成功响应

```http
HTTP/1.1 200 OK
Content-Type: application/json
```

```json
{
  "message": "词条删除成功"
}
```

### 词条不存在响应

```http
HTTP/1.1 404 Not Found
Content-Type: application/json
```

```json
{
  "message": "未找到ID为 1 的词条"
}
```

## 6. 搜索词条

### 请求

```http
GET /api/entries/search?q=人工智能 HTTP/1.1
Host: localhost:3000
```

### 成功响应

```http
HTTP/1.1 200 OK
Content-Type: application/json
```

```json
[
  {
    "id": 1,
    "name": "人工智能",
    "explanation": "人工智能是计算机科学的一个分支，致力于创建能够执行通常需要人类智能的任务的机器。",
    "tags": "科技,计算机,未来",
    "year": 1956,
    "created_at": "2023-05-01T10:00:00.000Z",
    "updated_at": "2023-05-01T10:00:00.000Z"
  }
]
```

### 无匹配结果响应

```http
HTTP/1.1 200 OK
Content-Type: application/json
```

```json
[]
```

### 缺少查询参数响应

```http
HTTP/1.1 400 Bad Request
Content-Type: application/json
```

```json
{
  "message": "请提供搜索关键词"
}
```

## 错误响应格式

对于服务器内部错误，API 将返回以下格式的响应：

```http
HTTP/1.1 500 Internal Server Error
Content-Type: application/json
```

```json
{
  "message": "服务器内部错误",
  "error": "具体的错误信息"
}
```

## 字段说明

| 字段名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| name | string | 是 | 词条名称 |
| explanation | text | 是 | 词条解释 |
| tags | string | 否 | 词条标签，多个标签用逗号分隔 |
| year | integer | 否 | 词条年份 |

## 时间戳字段

所有记录都包含以下时间戳字段：

- `created_at`: 记录创建时间
- `updated_at`: 记录最后更新时间