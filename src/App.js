import './App.css';
import Socket from './Component/Socket'; //  import Socket component in App.js this is the only page render in web.
function App() {
  return (
    <div className="App">
      <h1>Welcome to Socket tutorial</h1>
      <header className="App-header">
      <Socket/> 
      </header>
    </div>
  );
}

export default App;
