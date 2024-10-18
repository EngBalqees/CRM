import React from 'react';
import './cards.css';

const KPICards = () => {
    return (
        <div className="kpi-cards">
          <div className="kpi-card">
            <h3>توقعي</h3>
            <div className="kpi-value">4.25M$</div>
            <div className="kpi-remaining">
              <span>الهدف: 4.0M$</span> | <span>المتبقي: 3.45M$</span>
            </div>
          </div>
    
          <div className="kpi-card">
            <h3>الفرص المفتوحة</h3>
            <div className="kpi-value">11M$</div>
            <div className="kpi-subvalue">إجمالي الخسائر: 1.8M$</div>
          </div>
    
          <div className="kpi-card">
            <h3>فرصي المفتوحة حسب نسبة الفوز</h3>
            <div className="kpi-value">72%</div>
            
            {/* إضافة رسم بياني دائري */}
            <div className="kpi-circle">
              <div className="circle-background">
                <div className="circle-overlay"></div>
              </div>
            </div>
    
            <div className="kpi-chart">
              <span>مرتفع (70-100%)</span> 
              <span>متوسط (30-69%)</span> 
              <span>منخفض (0-29%)</span>
            </div>
          </div>
        </div>
      );
};

export default KPICards;
