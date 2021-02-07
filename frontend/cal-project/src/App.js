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
          <Button val="7" buttonStyle={{ border: `3px solid #f2f200` }}></Button>
          <Button val="8" buttonStyle={{ border: `3px solid #ef7f00` }}></Button>
          <Button val="9" buttonStyle={{ border: `3px solid #8300db` }}></Button>
          <Operator val="/"></Operator>
        </div>
        <div>
          <Button val="4" buttonStyle={{ border: `3px solid #e78bef` }}></Button>
          <Button val="5" buttonStyle={{ border: `3px solid #7abbdb` }}></Button>
          <Button val="6" buttonStyle={{ border: `3px solid #573da5` }}></Button>
          <Operator val="-"></Operator>
        </div>
        <div>
          <Button val="1" buttonStyle={{ border: `3px solid #fbf2fc` }}></Button>
          <Button val="2" buttonStyle={{ border: `3px solid #f92500` }}></Button>
          <Button val="3" buttonStyle={{ border: `3px solid #00b545` }}></Button>
          <Operator val="+"></Operator>
        </div>
        <div>
          <Button val="0" buttonStyle={{ border: `3px solid #002c51` }}></Button>
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
