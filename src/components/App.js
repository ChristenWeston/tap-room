import '../App.css';
import React from 'react';
import Header from './Header';
import TapControl from './TapControl';
import "bootswatch/dist/quartz/bootstrap.min.css"


function App() {
  return (
    <React.Fragment>
      <div className="text-center">
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