import Home1 from "./components/home/hometable"
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-light bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand">
            <img src="https://www.infilon.com/assets/images/logo/light-logo.png"  alt ="infilon" style={{ height: "50px" }} />
          </a>
          
        </div>
      </nav>
      <Home1 />
      <div >
               <h3> Points covered</h3>
                <li>
                Created Table
                </li>
                <li>
                Fetched data from API using Redux
                </li>
                <li> Used bootsrap and css</li>
                <li>Feature to edit any row data couldn't complete the whole part.</li>
                <li> Feature to delete the data of specific row/id</li>
                <li>Edit/Delete Button fixed on the right side of the table</li>
                <li>Used Re-Usable Components</li>
            </div>
    </div>
  );
}

export default App;
