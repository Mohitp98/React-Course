import React, {Component} from 'react'
import './App.css';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
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
  // class method
  handleChange = (e) => {   
    this.setState({searchField: e.target.value});
  };

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
      );
    
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox 
          placeholder='search monsters'
          handleChange={this.handleChange}
        />        
        <CardList monsters={filteredMonsters}/>       
      </div>
    );  
  }
}

export default App;
