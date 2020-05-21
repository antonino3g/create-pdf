import React from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

import './App.css';

function App() {
  return (
    <div className="App">
      <input type="text" placeholder="name" onChange={this.handleChange} />
    </div>
  );
}

export default App;
