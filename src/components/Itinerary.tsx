import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Camera, Utensils } from 'lucide-react';

interface Activity {
  time: string;
  description: string;
}

interface Day {
  day: string;
  title: string;
  activities: Activity[];
}

interface Attraction {
  name: string;
  description: string;
  duration: string;
  cost: string;
}

interface ItineraryData {
  title: string;
  days: Day[];
  attractions: {
    title: string;
    list: Attraction[];
  };
}

const Itinerary: React.FC = () => {
  const [itineraryData, setItineraryData] = useState<ItineraryData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/src/data/itinerary.json');
        const data = await response.json();
        setItineraryData(data);
      } catch (error) {
        console.error('加载行程数据失败:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="section">加载中...</div>;
  }

  if (!itineraryData) {
    return <div className="section">无法加载行程数据</div>;
  }

  return (
    <div className="section">
      <h2>{itineraryData.title}</h2>
      
      <div className="timeline">
        {itineraryData.days.map((day, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-date">{day.day}</div>
              <div className="timeline-title">{day.title}</div>
              <div className="timeline-description">
                {day.activities.map((activity, activityIndex) => (
                  <p key={activityIndex}>
                    <strong>{activity.time}：</strong>{activity.description}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div style={{ marginTop: '40px' }}>
        <h3>{itineraryData.attractions.title}</h3>
        <div className="grid">
          {itineraryData.attractions.list.map((attraction, index) => (
            <div key={index} className="card">
              <MapPin size={24} style={{ marginBottom: '10px', color: '#f87171' }} />
              <h4>{attraction.name}</h4>
              <p>{attraction.description}</p>
              <p><strong>建议游览时间：</strong>{attraction.duration}</p>
              <p><strong>门票：</strong>{attraction.cost}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Itinerary;
