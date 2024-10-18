import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faChartLine, faCog,faTasks } from '@fortawesome/free-solid-svg-icons';
import '../sidebar/side.css';
import { faFile } from '@fortawesome/free-solid-svg-icons/faFile';
import {Link} from 'react-router-dom';
function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">CRM</div>
      <nav>
        <Link to ="/" className="menu-item"><FontAwesomeIcon icon={faHome} /><span>لوحة القيادة</span></Link>
        <Link to = "/clients" className="menu-item"><FontAwesomeIcon icon={faUser} /><span>العملاء</span></Link>
        <Link to = "/tasks" className="menu-item"><FontAwesomeIcon icon={faTasks} /><span>المهام</span></Link>
        <Link to = "/sales" className="menu-item"><FontAwesomeIcon icon={faChartLine} /><span>المبيعات</span></Link>
        <Link to = "/settings" className="menu-item"><FontAwesomeIcon icon={faCog} /><span>الإعدادات</span></Link>
      </nav>
    </aside>
  );
}

export default Sidebar;

