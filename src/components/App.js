import '../App.css';
import React from 'react';
import Header from './Header';
import TapControl from './TapControl';


function App() {
  return (
    <React.Fragment>
      <div className="text-center" style={{backgroundColor: '#5d3954'}}>
        <Header />
      </div>
      <div className="container mb-5">
        <div className="text-center">
          <TapControl />
        </div>
      </div>
    </React.Fragment>
    
  );
}

export default App;