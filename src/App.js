import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Signup from './pages/Auth/Signup';
import SignIn from './pages/Auth/SignIn';
import SignupWomen from './pages/Auth/SignupWomen';
import InputCode from './pages/Auth/InputCode';
import WomenRegister from './pages/Auth/WomenRegister';
import WomenRegisterConfirm from './pages/Auth/WomenRegisterConfirm';
import RegisterVerifyOption from './pages/Auth/RegisterVerifyOption';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup_women" element={<SignupWomen />} />
        <Route path="/input_code" element={<InputCode />} />
        <Route path="/women_register" element={<WomenRegister />} />
        <Route
          path="/women_register_confirm"
          element={<WomenRegisterConfirm />}
        />
        <Route
          path="/register_verify_option"
          element={<RegisterVerifyOption />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
