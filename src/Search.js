import React, { Component } from 'react'

class Search extends Component {
    constructor(props) {
      super(props);
      this.state = {
  
      };
    }
  
    render() {
      const { value, onChange, children } = this.props;
      return (
        <form>
          {children} <input 
            type="text"
            value={value}
            onChange={onChange} 
          />
        </form>
      )
    }
  }

  export default Search;