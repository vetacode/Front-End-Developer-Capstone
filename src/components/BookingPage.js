import { useState } from 'react';

export const BookingPage = () => {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState('Birthday');

  return (
    <div>
      <h1>Booking Form</h1>
      <div>
        <label>Date:</label>
        <input type='date' />
        <select value={availableTimes} onChange={(e) => setAvailableTimes(e)} />
      </div>
      <div>
        <label>Guests:</label>
        <input
          type='number'
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />
      </div>
      <div>
        <label>Occasion:</label>
        <select value={occasion} onChange={(e) => setOccasion(e.target.value)}>
          <option value='Birthday'>Birthday</option>
          <option value='Anniversary'>Anniversary</option>
          <option value='Wedding'>Wedding</option>
          <option value='Party'>Party</option>
        </select>
      </div>
    </div>
  );
};
