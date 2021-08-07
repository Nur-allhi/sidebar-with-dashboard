import { createContext, useState } from "react";
import {
  BrowserRouter as Router
} from "react-router-dom";
import './App.css';
import Pages from './Pages/Pages';
import SidebarRoutes from "./Routes/SidebarRoutes";

export const UserStates = createContext()

function App() {
  const [LoggedIn, seLoggedIn] = useState(false)


  return (
    <UserStates.Provider value={{ UserLogin: { LoggedIn, seLoggedIn } }} className="App">

      <Router>
        <Pages></Pages>
        <SidebarRoutes></SidebarRoutes>
      </Router>

    </UserStates.Provider>
  );
}

export default App;
