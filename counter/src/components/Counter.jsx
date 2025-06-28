import { Component } from "react";

export default class Counter extends Component {
   
  constructor(props) {
    super()
    this.state = {
      count: props.hello,
      counters: props.counters,
      keys: props.index
    };
  }

  increment = () => {
    this.setState((prevState) => {
      if (prevState.count < 30) {
        return { count: prevState.count + 1 };
      }
      return null;
    });
  };

  decrement = () => {
    this.setState((prevState) => {
      if (prevState.count > 0) {
        return { count: prevState.count - 1 };
      }
      return null;
    });
  };

  delete = () =>{
    console.log(this.state.counters);
     const updatedCounters = this.state.counters.filter((index)=>{
        if(this.state.keys === index){
          return true 
        }else{
          return false
        }
      })
      console.log(updatedCounters);
    
  }

  render() {
    return (
      <div style={{
        marginBottom: '20px',
        border: '1px solid #ccc',
        padding: '20px',
        
        textAlign: 'center',
        borderRadius: '10px'
      }}>
        <h2>{this.state.count}</h2>
        <div style={{display: "flex", justifyContent: "space-between"}}>

        <button
          onClick={this.increment}
          disabled={this.state.count >= 30}
          style={{ margin: '0 10px', padding: '8px 16px', cursor: "pointer" }}
        >
          Increment
        </button>
        <button
          onClick={this.decrement}
          disabled={this.state.count <= 0}
          style={{ margin: '0 10px', padding: '8px 16px', cursor: 'pointer' }}
        >
          Decrement
        </button>
        <button
          onClick={this.delete}
          // disabled={this.state.count <= 0}
          style={{ margin: '0 10px', padding: '8px 16px', background: 'red',  cursor: 'pointer' }}
        >
          Delete
        </button>
        </div>
      </div>
    );
  }
}
