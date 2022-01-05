import React, { useState, useEffect } from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';


function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');

  const onSearchChange = (event) => {
    //sets the state within this object by assigning it values
    setSearchfield(event.target.value)
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {setRobots(users)});
  },[]) //only run useEffect when this value changes; acts similarly to componentDidMount if empty

  const filteredRobots = robots.filter(robot => {
    //only return the robots whose names match the search field
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  })

  return !robots.length ?
    <h1>Loading...</h1> :
    (
      <div className='tc'>
        <h1 className='f1'>Robofriends</h1>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          <ErrorBoundary>
            <Cardlist robots={filteredRobots}/>
          </ErrorBoundary>
        </Scroll>
      </div>
    );  
}

export default App;
