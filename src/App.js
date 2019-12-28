import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

let isSearched = (searchTerm) => {
  return (item) => item.title.toLowerCase().includes(searchTerm.toLowerCase());
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list,
      searchTerm: '',
    };
    // Not entirely sure why this is required?
    // Worked without it?
    // So, basically, this sets the context of this inside the function
    // to the instance that we're currently on.  Still not sure if this
    // is require or not (it is, but it's also possible to auto bind
    // by defining methods using delegate syntax, as it's bound local 
    // anyway
    // this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss = (objectID) => {
    const transformedList = this.state.list.filter(item => item.objectID !== objectID);
    this.setState({ list: transformedList, });
  }

  onSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  }
  // This is apparently the preferred
  /*  
    onDismiss(objectID) {
      const transformedList = this.state.list.filter(item => item.objectID != objectID);
      this.setState({ list: transformedList, })
    }
  */
  render() {
    const {searchTerm, list} = this.state;
    return (
      <div className="App">
        <form>
          <input 
            type="text"
            value={searchTerm}
            onChange={this.onSearchChange} 
          />
        </form>
      {list.filter(isSearched(searchTerm)).map(item => {
          return (
            <div key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
              <span>
                <button
                  onClick={() => this.onDismiss(item.objectID)}
                  type="button"
                >
                  Dismiss
                  </button>
              </span>
            </div>
          )
        })}
      </div>);
  };
}

export default App;
