import "@fullcalendar/react/dist/vdom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import React from 'react';


const events = [
    { 
        title: "today's event", 
        date: new Date() 
    },
    { 
        title: "Happy Birthday ...", 
        date: new Date('2022-03-25 10:00') 
    },
];

const MyCalendar = () => {
    return (
        <div style={{height:'50rem', width:'70rem'}}>

            <FullCalendar
                defaultView="dayGridMonth"
                plugins={[dayGridPlugin]}
                events={events}
            />

        </div>
    );
}

export default MyCalendar;
