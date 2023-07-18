import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import Content from './Components/Content';




function App() {
 

 

  return (
    <>
            <Navbar/>
            <Sidebar/>
            <Content/>

         
             <Footer/>
    
    </>
  );
}

export default App;

