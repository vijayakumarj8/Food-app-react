import './App.css';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Homeabout from './Components/Home/Homeabout';
import Homecontact from './Components/Home/Homecontact';
import Homehero from './Components/Home/Homehero';
import Homemenu from './Components/Home/Homemenu';
import { Route,Routes } from 'react-router-dom';
import Menu from './Components/Menu/Menu';
import Booktable from './Components/Booktable/Booktable';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/menu' element ={<Menu/>}/>
        <Route path='/Book' element={<Booktable/>}/>
      </Routes>
      <Footer/>
     
     
    </div>
  

    
  );
}

export default App;
