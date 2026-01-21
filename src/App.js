import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginSignup/LoginPage';
import SignupPage from './components/LoginSignup/SignupPage';
import HomePage from './components/pages/HomePage';
import About from './components/pages/About';
import LandingPage from './components/landingpage/LandingPage';
import UserManagementPage from './components/admin/UserManagementPage';
import OrderForm from './components/pages/OrderForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/collections" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<UserManagementPage />} />
        <Route path="/order" element={<OrderForm />} />
      </Routes>
    </Router>
  );
}

export default App;
