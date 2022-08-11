import Nav from './Components/Nav';
import './App.css';
import Anc from './Components/Anc';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ItemMenus from './Components/ItemMenus';
import StatementChanger from './Components/HomePage/StatementChanger';
import Menu from './Components/MenuComponents/Menu'
import About from './Components/AboutComponents/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DecorationBanner from './Components/HomePage/DecorationBanner';
import Intro from './Components/HomePage/Intro';

function App() {
//ToDo: Ctrl Shift F 
//General Task List:
//Make Components files readable and organized 
//Organize Pictures 
//Vist us Component
//Clean rendering for images 
//Make smaller Menu so that it has white borders
//Relocate all the files that you don't use or need

  return (
    <div>
      <Anc></Anc>
      <BrowserRouter>
      <Header></Header>
      <Nav></Nav>
      <Routes>
      <Route path="/" element={<><DecorationBanner/><Intro/></>}></Route>
      <Route path="/Menu" element={<Menu/>}></Route> 
      <Route path="/about" element={<About/>}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
