import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import './Calendar.sass';
import { useState, useLayoutEffect } from 'react';

function Calendar() {
    const [calendarView, setCalendarView] = useState(window.innerWidth <= 1080 ? 'listWeek' : 'dayGridMonth');
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1080);
    const [key, setKey] = useState(0);

    useLayoutEffect(() => {
        const updateView = () => {
            const currentIsMobile = window.innerWidth <= 1080;
            if (currentIsMobile !== isMobile) {
                setIsMobile(currentIsMobile);
                setCalendarView(currentIsMobile ? 'listWeek' : 'dayGridMonth');
                setKey(prevKey => prevKey + 1);
            }
        };

        window.addEventListener('resize', updateView);
        return () => window.removeEventListener('resize', updateView);
    }, [isMobile]);

    return (
        <div className='calendar' key={key}>
            <FullCalendar
                plugins={[dayGridPlugin, listPlugin, googleCalendarPlugin]}
                initialView={calendarView}
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,listWeek,listDay'
                }}
                views={{
                    listDay: { buttonText: 'list day' },
                    listWeek: { buttonText: 'list week' }
                }}
                events={{
                    googleCalendarId: process.env.REACT_APP_GOOGLE_CALENDAR_ID,
                    googleCalendarApiKey: process.env.REACT_APP_GOOGLE_CALENDAR_API_KEY
                }}
            />
        </div>
    );
}

export default Calendar;
