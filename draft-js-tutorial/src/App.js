import React from 'react';
import PlaintextEditor from './Components/PlaintextEditor';
import RichTextEditor from './Components/RichTextEditor';

function App() {

  return (
    <div className="App">
      <h1>Draft.js Tutorial</h1>
      <PlaintextEditor />
      <p></p>
      <RichTextEditor />
    </div>
  );
}

export default App;
