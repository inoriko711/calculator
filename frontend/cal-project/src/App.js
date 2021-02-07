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

  onClickHandler = () => {
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title
            titleStyle={{ color: 'orange' }}
            onClick={this.onclickHandler}
          />
        </header>

        <Result val="ここに結果を表示する" />
        <div>
          <Button val="7" buttonStyle="#f2f200" onClick={this.onClickHandler}></Button>
          <Button val="8" buttonStyle="#ef7f00"></Button>
          <Button val="9" buttonStyle="#8300db"></Button>
          <Operator val="/"></Operator>
        </div>
        <div>
          <Button val="4" buttonStyle="#e78bef"></Button>
          <Button val="5" buttonStyle="#7abbdb"></Button>
          <Button val="6" buttonStyle="#573da5"></Button>
          <Operator val="-"></Operator>
        </div>
        <div>
          <Button val="1" buttonStyle="#fbf2fc"></Button>
          <Button val="2" buttonStyle="#f92500"></Button>
          <Button val="3" buttonStyle="#00b545"></Button>
          <Operator val="+"></Operator>
        </div>
        <div>
          <Button val="0" buttonStyle="#002c51"></Button>
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
