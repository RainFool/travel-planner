import React from 'react';
import { Luggage, Shirt, Camera, Heart } from 'lucide-react';
import packingListData from '../data/packingList.json';

// 类型定义
interface PackingItem {
  icon: string;
  text: string;
}

interface PackingSection {
  id: string;
  title: string;
  icon: string;
  iconColor: string;
  items: PackingItem[];
}

interface PackingListData {
  title: string;
  sections: PackingSection[];
}

const PackingList: React.FC = () => {
  // 图标映射
  const iconMap: { [key: string]: React.ComponentType<any> } = {
    Shirt,
    Luggage,
    Camera,
    Heart
  };

  const data = packingListData as PackingListData;

  return (
    <div className="section">
      <h2>{data.title}</h2>
      <div className="grid">
        {data.sections.map((section) => {
          const IconComponent = iconMap[section.icon];
          return (
            <div key={section.id} className="card">
              {IconComponent && (
                <IconComponent 
                  size={24} 
                  style={{ marginBottom: '10px', color: section.iconColor }} 
                />
              )}
              <h4>{section.title}</h4>
              {section.items.map((item, index) => (
                <div key={index} className="list-item">
                  <span className="icon">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PackingList;
