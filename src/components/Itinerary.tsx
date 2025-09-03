import React from 'react';
import { MapPin, Clock, Camera, Utensils } from 'lucide-react';

const Itinerary: React.FC = () => {
  return (
    <div className="section">
      <h2>🗓️ 详细行程安排</h2>
      
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-content">
            <div className="timeline-date">Day 1 - 上海登船日</div>
            <div className="timeline-title">🚢 启航之旅</div>
            <div className="timeline-description">
              <p><strong>上午：</strong>在上海吴淞口国际邮轮港集合，办理登船手续</p>
              <p><strong>中午：</strong>登船后享用午餐，熟悉邮轮设施</p>
              <p><strong>下午：</strong>参加邮轮安全演习，探索邮轮各层甲板</p>
              <p><strong>晚上：</strong>参加欢迎晚宴，观看邮轮启航仪式</p>
            </div>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-content">
            <div className="timeline-date">Day 2 - 海上航行日</div>
            <div className="timeline-title">🌊 海上休闲时光</div>
            <div className="timeline-description">
              <p><strong>上午：</strong>甲板上看日出，享用丰盛早餐</p>
              <p><strong>中午：</strong>参加邮轮上的各种娱乐活动</p>
              <p><strong>下午：</strong>享受邮轮泳池、健身房或SPA服务</p>
              <p><strong>晚上：</strong>观看邮轮演出，享受美食</p>
            </div>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-content">
            <div className="timeline-date">Day 3 - 鹿儿岛岸上观光</div>
            <div className="timeline-title">🗾 日本鹿儿岛探索</div>
            <div className="timeline-description">
              <p><strong>上午：</strong>邮轮靠岸，办理入境手续</p>
              <p><strong>中午：</strong>参观鹿儿岛城遗址，了解历史</p>
              <p><strong>下午：</strong>游览樱岛火山，体验温泉文化</p>
              <p><strong>晚上：</strong>品尝当地美食，购买纪念品</p>
            </div>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-content">
            <div className="timeline-date">Day 4 - 返程航行日</div>
            <div className="timeline-title">🏠 归途时光</div>
            <div className="timeline-description">
              <p><strong>上午：</strong>整理行李，享受最后的邮轮时光</p>
              <p><strong>中午：</strong>参加邮轮告别活动</p>
              <p><strong>下午：</strong>观看海上日落，拍照留念</p>
              <p><strong>晚上：</strong>参加告别晚宴，与船员告别</p>
            </div>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-content">
            <div className="timeline-date">Day 5 - 上海下船日</div>
            <div className="timeline-title">👋 旅程结束</div>
            <div className="timeline-description">
              <p><strong>上午：</strong>享用早餐，办理下船手续</p>
              <p><strong>中午：</strong>下船，结束愉快的邮轮之旅</p>
              <p><strong>下午：</strong>返回温暖的家</p>
            </div>
          </div>
        </div>
      </div>
      
      <div style={{ marginTop: '40px' }}>
        <h3>📍 鹿儿岛必游景点推荐</h3>
        <div className="grid">
          <div className="card">
            <MapPin size={24} style={{ marginBottom: '10px', color: '#f87171' }} />
            <h4>🏯 鹿儿岛城遗址</h4>
            <p>了解鹿儿岛的历史文化，欣赏城市全景</p>
            <p><strong>建议游览时间：</strong>1-2小时</p>
            <p><strong>门票：</strong>免费</p>
          </div>
          
          <div className="card">
            <MapPin size={24} style={{ marginBottom: '10px', color: '#f87171' }} />
            <h4>🌋 樱岛火山</h4>
            <p>近距离观看活火山，体验大自然的震撼</p>
            <p><strong>建议游览时间：</strong>2-3小时</p>
            <p><strong>门票：</strong>免费</p>
          </div>
          
          <div className="card">
            <MapPin size={24} style={{ marginBottom: '10px', color: '#f87171' }} />
            <h4>♨️ 指宿温泉</h4>
            <p>体验日本传统温泉文化，放松身心</p>
            <p><strong>建议游览时间：</strong>2-3小时</p>
            <p><strong>费用：</strong>¥1000-2000/人</p>
          </div>
          
          <div className="card">
            <MapPin size={24} style={{ marginBottom: '10px', color: '#f87171' }} />
            <h4>🛍️ 天文馆通商店街</h4>
            <p>购买当地特产和纪念品，体验购物乐趣</p>
            <p><strong>建议游览时间：</strong>1-2小时</p>
            <p><strong>费用：</strong>根据购买物品而定</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Itinerary;
