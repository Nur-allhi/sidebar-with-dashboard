import { createContext, useState } from "react";
import {
  BrowserRouter as Router
} from "react-router-dom";
import './App.css';
import Pages from './Pages/Pages';
import SidebarRoutes from "./Routes/SidebarRoutes";

export const UserStates = createContext()

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  console.log("🚀 ~ file: App.js ~ line 13 ~ App ~ modalOpen", modalOpen)


  return (
    <UserStates.Provider value={{ ModalState: { modalOpen, setModalOpen } }} className="App">

      <Router>
        <Pages></Pages>
        <SidebarRoutes></SidebarRoutes>
      </Router>

    </UserStates.Provider>
  );
}

export default App;
