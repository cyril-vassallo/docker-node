import logo from './logo.svg';
import './App.css';


function App() {

  const getAuthor = () => {
    fetch("http://localhost:8080/authors")
      .then(function(response) { 
        return response
      }).then(function(data) {
        console.log(data.body)
      })

  }



  return (
    <div className="App" onClick={getAuthor}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
