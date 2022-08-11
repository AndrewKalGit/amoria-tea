import Nav from './Components/Nav';
import './App.css';
import Anc from './Components/Anc';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ItemMenus from './Components/ItemMenus';
import Statement from './Components/Statement';
import StatementHeading from './Components/StatementHeading';
import About from './Components/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DecorationBanner from './Components/DecorationBanner';
import Menu from './SiteImg/LargeMenu.png'

function App() {
//ToDo: Ctrl Shift F 
//General Task List:
//Make Components files readable and organized 
//Organize Pictures 
//Vist us Component
//Clean rendering for images 
//Make smaller Menu so that it has white borders

  return (
    <div>
      <Anc></Anc>
      <BrowserRouter>
      <Header></Header>
      <Nav></Nav>
      <div class="flex justify-center">
      <img class="w-8/12 mt-12 mb-12" src={Menu} alt="Menu"/>
      </div>
      <Routes>
      <Route path="/" element={ <DecorationBanner/>}></Route>
      <Route path="/menu" element={<ItemMenus/>}></Route> 
      <Route path="/about" element={<><Statement/><About/></>}></Route>
      </Routes>
       <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
