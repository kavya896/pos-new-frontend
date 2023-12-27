import LoginPage from "./components/loginPage/loginPage";
import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import PinPage from "./components/loginPage/pin";
import HomePage from "./components/HomePage/HomePage";
import Items from "./components/Items/Items";
import AddItem from "./components/AddItem/AddItem";


function App() {



  const userInfo = JSON.parse(localStorage.getItem("userInfo"))
  console.log("from app.js page",userInfo)

  return (
    
    <Router>
      {userInfo && <HomePage/>}
      <Routes>
     
        <Route path="/" element={userInfo?"":<LoginPage/>} />
        <Route path="/pin" element={userInfo?"":<PinPage/>} ></Route>
        <Route path="/dashboard" element={<HomePage/>} ></Route>
        <Route path="/addItems" element={<AddItem/>} ></Route>
        <Route path="/itemsList" element={<Items/>}></Route>
      </Routes>
    </Router>
  
   
    
  );
}

export default App;
