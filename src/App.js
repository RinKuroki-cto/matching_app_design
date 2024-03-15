import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Signup from './pages/Auth/Signup';
import SignIn from './pages/Auth/SignIn';
import SignupWomen from './pages/Auth/SignupWomen';
import InputCode from './pages/Auth/InputCode';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup_women" element={<SignupWomen />} />
        <Route path="/input_code" element={<InputCode />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
