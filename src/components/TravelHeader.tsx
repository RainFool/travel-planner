import React from 'react';
import { MapPin, Calendar, Ship, Globe } from 'lucide-react';

const TravelHeader: React.FC = () => {
  return (
    <div className="section" style={{ textAlign: 'center', marginBottom: '20px' }}>
      <h1 style={{ fontSize: '2.5em', marginBottom: '15px', color: '#ffd700' }}>
        🚢 上海-鹿儿岛邮轮旅行计划
      </h1>
    </div>
  );
};

export default TravelHeader;
