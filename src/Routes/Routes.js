import React from 'react';
import { Route, Switch } from "react-router-dom";
import AdminAdd from '../Components/AddAdmin/AdminAdd';
import "../Css/Routes.css";
import ServicesAdd from './../Components/AddServices/ServicesAdd';
import Dashboard from './../Components/Dashboard/Dashboard';
import Login from './../Components/Login/Login';
import OrderMaintain from './../Components/OrderMaintain/OrderMaintain';

function Routes() {
    return (

        <div className="content-container">
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

    )
}

export default Routes
