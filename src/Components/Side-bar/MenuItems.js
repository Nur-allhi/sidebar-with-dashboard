import React from 'react';
import { NavLink } from 'react-router-dom';
import "../../Css/MenuItems.css";



function MenuItems(props) {
    const { name, to, exact, icon } = props

    return (
            <li>
                <NavLink exact={exact} className="menu-items" to={to}>
                    <div className="menu-item-icon">
                        {icon}
                    </div>
                    <span>{name}</span>
                </NavLink>
            </li>
    )
}

export default MenuItems
