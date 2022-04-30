import React from 'react';

class Welcome extends React.Component {
  state = {
    name: "",
    favoritePet: "",
    rememberMe: false,
    title: 'Mr'
  };

  handleChange = (event) => {
    console.log("event.target.value")
    this.setState({name: event.target.value})
  };

  handleChangeFavoritePet = (event) => {
    this.setState({favoritePet: event.target.value});
  }

  handleCheck = (event) => {
    this.setState({rememberMe: event.target.check});
  }

  handleSelect = (event) => {
    this.setState({title: event.target.value});
  }

  handleSubmit = () => {
    console.log(this.state);
  }


  render() {
    console.log(this.state.name);
    return (
      <div>
    <input 
    value={this.state.name} 
    placeholder="enter something" 
    onChange={this.handleChange} 
    />
     <textarea 
    value={this.state.favoritePet} 
    placeholder="enter something" 
    onChange={this.handleChangeFavoritePet}
    />
    <input 
    type="checkbox" 
    checked={this.state.rememberMe}
    onChange={this.handleCheck}
    />
    <div>
      <select 
      value={this.state.title}
      onChange={this.handleSelect}
      >
        <option>Mr.</option>
        <option>Mrs</option>
        <option>Miss</option>
        <option>Ms.</option>
        </select>
      </div>
      <div>
        <button
        onClick={this.handleSubmit}
        >
        </button>
        </div>
    </div>
    )
  }
}
export default Welcome; 

//Everytime we change the state it is reflected
//Event listeners and handle change
// Basic Outlook Forms in React