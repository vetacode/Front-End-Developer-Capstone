import './App.css';
import Header from './components/Header';
import { OrderOnline } from './components/OrderOnline';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About';
import Menu from './components/Menu';
import { BookingPage } from './components/BookingPage';
import { useLog, LogProvider } from './Hooks/LogContext';

function App() {
  const { isLoggedIn } = useLog();

  return (
    <div className='App-content'>
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
        <Header />
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
