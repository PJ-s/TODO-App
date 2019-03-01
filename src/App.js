import React from 'react';
import TaskList from "./TaskList";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "Task number",
      elements: []
    };
  }

  handleClick = () => {

    this.setState({elements: [...this.state.elements, this.state.text]});
  };

  handleDelete = () => {

    const activeTasks = this.state.elements;

    activeTasks.pop();

    this.setState({elements: activeTasks});
  };

  handleClear = () => {

    this.setState({elements: []})
  };

  render(){

    return (
        <div className='app-container'>
          <div className ='app'>
            <button onClick={this.handleClick}>Add</button>
            <button onClick={this.handleDelete}>Remove</button>
            <button onClick={this.handleClear}>Clear</button>
            <div className='list-box'>
              <TaskList elements ={this.state.elements}/>
            </div>
          </div>
        </div>
    )
  }
}