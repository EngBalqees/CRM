import React from 'react';
import './welcome.css';
import CalendarSection from '../../components/calender/calender.jsx';
import ChartComponent from '../../components/chart/chart.jsx';
function MainSection() {
  return (
    <div className="dashboard">
      <div className="stats-card total-contacts">
        <h3>مجموع جهات الاتصال</h3>
        <p>150</p>
      </div>
      <div className="stats-card active-deals">
        <h3>صفقات قائمة</h3>
        <p>30</p>
      </div>
      <div className="stats-card tasks-due">
        <h3>مهام خلال اليوم</h3>
        <p>5</p>
      </div>
      <div className="stats-card new-leads">
        <h3>صفقات جديدة</h3>
        <p>10</p>
      </div>
      <div className="stats-card upcoming-appointments">
        <h3>لقاءات قادمة</h3>
        <p>12</p>
      </div>
      
      <div className="stats-card customer-feedback">
        <h3>Customer Feedback</h3>
        <p>95%</p>
      </div>
      <div className="stats-card sales-targets">
        <h3>نسبة المبيعات</h3>
        <p>80%</p>
      </div>
      <CalendarSection />
      <ChartComponent />
    </div>
  );
}

export default MainSection;

