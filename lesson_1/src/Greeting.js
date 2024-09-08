function Greeting() {
    let message;
    if( new Date().getHours() < 12 ){
        message = 'Good morning!';
    }else{
        message = 'Good afternoon!';
    }
    return (  
        <h1>{message}</h1>
    );
}

export default Greeting;