import React, { useState } from 'react';

function HotelTimings() {
    const [hotelTimings] = useState({
        saturday_opening: "0:00",
        saturday_closing: "23:59",
        saturday_closed: 0,
        sunday_opening: "0:00",
        sunday_closing: "23:59",
        sunday_closed: 0,
        monday_opening: "0:00",
        monday_closing: "23:59",
        monday_closed: 0,
        tuesday_opening: "0:00",
        tuesday_closing: "23:59",
        tuesday_closed: 0,
        wednesday_opening: "0:00",
        wednesday_closing: "23:59",
        wednesday_closed: 0,
        thursday_opening: "0:00",
        thursday_closing: "23:59",
        thursday_closed: 0,
        friday_opening: "0:00",
        friday_closing: "23:59",
        friday_closed: 0
    });

    // Function to check if hotel is open
    const isHotelOpenToday = () => {
        const today = new Date();
        const dayOfWeek = today.getDay();
        const currentTime = today.getHours() * 60 + today.getMinutes(); // Current time in minutes since midnight

        const openingTimeKey = `${getDayName(dayOfWeek).toLowerCase()}_opening`;
        const closingTimeKey = `${getDayName(dayOfWeek).toLowerCase()}_closing`;

        if (hotelTimings[openingTimeKey] && hotelTimings[closingTimeKey]) {
            const openingTime = timeStringToMinutes(hotelTimings[openingTimeKey]);
            const closingTime = timeStringToMinutes(hotelTimings[closingTimeKey]);
            
            return currentTime >= openingTime && currentTime <= closingTime;
        }
        
        return false; // Return false if timings are not available for today
    };

    // Function to convert time string to minutes since midnight
    const timeStringToMinutes = (time) => {
        const [hours, minutes] = time.split(':').map(Number);
        return hours * 60 + minutes;
    };

    // Function to get day name
    const getDayName = (dayIndex) => {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[dayIndex];
    };

    return (
        <div>
            <h2>Hotel Status</h2>
            <p>{isHotelOpenToday() ? 'Open' : 'Closed'}</p>
        </div>
    );
}

export default HotelTimings;
