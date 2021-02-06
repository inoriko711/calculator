// class componentは、stateを持つことのできるcomponentです。
// event handler を定義したり、他のcomponentにpropsとして情報を渡したりできる高機能なcomponentです。

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Title from './components/Title/Title'


class App extends Component {

  state = { result: '0' }

  onclickHandler = () => {

    let nextVersion = parseInt(this.state.result, 10) + 1

    this.setState({ result: nextVersion.toFixed(1) })// 小数点の桁数を指定
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <Title
          titleStyle={{ color: 'orange' }}
          onClick={this.onclickHandler}
        >
          超絶怒涛の電卓
          </Title>
        <div>
          <input type="button" value="7" onclick="edit(this)" />
          <input type="button" value="8" onclick="edit(this)" />
          <input type="button" value="9" onclick="edit(this)" />
          <input type="button" value="/" onclick="edit(this)" />
        </div>
        <div>
          <input type="button" value="4" onclick="edit(this)" />
          <input type="button" value="5" onclick="edit(this)" />
          <input type="button" value="6" onclick="edit(this)" />
          <input type="button" value="-" onclick="edit(this)" />
        </div>
        <div>
          <input type="button" value="1" onclick="edit(this)" />
          <input type="button" value="2" onclick="edit(this)" />
          <input type="button" value="3" onclick="edit(this)" />
          <input type="button" value="+" onclick="edit(this)" />
        </div>
        <div>
          <input type="button" value="0" onclick="edit(this)" />
          <input type="button" value="." onclick="edit(this)" />
          <input type="button" value="*" onclick="edit(this)" />
          <input type="button" value="=" onclick="calc()" />
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
