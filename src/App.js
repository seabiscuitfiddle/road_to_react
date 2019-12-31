import React, { Component } from 'react';
import logo from './logo.svg';
import Table from './Table.js'
import Search from './Search.js'
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
      <div className="page">
        <div className="interactions">
        <Search 
          value={searchTerm}
          onChange={this.onSearchChange}
        />
          Search
        <Table 
          list={list}
          pattern={searchTerm}
          onDismiss={this.onDismiss}
        />
        </div>
      </div>);
  };
}

export default App;
