import css from './MovieList.module.css'
import { Link, useLocation } from 'react-router-dom';


const MovieList = ({ films }) => {
    const location = useLocation();

    return (
        <div>
            <h1 className={css.Heading}>Trending Today</h1>
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