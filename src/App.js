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

function App() {
  return (
    <div>
      {/* <Anc></Anc> */}
      <BrowserRouter>
      <Header></Header>
      <StatementHeading></StatementHeading>
      <Nav></Nav>
      <Routes>
      <Route path="/menu" element={<ItemMenus/>}></Route>
      <Route path="/about" element={<><Statement/><About/></>}></Route>
      </Routes>
       <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
