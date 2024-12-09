import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <>
        <p>Page was not found or unexpected error occured.</p>
        <Link to="/">Here you can go the main page :#</Link>
        </>
    );
}

export default NotFoundPage;