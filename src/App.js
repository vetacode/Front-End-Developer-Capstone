import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { LogoutButton, LoginButton } from './components/LogInOutButton';

function App() {
  const [isLoggedIn, setIsloggedIn] = useState(false);

  const navigate = useNavigate();

  const login = () => {
    setIsloggedIn(true);
    navigate('/');
  };

  const logout = () => {
    setIsloggedIn(false);
  };

  return (
    <div className='App'>
      {isLoggedIn ? (
        <>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Contact' element={<Contact />} />
          </Routes>

          <LogoutButton onLogout={logout} />
          <Main />
          <Footer />
        </>
      ) : (
        <LoginButton onLogin={login}>Login</LoginButton>
      )}
    </div>
  );
}

export default App;
