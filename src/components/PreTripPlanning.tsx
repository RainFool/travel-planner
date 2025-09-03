import React from 'react';
import { CheckCircle, AlertCircle, Info, FileText } from 'lucide-react';

const PreTripPlanning: React.FC = () => {
  return (
    <div className="section">
      <h2>📋 行程前计划</h2>
      <div className="compact-card">
        <div className="planning-item">
          <div className="item-header">
            <CheckCircle size={20} style={{ color: '#4ade80' }} />
            <h4>证件准备</h4>
          </div>
          <div className="item-content">
            <span>✅ 有效护照（6个月以上有效期）</span>
            <span>✅ 日本签证（如需要）</span>
            <span>✅ 邮轮登船凭证</span>
            <span>✅ 旅行保险证明</span>
          </div>
        </div>
        
        <div className="planning-item">
          <div className="item-header">
            <AlertCircle size={20} style={{ color: '#fbbf24' }} />
            <h4>重要提醒</h4>
          </div>
          <div className="item-content">
            <span>⚠️ 提前3小时到达港口办理登船手续</span>
            <span>⚠️ 禁止携带违禁品（刀具、易燃物等）</span>
            <span>⚠️ 准备晕船药和常用药品</span>
            <span>⚠️ 确认邮轮WiFi套餐和通讯方式</span>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default PreTripPlanning;

