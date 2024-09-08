function Message(props) {
    return ( 
        <div className = "message">
            <h1>Добрый день, {props.name}</h1>
            <p>Как у вас <span className = "mood">настроение?</span></p>
            <p>{props.mood}</p>
            <h2>Хорошего вам дня!</h2>
        </div>
     );
}

export default Message;