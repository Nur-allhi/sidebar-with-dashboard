import {
  BrowserRouter as Router
} from "react-router-dom";
import './App.css';
import Sidebar from './Components/Side-bar/Sidebar';
import Routes from "./Routes/Routes";



function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Routes></Routes>
      </Router>

    </div>
  );
}

export default App;
