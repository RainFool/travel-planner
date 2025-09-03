import React from 'react';
import { AlertTriangle, Info, Shield, Clock } from 'lucide-react';

const TravelNotes: React.FC = () => {
  return (
    <div className="section">
      <h2>⚠️ 旅行注意事项</h2>
      <div className="grid">
        <div className="card">
          <AlertTriangle size={24} style={{ marginBottom: '10px', color: '#f87171' }} />
          <h4>🚨 安全提醒</h4>
          <div className="list-item">
            <span className="icon">🔒</span>
            <span>贵重物品请存放在房间保险箱内</span>
          </div>
          <div className="list-item">
            <span className="icon">🚪</span>
            <span>离开房间时请锁好房门</span>
          </div>
          <div className="list-item">
            <span className="icon">📱</span>
            <span>保持手机畅通，记录紧急联系方式</span>
          </div>
          <div className="list-item">
            <span className="icon">🚨</span>
            <span>熟悉邮轮安全设施和逃生路线</span>
          </div>
          <div className="list-item">
            <span className="icon">💳</span>
            <span>信用卡信息请妥善保管</span>
          </div>
        </div>
        
        <div className="card">
          <Info size={24} style={{ marginBottom: '10px', color: '#60a5fa' }} />
          <h4>ℹ️ 邮轮须知</h4>
          <div className="list-item">
            <span className="icon">⏰</span>
            <span>严格遵守邮轮时间安排</span>
          </div>
          <div className="list-item">
            <span className="icon">🍽️</span>
            <span>餐厅用餐需要提前预约</span>
          </div>
          <div className="list-item">
            <span className="icon">🎭</span>
            <span>演出和活动需要提前排队</span>
          </div>
          <div className="list-item">
            <span className="icon">🏊</span>
            <span>泳池使用请遵守安全规定</span>
          </div>
          <div className="list-item">
            <span className="icon">🚭</span>
            <span>吸烟请到指定区域</span>
          </div>
        </div>
        
        <div className="card">
          <Shield size={24} style={{ marginBottom: '10px', color: '#4ade80' }} />
          <h4>🛡️ 健康防护</h4>
          <div className="list-item">
            <span className="icon">🧼</span>
            <span>勤洗手，保持个人卫生</span>
          </div>
          <div className="list-item">
            <span className="icon">😷</span>
            <span>公共场所建议佩戴口罩</span>
          </div>
          <div className="list-item">
            <span className="icon">💊</span>
            <span>准备常用药品和急救用品</span>
          </div>
          <div className="list-item">
            <span className="icon">🏥</span>
            <span>了解邮轮医疗设施位置</span>
          </div>
          <div className="list-item">
            <span className="icon">🌡️</span>
            <span>注意体温变化，如有不适及时就医</span>
          </div>
        </div>
        
        <div className="card">
          <Clock size={24} style={{ marginBottom: '10px', color: '#fbbf24' }} />
          <h4>⏰ 时间管理</h4>
          <div className="list-item">
            <span className="icon">🌅</span>
            <span>调整作息，适应邮轮生活节奏</span>
          </div>
          <div className="list-item">
            <span className="icon">📅</span>
            <span>合理安排活动，避免过度疲劳</span>
          </div>
          <div className="list-item">
            <span className="icon">⏰</span>
            <span>注意时差变化（如适用）</span>
          </div>
          <div className="list-item">
            <span className="icon">🎯</span>
            <span>预留充足时间办理登船手续</span>
          </div>
          <div className="list-item">
            <span className="icon">🚢</span>
            <span>岸上观光请准时返回邮轮</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelNotes;
