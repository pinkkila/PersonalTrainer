import { useState, useEffect } from 'react'; 
import { fetchTrainings } from "../apicalls";

import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const TrainingCalendar = () => {
    const [events, setEvents] = useState([])
    
    const localizer = momentLocalizer(moment);

    useEffect(() => {
        handleFetch();
    }, []);

    const handleFetch = () => {
        fetchTrainings()
            .then(data => data.map(training => {
                setEvents(prevEvents => [
                    ...prevEvents, {
                    start:moment(training.date).toDate(),
                    end: moment(training.date).add(training.duration, 'm').toDate(),
                    title: `${training.customer.lastname + ': ' + training.activity }`
                }])
            }))
            .catch(err => console.error(err));
    };

    return (
        <div style={{ height: "800px", marginTop:"30px" }}>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                views={["month", "week", "day"]}
                
            />
        </div>
    );
};

export default TrainingCalendar;