import React from 'react';
import './App.css';
import Item from './components/Item'

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      list: ['dummy item', `it's not real things`, 'punk']
    }
  }
  
  render(){
    return (
      <div className="App">
        {this.state.list.map(e => {
          return <Item item={e}/>
        })}
        
      </div>
    );
  }
}

export default App;
