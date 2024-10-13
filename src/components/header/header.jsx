import React from 'react';
import './Header.css';
import UserProfileMenu from '../../pages/userdialog/userdialog.jsx';
function Header() {
  return (
    <header className="header">
      <input type="search" placeholder="بحث عن العملاء..." className="search-input" />
      <h1>لوحة القيادة</h1>
      <div className="user-section">
        <UserProfileMenu/>
      </div>
    </header>
  );
}

export default Header;
