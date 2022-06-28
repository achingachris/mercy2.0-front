// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Body from './components/Body';
import {BrowserRouter as Router} from 'react-router-dom';
import { Routes,Route } from 'react-router-dom';
import About from './components/About';
import Guide from './components/Guide';
import Support from './components/Support';
import Model from './components/Model';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path="/about" element={<About/>}></Route>
        <Route exact path="/guide" element={<Guide/>}></Route>
        <Route exact path="/support" element={<Support/>}></Route>
        <Route exact path="/model" element={<Model/>}></Route>
      </Routes>
      <Body />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer />
    </div>
  );
}

export default App;
