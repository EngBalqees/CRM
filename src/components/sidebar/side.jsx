import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faChartLine, faCog } from '@fortawesome/free-solid-svg-icons';
import '../sidebar/side.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">CRM</div>
      <nav>
        <a href="#" className="menu-item"><FontAwesomeIcon icon={faHome} /><span>لوحة القيادة</span></a>
        <a href="#" className="menu-item"><FontAwesomeIcon icon={faUser} /><span>العملاء</span></a>
        <a href="#" className="menu-item"><FontAwesomeIcon icon={faChartLine} /><span>المبيعات</span></a>
        <a href="#" className="menu-item"><FontAwesomeIcon icon={faCog} /><span>الإعدادات</span></a>
      </nav>
    </aside>
  );
}

export default Sidebar;

