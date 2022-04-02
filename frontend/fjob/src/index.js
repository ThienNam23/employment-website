import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Jobs from './pages/Jobs/Jobs';
import Companies from './pages/Companies/Companies';
import Job from './components/Job/Job';
import Skills from './components/Skill/Skills';
import Positions from './components/Position/Positions';
import LoginForm from './components/Login/LoginForm';
import RegisterForm from './components/Register/RegisterForm';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                    <Route path='jobs' element={<Jobs />}>
                        <Route path='skills' element={<Skills/>}/>
                        <Route path='job-titles' element={<Positions/>}/>
                        <Route path=':jobId' element={<Job />} />
                    </Route>
                    <Route path='companies' element={<Companies />} />
                    <Route path='login' element={<LoginForm />} />
                    <Route path='register' element={<RegisterForm />} />
                </Route>
            </Routes>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);