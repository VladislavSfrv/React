import PropTypes from 'prop-types';
function MessageList({messages}) {
    return ( 
        <div>
            <ul>
                {messages.map((message) => <li key = {message.id}>{message.text}</li> )}
            </ul>
        </div>
     );
}

MessageList.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired
    })).isRequired
}

export default MessageList;