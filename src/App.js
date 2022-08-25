import logo from './logo.svg';
import './App.css';

function App() {

  let post = 'web for test';


  return (
    <div className="App">
      <header>
        <h1> what are you looking for</h1>
      </header>
      <div className="nav">
        <h4>Test</h4>
      </div>
      <h4>{post}</h4>
      <div className="floor">
        <h2>floor</h2>
      </div>
    </div>
  );
}

export default App;
