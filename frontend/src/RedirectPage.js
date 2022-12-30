import React from "react";
import logo from './app-icon.png';
import './App.css';

function App() {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch('/subscribe').then((res) => res.json()).then((data) => setData(data.message));
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {!data ? "Loading..." : data}
        </p>
      </header>
    </div>
  );
}

export default App;