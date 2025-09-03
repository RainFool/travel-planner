import React from 'react';
import { CheckCircle, AlertCircle, Info, FileText } from 'lucide-react';
import preTripData from '../data/preTripPlanning.json';

// 类型定义
interface PreTripItem {
  icon: string;
  text: string;
}

interface PreTripSection {
  id: string;
  title: string;
  icon: string;
  iconColor: string;
  items: PreTripItem[];
}

interface PreTripData {
  title: string;
  sections: PreTripSection[];
}

const PreTripPlanning: React.FC = () => {
  // 图标映射
  const iconMap = {
    CheckCircle: CheckCircle,
    AlertCircle: AlertCircle,
    Info: Info,
    FileText: FileText
  };

  const data = preTripData as PreTripData;

  return (
    <div className="section">
      <h2>{data.title}</h2>
      <div className="compact-card">
        {data.sections.map((section: PreTripSection) => {
          const IconComponent = iconMap[section.icon as keyof typeof iconMap];
          
          return (
            <div key={section.id} className="planning-item">
              <div className="item-header">
                <IconComponent size={20} style={{ color: section.iconColor }} />
                <h4>{section.title}</h4>
              </div>
              <div className="item-content">
                {section.items.map((item: PreTripItem, index: number) => (
                  <span key={index}>{item.icon} {item.text}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PreTripPlanning;


