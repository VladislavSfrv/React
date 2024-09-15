function Content({theme}) {
    return (
        <div className={theme}>
            <h1>Hello World!</h1>
            <p>This is a {theme} theme page.</p>
            <button>Change Theme</button>
            <div>
                <input type="text" placeholder="Enter your name" />
                <button>Submit</button>
            </div>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </div>
    );
}

export default Content;