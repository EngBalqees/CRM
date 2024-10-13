import React from 'react';
import './welcome.css';
import CalendarSection from '../../components/calender/calender.jsx';
function MainSection() {
  return (
    <main className="main-section">
      <div className="info-cards">
        <div className="info-card">
          <h3>عملاء جدد</h3>
          <p>25</p>
        </div>
        <div className="info-card">
          <h3>اجتماعات مجدولة</h3>
          <p>5</p>
        </div>
        <div className="info-card">
          <h3>المهام المكتملة</h3>
          <p>18</p>
        </div>
      </div>
      <div className="chart-section">
      <CalendarSection />
      </div>
      <div className="tasks-section">
        <h3>المهام اليومية</h3>
        <ul>
          <li>مراجعة طلب عميل جديد</li>
          <li>اجتماع مع فريق المبيعات</li>
          <li>تحديث قاعدة بيانات العملاء</li>
        </ul>
      </div>
    </main>
  );
}

export default MainSection;

