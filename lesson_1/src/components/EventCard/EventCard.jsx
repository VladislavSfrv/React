function EventCard(props) {
    return ( 
        <div className="event-card">
            <h2>{props.title}</h2>
            <ul>
                <li><p>Time: {props.time}</p></li>
                <li><p>Place: {props.place}</p></li>
            </ul>
        </div>
     );
}

export default EventCard;