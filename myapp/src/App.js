import React from 'react';
import Mad from './Mad';

function App() {
  return (
    <div className="App">
      <h1>My first React app</h1>
      <p>Welcome :)</p>
      <Mad name="Mustafa" age="30" city="Alexandria" />
      <Mad name="Ahmed" age="25" city="Cairo" />
    </div>
  );
}

export default App;
