import logo from './logo.svg';
import './App.css';
import Home from './Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from './components/signin';
import Signup from './components/signup';
function App() {
  return (
    <>
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={< Signin />} />
            <Route path="/sign-up" element={< Signup />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
