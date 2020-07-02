import React from 'react';
import './App.css';

import LandingPage from './Components/Pages/LandingPage/LandingPage';

function App() {
  
  const ChangePage = (index) => {
    console.log(index);
  }

  return (
    <div className="App">
      <LandingPage ChangePage={ChangePage}/>
    </div>
  );
}

export default App;
