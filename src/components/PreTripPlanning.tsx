import React, { useState } from 'react';
import { CheckCircle, AlertCircle, Info, FileText, X } from 'lucide-react';
import preTripData from '../data/preTripPlanning.json';
import prohibitedItemsData from '../data/prohibitedItems.json';

// 类型定义
interface PreTripItem {
  icon: string;
  text: string;
  link?: string;
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

interface ProhibitedItem {
  icon: string;
  text: string;
}

interface ProhibitedSection {
  id: string;
  title: string;
  icon: string;
  iconColor: string;
  items: ProhibitedItem[];
}

interface ProhibitedData {
  title: string;
  description: string;
  sections: ProhibitedSection[];
}

const PreTripPlanning: React.FC = () => {
  const [showProhibitedModal, setShowProhibitedModal] = useState(false);
  
  // 图标映射
  const iconMap = {
    CheckCircle: CheckCircle,
    AlertCircle: AlertCircle,
    Info: Info,
    FileText: FileText
  };

  const data = preTripData as PreTripData;
  const prohibitedData = prohibitedItemsData as ProhibitedData;

  const handleItemClick = (item: PreTripItem) => {
    if (item.link === 'prohibited-items') {
      setShowProhibitedModal(true);
    }
  };

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
                  <span 
                    key={index} 
                    className={item.link ? 'clickable-item' : ''}
                    onClick={() => handleItemClick(item)}
                  >
                    {item.icon} {item.text}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* 禁带物品模态框 */}
      {showProhibitedModal && (
        <div className="modal-overlay" onClick={() => setShowProhibitedModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{prohibitedData.title}</h3>
              <button 
                className="modal-close"
                onClick={() => setShowProhibitedModal(false)}
              >
                <X size={24} />
              </button>
            </div>
            <div className="modal-body">
              <p className="modal-description">{prohibitedData.description}</p>
              {prohibitedData.sections.map((section: ProhibitedSection) => (
                <div key={section.id} className="prohibited-section">
                  <h4>{section.title}</h4>
                  <div className="prohibited-items">
                    {section.items.map((item: ProhibitedItem, index: number) => (
                      <div key={index} className="prohibited-item">
                        <span className="item-icon">{item.icon}</span>
                        <span className="item-text">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PreTripPlanning;


