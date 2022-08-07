import logo from './logo.svg';
import Nav from './Nav';
// import Menu from './Menu';
import './App.css';
import Anc from './Anc';
import Footer from './Footer';
import Header from './Header';
import ItemMenus from './ItemMenus';
import Statement from './Statement';

function App() {
  return (
    <div>
      {/* <Anc></Anc> */}
      <Header></Header>
      <Nav></Nav>
      <Statement></Statement>
      <ItemMenus></ItemMenus>
      {/* <Menu></Menu> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
