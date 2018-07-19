import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React: </h1>
          <h2>Project #4, component life cycle</h2>
        </header>
        <Body/>
      </div>
    );
  }
}

class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      randomNumber: 10
    };
    this.getRandomNumber = this.getRandomNumber.bind(this);
  }

  render() {
    return (
      <div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.getRandomNumber}>Random Number</button>
        <RandomNumbers myNumber={this.state.randomNumber}/>
      </div>
    );
  }

  getRandomNumber() {
    this.setState({randomNumber: Math.floor(Math.random() * 10)});

    console.log("Random number called ");
  }
}

class RandomNumbers extends Component {
  componentWillMount() {
    console.log("Component is about to be mounted...");
  }

  componentWillUnmount() {
    console.log("Component is about to be un mounted...");
  }

  componentDidMount() {
    console.log("Component did mount...");
  }


  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return true;
    // return super.shouldComponentUpdate(nextProps, nextState, nextContext);
  }

  componentWillReceiveProps(newProps) {
    console.log("Componnet receive prop called");
  }

  render() {
    return (
      <div>
        <br/>
        {this.props.myNumber}
      </div>
    );
  }
}


export default App;
