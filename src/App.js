import './App.css';
import Header from './components/Header';
import { OrderOnline } from './components/OrderOnline';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import { LoginButton } from './components/LogInOutButton';
import { BookingPage } from './components/BookingPage';
import { useLog, LogProvider } from './Hooks/LogContext';

function App() {
  const { isLoggedIn, login } = useLog();

  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/');
  };

  return (
    <div className='App'>
      {isLoggedIn ? (
        <>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Menu' element={<Menu />} />
            <Route path='/BookingPage' element={<BookingPage />} />
            <Route path='/OrderOnline' element={<OrderOnline />} />
          </Routes>
        </>
      ) : (
        <>
          <Header />
        </>
      )}
    </div>
  );
}

function Root() {
  return (
    <LogProvider>
      <App />
    </LogProvider>
  );
}

export default Root;
