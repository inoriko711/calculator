// class componentは、stateを持つことのできるcomponentです。
// event handler を定義したり、他のcomponentにpropsとして情報を渡したりできる高機能なcomponentです。

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Title from './components/Title/Title'


class App extends Component {

  state = { version: '1.0' }

  onclickHandler = () => {

    let nextVersion = parseInt(this.state.version, 10) + 1

    this.setState({ version: nextVersion.toFixed(1) })// 小数点の桁数を指定
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
            Hello World
            <span id="versionCounter" style={{ borderBottom: '1px solid orange' }}>3.0</span>
            {this.state.version}
          </Title>
        </header>
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
