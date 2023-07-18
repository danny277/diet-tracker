import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Notfound from './components/Notfound';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import { UserProvider } from './UserContext';
import AddDiet from './components/AddDiet';
import ManageDiet from './components/ManageDiet';

function App() {
  return (
    <div>
        <BrowserRouter>
        <UserProvider>
          <Navbar />
          <Routes>
            <Route element={<Navigate to="/home" />} path="/" />
            <Route element={<Home />} path="home" />
            <Route element={<Login />} path="login" />
            <Route element={<Signup />} path="signup" />
            <Route element={<Notfound />} path="*" />
            <Route element={<About />} path='about' />
            <Route element={<Services />} path='services' />
            <Route element={<AddDiet />} path='Adddiet' />
            <Route element={<ManageDiet />} path='Managediet' />
          </Routes>
          </UserProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
