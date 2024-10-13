import React, { useState } from "react";
import '../userdialog/userdialog.css';

function UserProfileMenu() {
    const [showMenu, setShowMenu] = useState(false);
    const userName = "اسم المتسخدم";

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="user-profile">
            <img src="avatar.png"
                alt="User"
                className="user-avatar"
                onClick={toggleMenu} />
            {showMenu && (
                <div className="menu">
                    <img src="avatar.png"
                        alt="User"
                        className="user-menu" />
                    <p className="user-name">{userName}</p>
                    <button className="menu-item1">عرض الصفحة الشخصية</button>
                    <button className="menu-item1">تسجيل الخروج</button>
                </div>
            )}
        </div>
    )
}
export default UserProfileMenu;