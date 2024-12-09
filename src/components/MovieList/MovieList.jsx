import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ films }) => {
    const location = useLocation();

    return (
        <div>
            <ul>
                {films.map((item) => {
                    return <li key={item.id}>
                                <Link to={`/movies/${item.id}`} state={{from: location}}>{item.title}</Link>
                           </li>
                })}
            </ul>
        </div>
    );
}

export default MovieList;