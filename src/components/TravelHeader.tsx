import React from 'react';
import { MapPin, Calendar, Ship, Globe } from 'lucide-react';

const TravelHeader: React.FC = () => {
  return (
    <div className="section" style={{ textAlign: 'center', marginBottom: '40px' }}>
      <h1 style={{ fontSize: '3em', marginBottom: '20px', color: '#ffd700' }}>
        🚢 上海-鹿儿岛邮轮旅行计划
      </h1>
      <div className="grid" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="card">
          <MapPin size={24} style={{ marginBottom: '10px' }} />
          <h4>出发地</h4>
          <p>上海吴淞口国际邮轮港</p>
        </div>
        <div className="card">
          <Globe size={24} style={{ marginBottom: '10px' }} />
          <h4>目的地</h4>
          <p>日本鹿儿岛</p>
        </div>
        <div className="card">
          <Ship size={24} style={{ marginBottom: '10px' }} />
          <h4>交通方式</h4>
          <p>豪华邮轮</p>
        </div>
        <div className="card">
          <Calendar size={24} style={{ marginBottom: '10px' }} />
          <h4>行程时长</h4>
          <p>5天4晚</p>
        </div>
      </div>
    </div>
  );
};

export default TravelHeader;
