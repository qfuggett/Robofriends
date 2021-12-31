import React, { Component } from 'react';
import Cardlist from './Cardlist';
import SearchBox from './SearchBox';
import { robots } from './Robots';
import './App.css';


class App extends Component {

  //An object that declares the state
  constructor() {
    //Calls the constructor
    super()
    //An object that describes your application, that can change and affect your app - lives in the parent component
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }


  onSearchChange = (event) => {
    //sets the state within this object by assigning it values
    this.setState({ searchfield: event.target.value})
  }

    render () {

      const filteredRobots = this.state.robots.filter(robot => {
        //only return the robots whose names match the search field
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
      })

      return (
        <div className='tc'>
          <h1>Robofriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Cardlist robots={filteredRobots}/>
        </div>
      );
      }
}

export default App;
