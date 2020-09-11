import React from 'react';

import NavBar from './components/NavBar/index'
import Footer from './components/Footer/index'
import GlobalStyles from './styles/GlobalStyles'
import Home from './pages/Home/index'

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
     <NavBar/> 
     <Home/>
     <Footer/>
    </div>
  );
}

export default App;
