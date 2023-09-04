import logo from './logo.svg';
import './App.css';
import AuthContext, { AuthProvider } from './context/AuthContext';
import { SignIn } from './components/SignIn';
import { SignUp } from './components/SignUp';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
import { Home } from './components/Home';
import { PrivateRoute } from './utils/PrivateRoute'
import { useContext } from 'react'
function App() {
  const authTokens = true//localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={!authTokens ? <Navigate to="/signin" /> : <Home />} />
          </Routes>
          {/*<SignUp />*/}
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
