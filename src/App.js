import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      'users': [],
      'searchString': '',
    }
  }

  onSearchChange = (event) => {
    const searchString = event.target.value.toLowerCase();
    this.setState(() => {
      return {searchString}
    })
  }


  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState(
      () => {
        return {'users': users}
      }
    ))
  }

  render(){
    const { users, searchString } = this.state
    const { onSearchChange } = this
    const filteredUsers = users.filter((user) => {
      return user.name.toLowerCase().includes(searchString)
    })
    return (
      <div className="App">
        <input type='search' className='search-box' placeholder='search users' onChange={onSearchChange} />
        {
          filteredUsers.map((user) => {
            return <div key={user.id}>
              <h1>{user.name}</h1>
            </div>
          })
        }
      </div>
    );
  }
}


export default App;
