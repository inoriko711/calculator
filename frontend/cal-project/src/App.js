// class componentは、stateを持つことのできるcomponentです。
// event handler を定義したり、他のcomponentにpropsとして情報を渡したりできる高機能なcomponentです。

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Title from './components/Title/Title'
import Result from './components/Result/Result';
import Button from './components/Button/Button';
import Operator from './components/Operator/Operator';


class App extends Component {

  state = { result: '0' }

  onclickHandler = () => {
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title
            titleStyle={{ color: 'orange' }}
            onClick={this.onclickHandler}
          >
          </Title>
        </header>

        <Result>

        </Result>
        <div>
          <Button val="7"></Button>
          <Button val="8"></Button>
          <Button val="9"></Button>
          <Operator val="/"></Operator>
        </div>
        <div>
          <Button val="4"></Button>
          <Button val="5"></Button>
          <Button val="6"></Button>
          <Operator val="-"></Operator>
        </div>
        <div>
          <Button val="1"></Button>
          <Button val="2"></Button>
          <Button val="3"></Button>
          <Operator val="+"></Operator>
        </div>
        <div>
          <Button val="0"></Button>
          <Button val="."></Button>
          <Operator val="*"></Operator>
          <Operator val="="></Operator>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div >
    )
  }
}
export default App;
