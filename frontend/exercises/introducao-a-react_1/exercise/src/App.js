import React from 'react';

const task = ['Comer', 'estudar', 'beber agua', 'dormir'];

function App() {
  return (
    <ul>{ task.map(task => <li>{ task }</li>) } </ul>
  );
}

export default App;
