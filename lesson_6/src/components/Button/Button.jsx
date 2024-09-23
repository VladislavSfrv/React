function Button({ children, handlerClick = () => { }, nameClass }) { 
    return (
        <button className = {`${nameClass}`} onClick={handlerClick}>{children}</button>
    );
}

export default Button;