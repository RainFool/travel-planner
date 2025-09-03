import React from 'react';
import { Luggage, Shirt, Camera, Heart } from 'lucide-react';

const PackingList: React.FC = () => {
  return (
    <div className="section">
      <h2>🧳 行李清单</h2>
      <div className="grid">
        <div className="card">
          <Shirt size={24} style={{ marginBottom: '10px', color: '#fbbf24' }} />
          <h4>👕 衣物类</h4>
          <div className="list-item">
            <span className="icon">👔</span>
            <span>正装（邮轮晚宴用）</span>
          </div>
          <div className="list-item">
            <span className="icon">👕</span>
            <span>休闲装（日常穿着）</span>
          </div>
          <div className="list-item">
            <span className="icon">👖</span>
            <span>牛仔裤/休闲裤</span>
          </div>
          <div className="list-item">
            <span className="icon">👗</span>
            <span>泳装（邮轮泳池用）</span>
          </div>
          <div className="list-item">
            <span className="icon">🧥</span>
            <span>外套（海上可能较凉）</span>
          </div>
          <div className="list-item">
            <span className="icon">👟</span>
            <span>舒适鞋子（步行用）</span>
          </div>
        </div>
        
        <div className="card">
          <Luggage size={24} style={{ marginBottom: '10px', color: '#60a5fa' }} />
          <h4>🛍️ 日用品</h4>
          <div className="list-item">
            <span className="icon">🧴</span>
            <span>洗漱用品（牙刷、牙膏、洗面奶）</span>
          </div>
          <div className="list-item">
            <span className="icon">🧴</span>
            <span>护肤品（防晒霜、保湿霜）</span>
          </div>
          <div className="list-item">
            <span className="icon">💊</span>
            <span>常用药品（感冒药、胃药）</span>
          </div>
          <div className="list-item">
            <span className="icon">💊</span>
            <span>晕船药（重要！）</span>
          </div>
          <div className="list-item">
            <span className="icon">🔌</span>
            <span>充电器和转换插头</span>
          </div>
          <div className="list-item">
            <span className="icon">📱</span>
            <span>手机和相机</span>
          </div>
        </div>
        
        <div className="card">
          <Camera size={24} style={{ marginBottom: '10px', color: '#a78bfa' }} />
          <h4>📸 电子设备</h4>
          <div className="list-item">
            <span className="icon">📱</span>
            <span>智能手机</span>
          </div>
          <div className="list-item">
            <span className="icon">📷</span>
            <span>相机/GoPro</span>
          </div>
          <div className="list-item">
            <span className="icon">🔋</span>
            <span>充电宝</span>
          </div>
          <div className="list-item">
            <span className="icon">🎧</span>
            <span>耳机</span>
          </div>
          <div className="list-item">
            <span className="icon">💻</span>
            <span>平板电脑（可选）</span>
          </div>
          <div className="list-item">
            <span className="icon">🔌</span>
            <span>各种充电线</span>
          </div>
        </div>
        
        <div className="card">
          <Heart size={24} style={{ marginBottom: '10px', color: '#f87171' }} />
          <h4>💝 特殊物品</h4>
          <div className="list-item">
            <span className="icon">📚</span>
            <span>书籍/杂志（海上时光）</span>
          </div>
          <div className="list-item">
            <span className="icon">🎮</span>
            <span>便携游戏设备</span>
          </div>
          <div className="list-item">
            <span className="icon">🧘</span>
            <span>瑜伽垫（邮轮健身用）</span>
          </div>
          <div className="list-item">
            <span className="icon">🎵</span>
            <span>音乐播放器</span>
          </div>
          <div className="list-item">
            <span className="icon">📝</span>
            <span>旅行日记本</span>
          </div>
          <div className="list-item">
            <span className="icon">🎁</span>
            <span>小礼物（送给船员）</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackingList;
