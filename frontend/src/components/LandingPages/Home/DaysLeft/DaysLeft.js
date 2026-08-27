import React, { useEffect } from 'react';
import { useState } from 'react';
function Date1() {
  const [startDate, setStartDate] = useState(new Date()); 
  const endDate =(new Date('2026-10-09'));
  useEffect(()=>{
    setInterval(() => {
      setStartDate(new Date());//checking everyhour so that when date changes it updates
    },3600000);},[]
  )

  const calculateDaysDifference = () => {
    const timeDifference = endDate.getTime() - startDate.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
    return daysDifference;
  };

  return (
    <div>
{calculateDaysDifference()}
    </div>
  );
}

export default Date1;
