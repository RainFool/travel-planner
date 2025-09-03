# 数据文件说明

## 行李清单数据 (packingList.json)

这个文件包含了行李清单的所有数据，使用 JSON 格式进行维护。

### 数据结构

```json
{
  "title": "🧳 行李清单",
  "sections": [
    {
      "id": "clothing",
      "title": "👕 衣物类",
      "icon": "Shirt",
      "iconColor": "#fbbf24",
      "items": [
        {
          "icon": "👔",
          "text": "正装（邮轮晚宴用）"
        }
      ]
    }
  ]
}
```

### 字段说明

- `title`: 页面标题
- `sections`: 行李分类数组
  - `id`: 分类的唯一标识符
  - `title`: 分类标题
  - `icon`: 对应的 Lucide React 图标名称
  - `iconColor`: 图标颜色（十六进制）
  - `items`: 该分类下的物品列表
    - `icon`: 物品的 emoji 图标
    - `text`: 物品描述

### 如何修改

1. 编辑 `packingList.json` 文件
2. 添加、删除或修改 `sections` 中的分类
3. 在每个分类中添加、删除或修改 `items` 中的物品
4. 保存文件后，页面会自动更新

### 支持的图标

当前支持的 Lucide React 图标：
- `Shirt` - 衣物类
- `Luggage` - 日用品
- `Camera` - 电子设备
- `Heart` - 特殊物品

如需添加新图标，请：
1. 在 `PackingList.tsx` 中导入新图标
2. 在 `iconMap` 中添加映射
3. 在 JSON 文件中使用新的图标名称
