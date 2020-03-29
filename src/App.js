import React from 'react';
import './App.css';
import InputExcelContainer from './containers/InputExcelContainer';
import AboutMe from './components/AboutMe';


function App() {
  return (
    <React.Fragment>
      <p className="lm-gl">LM, GL</p>
      <InputExcelContainer />
      <AboutMe />
    </React.Fragment>
  );
}

export default App;
