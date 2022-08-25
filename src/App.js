import logo from './logo.svg';
import './App.css';

function App() {

  let post = '강남 우동 맛집';


  return (
    <div className="App">
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
