import React from 'react';
import './App.css';
import Item from './components/Item';
import {connect} from 'react-redux';
import {addItem} from './ducks/listReducer';

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      list: [],
      userInput: ''
    }
  }

  handleRefreshList = () => {
    this.setState({
      list: this.props.list
    })
  }



  componentDidMount(){
    this.handleRefreshList()
  }

  componentDidUpdate(prevProps){
    if(prevProps !== this.props){
      this.handleRefreshList()
    }
  }

  

  handleAddItem = (item) => {
    this.props.addItem(item)
    this.handleRefreshList()
  }

  handleSaveInput = (val) =>{
    this.setState({userInput: val})
  }
  
  render(){
    console.log(this.props)
    // console.log(this.state)
    return (
      <div className="App">
        <input onChange={e => this.handleSaveInput(e.target.value)}/>
        <button onClick={() => this.handleAddItem(this.state.userInput)}>Add Item</button>
        {this.state.list.map(e => {
          return <Item item={e}/>
        })}
        
      </div>
    );
  }
}

const mapStateToProps = (duckState) => {
  return {
    list: duckState.list
  }
}

export default connect(mapStateToProps, {addItem}) (App);
