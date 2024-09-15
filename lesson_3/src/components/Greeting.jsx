import PropTypes from "prop-types";

function Greeting({name}) {
    return ( 
        <div>
            <h1>Привет, {name}!</h1>
        </div>
     );
}

Greeting.propTypes ={
    name: PropTypes.string.isRequired,
}

export default Greeting;