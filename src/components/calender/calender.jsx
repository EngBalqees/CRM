import React ,{ useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
function CalendarSection() {
  
  const [value, setValue] = useState(new Date());

  function onChange(nextValue) {
    setValue(nextValue);
  }

  return (
    <section className="calendar-section">
     <Calendar onChange={onChange} value={value} />
    </section>
  );
}

export default CalendarSection;
