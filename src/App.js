import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    window.electron.ipcRenderer.send('test', 'Hey test!');
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Test here</p>
        <button onClick={() => window.electron.ipcRenderer.send('test', 'Clicked on the button')}>Click me!</button>
      </header>
    </div>
  );
}

export default App;
