import { useParams } from 'react-router-dom';

function EventDitailPage() {
    const params = useParams();

    return (
        <>
            <h1>EventDitailPage</h1>
            <p>Event ID: {params.eventId}</p>
        </>
        
    );
}

export default EventDitailPage;