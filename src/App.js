import React from 'react';
import ToDo from './components/ToDo';
// import './stylesheets/App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <ToDo />
      </div>
    );
  }
}

export default App;
