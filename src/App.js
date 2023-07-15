import { Routes, Route } from 'react-router-dom';
// import "./App.css"
import Dashboard from "./Components/Dashboard";
import Products from "./Components/Products";
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import Content from './Components/Content';




function App() {
 

 

  return (
    <>
         <div className="app">
             <Navbar/>
         <div className="main">
             <Sidebar/>
         <div className="content">
             <Content/>
         </div>
             <Footer/>
         </div>
         </div> 
     
             
              
           
  
    








    </>
  );
}

export default App;

