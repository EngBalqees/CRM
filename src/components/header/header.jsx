import React from 'react';
import './header.css';
import UserProfileMenu from '../../pages/userdialog/userdialog.jsx';
function Header() {
  return (
    <header className="header">
      <input type="search" placeholder="بحث عن العملاء..." className="search-input" />
      <div className="user-section">
        <UserProfileMenu/>
      </div>
    </header>
  );
}

export default Header;
