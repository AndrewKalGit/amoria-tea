import Nav from './Components/Nav';
import './App.css';
import Anc from './Components/Anc';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ItemMenus from './Components/ItemMenus';
import Statement from './Components/Statement';
import StatementHeading from './Components/StatementHeading';
import Menu from './Components/MenuComponents/Menu'
import About from './Components/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DecorationBanner from './Components/DecorationBanner';

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
      <Route path="/" element={ <Menu/>}></Route>
      <Route path="/Home" element={<DecorationBanner/>}></Route> 
      <Route path="/about" element={<><Statement/><About/></>}></Route>
      </Routes>
       <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
