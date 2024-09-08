const currentTime = new Date()
function CurrentTime() {
    return ( 
        <div>
            <h1>Current Time: <span id = "currentTime">{currentTime.toLocaleTimeString()}</span></h1>
        </div>
     );
}

export default CurrentTime;