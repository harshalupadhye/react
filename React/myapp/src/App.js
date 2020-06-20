import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/hello';  // default import
import {Hii} from './components/hii'; //named import
import Welcome from './components/welcome'; //class component default import
import Prep from './components/props';
import Welcomes from './components/welcomes';
import Counter from './components/counter';
import FunctionClick  from './components/FunctionClick';
import Stylesheet from './components/Stylesheets';
import Inline from './components/Inline';
import styles from './mystyle.module.css'; //importing module.css and styles is a default tag
import style from './mystyle.css'
function App() {
  return (
    <div className="App">
      {/* <Hello/>
      <Hii/>
      <Welcome name="shruti"/>
      <Prep name="pravin" training="python">
        <p>hello i am child</p>
      </Prep>
      <Welcomes/> 
      <Counter/> 
      <FunctionClick/>   */}
      <Stylesheet primary={false}/> 
      <Inline/>
      <h1 className={styles.success}>I am from class modules</h1>
      <h1 className='error'>i am regular</h1>
      
      
    </div>
  ); //<Prep name="pravin is props call"
}

export default App;
