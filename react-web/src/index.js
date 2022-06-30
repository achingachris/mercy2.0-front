import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import About from './components/About';
import Guide from './components/Guide';
import Support from './components/Support';
import Model from './components/Model';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Routes>
          <Route exact path="/" element={<App/>}></Route>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/guide" element={<Guide/>}></Route>
          <Route exact path="/support" element={<Support/>}></Route>
          <Route exact path="/model" element={<Model/>}></Route>
        </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
