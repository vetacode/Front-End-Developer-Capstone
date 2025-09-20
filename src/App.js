import './App.css';
import Header from './components/Header';
import { OrderOnline } from './components/OrderOnline';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import About from './components/About/About';
import Specials from './components/Specials/Specials';
import BookingForm from './components/BookingForm/BookingForm';
import { useLog, LogProvider } from './Hooks/LogContext';
import ConfirmedBooking from './components/ConfirmedBooking/ConfirmedBooking';
import { Navigate } from 'react-router-dom';

function App() {
  const { isLoggedIn } = useLog();
  function ProtectedRoute({ isLoggedIn, children }) {
    if (!isLoggedIn) {
      <h1>You should login first</h1>;
      return <Navigate to='/' replace />;
    }
    return children;
  }
  return (
    <div className=''>
      {isLoggedIn ? (
        <>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route
              path='/Menu'
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Specials />
                </ProtectedRoute>
              }
            />
            <Route
              path='/BookingPage'
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <BookingForm />
                </ProtectedRoute>
              }
            />
            <Route
              path='/OrderOnline'
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <OrderOnline />
                </ProtectedRoute>
              }
            />
            <Route
              path='/confirmed'
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <ConfirmedBooking />
                </ProtectedRoute>
              }
            />
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
