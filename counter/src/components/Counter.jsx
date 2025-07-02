// import { Component } from "react";

// export default class Counter extends Component {
   
//   constructor(props) {
//     super()
//     this.state = {
//       count: props.count,
//       // counters: props.counters,
//       // keys: props.index,
//       // onDelete: props.onDelete
//     };
//   }

//   increment = () => {
//     this.setState((prevState) => {
//       if (prevState.count < 30) {
//         return { count: prevState.count + 1 };
//       }
//       return null;
//     });
//   };

//   decrement = () => {
//     this.setState((prevState) => {
//       if (prevState.count > 0) {
//         return { count: prevState.count - 1 };
//       }
//       return null;
//     });
//   };

//   delete = () =>{ 
//       this.props.onDelete(this.props.index) 
      
//   }

//   render() {
//     return (
//       <div style={{
//         marginBottom: '20px',
//         border: '1px solid #ccc',
//         padding: '20px',
        
//         textAlign: 'center',
//         borderRadius: '10px'
//       }}>
//         <h2>{this.state.count}</h2>
//         <div style={{display: "flex", justifyContent: "space-between"}}>

//         <button
//           onClick={this.increment}
//           disabled={this.state.count >= 30}
//           style={{ margin: '0 10px', padding: '8px 16px', cursor: "pointer" }}
//         >
//           Increment
//         </button>
//         <button
//           onClick={this.decrement}
//           disabled={this.state.count <= 0}
//           style={{ margin: '0 10px', padding: '8px 16px', cursor: 'pointer' }}
//         >
//           Decrement
//         </button>
//         <button
//           onClick={this.delete}
//           // disabled={this.state.count <= 0}
//           style={{ margin: '0 10px', padding: '8px 16px', background: 'red',  cursor: 'pointer' }}
//         >
//           Delete
//         </button>
//         </div>
//       </div>
//     );
//   }
// }

import { Component } from "react";

export default class Counter extends Component {
  state = {
    count: this.props.count
  };

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count < 30 ? prevState.count + 1 : prevState.count
    }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count > 0 ? prevState.count - 1 : prevState.count
    }));
  };

  delete = () => {
    this.props.onDelete(this.props.id); // Pass ID instead of index
  };

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
            style={{ margin: '0 10px', padding: '8px 16px', background: 'red', cursor: 'pointer' }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}