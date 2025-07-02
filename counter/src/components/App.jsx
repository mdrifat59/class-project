// import { Component } from 'react';
// import Counter from './Counter'; 

// class App extends Component { 
//     state = {
//       counters: [0]
//     }; 

//   addCounter = () => {
//     this.setState((prevState) => ({
//       counters: [...prevState.counters, 0]  
//     }));
//   };

//   deleteCounter =(indexToDelete) => {
//         this.setState((prevState)=>({ 
//           counters: prevState.counters.filter((_,i)=> i !== indexToDelete)
//         }))
//         // console.log(prevState);
        
//   }

//   render() {
//     return (
//       <div style={{ textAlign: 'center', padding: '40px' }}>
//         <h1>Multi Counter App</h1>
//         <button
//           onClick={this.addCounter}
//           style={{ padding: '10px 20px', marginBottom: '30px', cursor: 'pointer' }}
//         >
//           ➕ Add Counter
//         </button>
//         <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
//           {this.state.counters.map((counter, index) => (
//             <Counter count={counter} index={index} key={index}  counters={this.state.counters} onDelete={this.deleteCounter} />
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// export default App;

import { Component } from 'react';
import Counter from './Counter'; 

class App extends Component { 
    state = {
      counters: [{ id: Date.now(), value: 0 }] // Each counter has a unique ID
    }; 

  addCounter = () => {
    this.setState((prevState) => ({
      counters: [...prevState.counters, { id: Date.now(), value: 0 }]  
    }));
  };

  deleteCounter = (idToDelete) => {
    this.setState((prevState) => ({
      counters: prevState.counters.filter(counter => counter.id !== idToDelete)
    }));
  };

  render() {
    return (
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <h1>Multi Counter App</h1>
        <button
          onClick={this.addCounter}
          style={{ padding: '10px 20px', marginBottom: '30px', cursor: 'pointer' }}
        >
          ➕ Add Counter
        </button>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
          {this.state.counters.map((counter) => (
            <Counter 
              key={counter.id}  // Use ID instead of index
              count={counter.value} 
              id={counter.id} 
              onDelete={this.deleteCounter} 
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;