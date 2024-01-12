import LoginPage from "./components/loginPage/loginPage";
import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import PinPage from "./components/loginPage/pin";
import HomePage from "./components/HomePage/HomePage";
import Items from "./components/Items/Items";
import AddItem from "./components/AddItem/AddItem";
import Category from "./components/Categories/Categories";
import UpdateItem from "./components/UpdateItem/UpdateItem";
import Successful from "./components/successful/successful";
import Categories from "./components/Categories/Categories";
import CreateCategories from "./components/Categories/CreateCategories";
import UpdateCategories from "./components/Categories/UpdateCategory";


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
        <Route path="/category" element={<Categories/>}></Route>
        <Route path="/updateItem/:id" element={<UpdateItem/>} ></Route>
        <Route path="/successful" element={<Successful/>}></Route>
        <Route path="/createCategory" element={<CreateCategories/>} ></Route>
        <Route path="/updateCategory" element={<UpdateCategories/>} ></Route>
      </Routes>
    </Router>
  
   
    
  );
}

export default App;
