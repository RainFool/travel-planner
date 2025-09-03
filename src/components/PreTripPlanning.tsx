import React from 'react';
import { CheckCircle, AlertCircle, Info, FileText } from 'lucide-react';

const PreTripPlanning: React.FC = () => {
  return (
    <div className="section">
      <h2>📋 行程前计划</h2>
      <div className="grid">
        <div className="card">
          <CheckCircle size={24} style={{ marginBottom: '10px', color: '#4ade80' }} />
          <h4>证件准备</h4>
          <div className="list-item">
            <span className="icon">✅</span>
            <span>有效护照（6个月以上有效期）</span>
          </div>
          <div className="list-item">
            <span className="icon">✅</span>
            <span>日本签证（如需要）</span>
          </div>
          <div className="list-item">
            <span className="icon">✅</span>
            <span>邮轮登船凭证</span>
          </div>
          <div className="list-item">
            <span className="icon">✅</span>
            <span>旅行保险证明</span>
          </div>
        </div>
        
        <div className="card">
          <AlertCircle size={24} style={{ marginBottom: '10px', color: '#fbbf24' }} />
          <h4>重要提醒</h4>
          <div className="list-item">
            <span className="icon">⚠️</span>
            <span>提前3小时到达港口办理登船手续</span>
          </div>
          <div className="list-item">
            <span className="icon">⚠️</span>
            <span>禁止携带违禁品（刀具、易燃物等）</span>
          </div>
          <div className="list-item">
            <span className="icon">⚠️</span>
            <span>准备晕船药和常用药品</span>
          </div>
          <div className="list-item">
            <span className="icon">⚠️</span>
            <span>确认邮轮WiFi套餐和通讯方式</span>
          </div>
        </div>
        
        <div className="card">
          <Info size={24} style={{ marginBottom: '10px', color: '#60a5fa' }} />
          <h4>预订信息</h4>
          <div className="list-item">
            <span className="icon">📅</span>
            <span>邮轮公司：皇家加勒比国际邮轮</span>
          </div>
          <div className="list-item">
            <span className="icon">🚢</span>
            <span>邮轮名称：海洋量子号</span>
          </div>
          <div className="list-item">
            <span className="icon">🏠</span>
            <span>舱房类型：海景阳台房</span>
          </div>
          <div className="list-item">
            <span className="icon">🍽️</span>
            <span>餐饮套餐：全包式餐饮</span>
          </div>
        </div>
        
        <div className="card">
          <FileText size={24} style={{ marginBottom: '10px', color: '#a78bfa' }} />
          <h4>行程安排</h4>
          <div className="list-item">
            <span className="icon">📝</span>
            <span>Day 1: 上海登船，海上航行</span>
          </div>
          <div className="list-item">
            <span className="icon">📝</span>
            <span>Day 2: 海上航行，邮轮活动</span>
          </div>
          <div className="list-item">
            <span className="icon">📝</span>
            <span>Day 3: 鹿儿岛岸上观光</span>
          </div>
          <div className="list-item">
            <span className="icon">📝</span>
            <span>Day 4: 海上航行，返程</span>
          </div>
          <div className="list-item">
            <span className="icon">📝</span>
            <span>Day 5: 上海下船</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreTripPlanning;
