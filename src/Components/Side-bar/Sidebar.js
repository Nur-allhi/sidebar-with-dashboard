import React from 'react';
import { BiCollection } from 'react-icons/bi';
import { CgComponents } from 'react-icons/cg';
import { RiAdminFill, RiDashboardFill } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import userIcon from '../../assets/user.png';
import "../../Css/Sidebar.css";
import MenuItems from './MenuItems';

const menuItems = [
    { name: "Dashboard", to: "/", exact: true, icon: <RiDashboardFill /> },
    { name: "Admin-Add", to: "/adminAdd", exact: true, icon: <RiAdminFill /> },
    { name: "Service-Add", to: "/serviceAdd", exact: true, icon: <CgComponents /> },
    { name: "Maintain-Order", to: "/maintainOrder", exact: true, icon: <BiCollection /> }
]

function Sidebar() {
    return (
        <div className="sidebar-container">
            <div className="top-section">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="company-name">
                    <p>Cure Your Pc</p>
                </div>
                <div className="devider"></div>
            </div>
            
            <div className="main-menu">
                <ul>
                    {
                        menuItems.map((menuItem, index) => (
                            <MenuItems
                                key={index}
                                name={menuItem.name}
                                to={menuItem.to}
                                exact={menuItem.exact}
                                icon={menuItem.icon}
                            />
                        ))
                    }
                </ul>
            </div>
            <div className="login-section">
                <button>Login</button>
            </div>
            <div className="user-section">
                <div className="user-image">
                    <img src={userIcon} alt="UserImage" />
                </div>
                <div className="user-info">
                    <h5>Nur E Allhi</h5>
                    <p>Example@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
