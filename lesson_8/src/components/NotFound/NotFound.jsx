import { Link } from "react-router-dom"

function NotFound() {
    return (
        <section className="page__notfound">
            <div>
                <img src="../../images/404.png" alt="404" />
                <h1>Page Not Found</h1>
                <p>Sorry, the page you are looking for does not exist.</p>
                <button><Link to="/">Go back to Homepage</Link></button>
            </div>
        </section>
    );
}

export default NotFound;