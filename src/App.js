import logo from './logo.svg';
import './App.css';

const handleClick = () => {
  alert('My First Alert in Tailwind 🚀🚀');
  // px - left & right padding
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="React Icon 🚀" />
        <h1 className="text-5xl text-sky-400/100 font-bold mb-5">
          Hello world!
        </h1>
        <button onClick={handleClick}
          className="bg-sky-500 opacity-100 font-bold tracking-tighter rounded padding shadow-lg shadow-sky-500/50 hover:bg-sky-700 p-2">
            Open an Alert 🙈
        </button>
      </header>
      {/* // TODO: Create components & Footer to add the repository & more */}
    </div>
  );
}

export default App;
