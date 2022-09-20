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
    const filteredUsers = this.state.users.filter((user) => {
      return user.name.toLowerCase().includes(this.state.searchString)
    })
    return (
      <div className="App">
        <input type='search' className='search-box' placeholder='search users' onChange={(event) => {
          console.log({startUsersArray:this.state.users})
          const searchString = event.target.value.toLowerCase();
          this.setState(() => {
            return {searchString: searchString}
          }, 
          () => {
            console.log({endUsersArray:this.state.users})
          })
        }} />
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
