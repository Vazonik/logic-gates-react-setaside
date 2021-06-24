import Canvas from './Canvas';
import Header from './Header';
import Sidebar from './Sidebar';
import '../sass/App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-main">
        <Sidebar />
        <Canvas />
      </div>
    </div>
  );
}

export default App;