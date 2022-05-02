import React from 'react';
import {
  BrowserRouter,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Dashboard from './routes/dashboard';
import Preferences from './routes/preferences';
import Login from './routes/login';
import useToken from './auth/auth'

function App() {

  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>Dummy React Application</h1>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="preferences/*" element={<Preferences />} />
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
