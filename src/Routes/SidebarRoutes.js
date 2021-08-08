import React from 'react';
import { Route, Switch } from "react-router-dom";
import AdminAdd from '../Components/AddAdmin/AdminAdd';
import ServicesAdd from '../Components/AddServices/ServicesAdd';
import Dashboard from '../Components/Dashboard/Dashboard';
import Login from '../Components/Login/Login';
import OrderMaintain from '../Components/OrderMaintain/OrderMaintain';
import "../Css/Routes.css";

function SidebarRoutes() {
    return (

        <div className="content-container">
            <div className="content">
            <Switch>
                <Route exact path="/">
                    <Dashboard />
                </Route>
                <Route exact path="/adminAdd">
                    <AdminAdd />
                </Route>
                <Route exact path="/serviceAdd">
                    <ServicesAdd />
                </Route>
                <Route exact path="/maintainOrder">
                    <OrderMaintain />
                </Route>

                <Route exact path="/login">
                    <Login />
                </Route>

            </Switch>
            </div>
        </div>

    )
}

export default SidebarRoutes
