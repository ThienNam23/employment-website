import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Jobs from './pages/Jobs/Jobs';
import Companies from './pages/Companies/Companies';
import Job from './pages/Jobs/Job';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path='jobs' element={<Jobs />}>
            <Route path=':jobId' element={<Job />} />
          </Route>
          <Route path='companies' element={<Companies />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

