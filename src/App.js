import Nav from './Components/Nav';
import './App.css';
import Anc from './Components/Anc';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ItemMenus from './Components/ItemMenus';
import Statement from './Components/Statement';

function App() {
  return (
    <div>
      {/* <Anc></Anc> */}
      <Header></Header>
      <Nav></Nav>
      <Statement></Statement>
      <ItemMenus></ItemMenus>
      <Footer></Footer>
    </div>
  );
}

export default App;
