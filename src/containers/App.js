import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';


class App extends Component {
//Considered a smart component because it has state

  //An object that declares the state
  constructor() {
    //Calls the constructor
    super()
    //An object that describes your application, that can change and affect your app - lives in the parent component
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users}));
  }


  onSearchChange = (event) => {
    //sets the state within this object by assigning it values
    this.setState({ searchfield: event.target.value})
  }

    render () {

      const { robots, searchfield } = this.state;

      const filteredRobots = robots.filter(robot => {
        //only return the robots whose names match the search field
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
      })

      return !robots.length ?
        <h1>Loading...</h1> :
        (
          <div className='tc'>
            <h1 className='f1'>Robofriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
              <ErrorBoundary>
                <Cardlist robots={filteredRobots}/>
              </ErrorBoundary>
            </Scroll>
          </div>
        );
    }
}

export default App;
