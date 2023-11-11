import { useLoaderData, json } from 'react-router-dom';
import EventItem from '../components/EventItem';

function EventDitailPage() {
    const data = useLoaderData();
    return (
        <EventItem event={data.event} />
      
    );
}

export default EventDitailPage;

export async function loader({ request, params }) {
    const id = params.eventId;

    const response = await fetch('http://localhost:8080/events/' + id);

    if (!response.ok) {
        throw json({message: 'Could not fetch details for select event.'}, {status: 500}); 
    } else {
        return response;
    }

   
}