import { Component } from 'react';
import Counter from './counter'; 

class App extends Component { 
    state = {
      counters: [0,0]
    }; 

  addCounter = () => {
    this.setState((prevState) => ({
      counters: [...prevState.counters, 0]  
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
          {this.state.counters.map((counter, index) => (
            <Counter hello={counter} index={index}  counters={this.state.counters} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
