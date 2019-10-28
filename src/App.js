import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header'
import Counter from './Components/Counter'

// class App extends React.Component {
//   render() {
//     return <div>This is some JSX</div>
//   }
// }

function App() {
  // React.createElement('div', { className: 'App' }, [
  //   React.createElement('header', { className: 'App-header' }[
  //     React.createElement('img', { src: logo, className: 'App-logo', alt: 'logo' }, null)
  //   ])
  // ])

  // < i > <b>Boo!</i></b >

  //   React.createElement('i', null, [
  //     React.createElement('b', null, 'Boo!')
  //   ])

  const [counterValue, setCounterValue] = useState(0)
  const [counterValue2, setCounterValue2] = useState(0)

  return (
    <div className="App">
      <Header>Hello, <code>World!</code></Header>
      <Counter value={counterValue} setValue={setCounterValue} />

      <Counter value={counterValue2} setValue={setCounterValue2} step={10} />
    </div>
  );
}

export default App;

