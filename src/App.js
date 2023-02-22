import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  constructor(){
    super();
    this.state = {
       showModal: false, 
    }
  }
  showModalHandler(){
   this.setState({
      showModal: false
   })
  }
  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
       {this.state.showModal && <Modal show={this.state.showModal}/> }
       {this.state.showModal && <Backdrop /> }
        <button className="Button">Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
