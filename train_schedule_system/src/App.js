import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Trains from './components/Trains';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">All Trains</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" exact component={Trains} />
          {/* <Route path="/trains/:id" component={SingleTrain} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
