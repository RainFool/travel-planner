import React from 'react';
import { Star, Clock, Users, DollarSign } from 'lucide-react';

const TravelOverview: React.FC = () => {
  return (
    <div className="section">
      <h2>🌟 旅行概览</h2>
      <div className="grid">
        <div className="card">
          <Star size={24} style={{ marginBottom: '10px', color: '#ffd700' }} />
          <h4>行程亮点</h4>
          <p>体验豪华邮轮生活，感受海上日出日落</p>
          <p>探索日本鹿儿岛的自然风光和温泉文化</p>
          <p>享受邮轮上的美食、娱乐和休闲设施</p>
        </div>
        <div className="card">
          <Clock size={24} style={{ marginBottom: '10px', color: '#ffd700' }} />
          <h4>最佳时间</h4>
          <p>春季（3-5月）：樱花盛开，气候宜人</p>
          <p>秋季（9-11月）：红叶美景，天气清爽</p>
          <p>避开台风季节（7-9月）</p>
        </div>
        <div className="card">
          <Users size={24} style={{ marginBottom: '10px', color: '#ffd700' }} />
          <h4>适合人群</h4>
          <p>家庭出游：亲子互动，老人休闲</p>
          <p>情侣度假：浪漫海上时光</p>
          <p>朋友聚会：邮轮派对，欢乐无限</p>
        </div>
        <div className="card">
          <DollarSign size={24} style={{ marginBottom: '10px', color: '#ffd700' }} />
          <h4>预算参考</h4>
          <p>邮轮费用：¥3000-8000/人</p>
          <p>岸上观光：¥500-1000/人</p>
          <p>购物消费：¥1000-3000/人</p>
        </div>
      </div>
    </div>
  );
};

export default TravelOverview;
