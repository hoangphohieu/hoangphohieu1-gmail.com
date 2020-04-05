import React, { Component } from 'react';
import './App.css';
import InputExcelContainer from './containers/InputExcelContainer';
import AboutMe from './components/AboutMe';





class App extends Component {

  componentWillMount() {
    // if (JSON.parse(localStorage.getItem("PCFail")) === null) {
    //   localStorage.setItem("PCFail", JSON.stringify([]));
    // }
    localStorage.setItem("PCFail", JSON.stringify([]));
    localStorage.setItem("PCProperties", JSON.stringify([]));
  }

  render() {



    return (
      <React.Fragment>
        <p className="lm-gl">LM, GL</p>
        <InputExcelContainer />
        <AboutMe />
      </React.Fragment>
    );
  }
}
export default App;
