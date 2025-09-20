import './App.css';
import Header from './components/Header';
import { OrderOnline } from './components/OrderOnline';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import About from './components/About';
import Specials from './components/Specials/Specials';
import BookingForm from './components/BookingForm/BookingForm';
import { useLog, LogProvider } from './Hooks/LogContext';

function App() {
  const { isLoggedIn } = useLog();

  return (
    <div className=''>
      {isLoggedIn ? (
        <>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Menu' element={<Specials />} />
            <Route path='/BookingPage' element={<BookingForm />} />
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
