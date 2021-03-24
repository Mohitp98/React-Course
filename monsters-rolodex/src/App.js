import React, {Component} from 'react'

import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

import './App.css';

class App extends Component {
  constructor() {
    // constructor is running very first

    super();
    // defined state for this component
    this.state = {
      monsters: [],
      searchField: ''
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()
    .then(users => this.setState( {monsters: users} )))
  }

  onSearchChange = event => {
    this.setState({
      searchField: event.target.value
    });
  };

  render() {
    const {monsters, searchField, title} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    
    return (
      <div className="App">
        <h1>{title}</h1>
        {/* <SearchBox placeholder='search monsters' handleChange={this.handleChange}/>  */}
        <SearchBox onSearchChange={this.onSearchChange}/>        
       
        <CardList monsters={filteredMonsters}/>       
      </div>
    );  
  }
}

export default App;
