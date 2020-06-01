import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
      this.state = {
        friends: [],
        picture: '',
        name: ''
      }
  }

  updatePicture(value) {
    console.log(value)
    this.setState({
      picture: value
    })
  }

  updateName(value) {
    console.log(value)
    this.setState({
      name: value
    })
  }

  addFriend() {
    const {friends, picture, name} = this.state;
    
    let newFriends = friends.slice();
    newFriends.push({picture, name});
    this.setState({
      friends: newFriends,
      picture: '',
      name: ''
    })
  }

  render() {
    const friends = this.state.friends.map(friend => {
      return (
        <div key={friend.name}>
          <span>{friend.name}</span>
          <img src={friend.picture}></img>
        </div>
      )
    })
    let {name, picture} = this.state
    return (
      <div className="App">
        <label>Picture:<input type="url" onChange={(e) => this.updatePicture(e.target.value)} value={picture}></input></label>
        <label>Name:<input type="text" onChange={(e) => this.updateName(e.target.value)} value={name}></input></label>
        <button onClick={() => this.addFriend(this.state.picture, this.state.friend)}>Add Friend</button>
        {friends}
      </div>
    );
  }

}

export default App;
