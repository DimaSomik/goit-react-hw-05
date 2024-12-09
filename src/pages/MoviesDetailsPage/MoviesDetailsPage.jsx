import css from './MoviesDetailsPage.module.css';
import axios from 'axios';
import { useLocation, useNavigate, useParams, NavLink, Outlet } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

const MoviesDetailsPage = () => {
    const location = useLocation();
    const backLink = useRef(location.state?.from || '/movies');
    const navigate = useNavigate();
    const params = useParams();
    const [movie, setMovie] = useState();

    const goBackFunc = () => {navigate(backLink.current, {replace: true})}

    useEffect(() => {
        const getData = async () => {
            try {
                const url = `https://api.themoviedb.org/3/movie/${params.movieId}`;
                const options = {
                    headers: {
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDk4YmIyNjY0ZDU4Mzg5NjA0YzhkNjhjNWU1ZTg4MCIsIm5iZiI6MTczMjk2NDc0MS4zNDYsInN1YiI6IjY3NGFmMTg1MGRjMmZkYjA1MjNmMDEwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S-fYVGZZdvcq25tKN6D1QgaDIguZnh07l1YWCQOJG2g"
                    }
                }
        
                const data = await axios.get(url, options).then((res) => {return res.data});
                setMovie(data);   
            } catch (error) {
                console.log(error);
            }
        };

        getData();
    }, [params.movieId])

    return (
        <>
        {(movie) ? (
        <div>
            <div className={css.MainBox}>
                <div className={css.SecondBox}>
                    <button className={css.GoBack} onClick={goBackFunc}>Go back</button>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" className={css.PosterImg}/>
                </div>
                <div className={css.DetailsBox}>
                    <div>
                        <h3>{movie.title} ({(movie.release_date).substring(0, 4)})</h3>
                        <p>User Score: {String(movie.vote_average).substring(0, 3).replace(".", "")}%</p>
                    </div>
                    
                    <div>
                        <h4>Overview</h4>
                        <p>{movie.overview}</p>
                    </div>

                    <div>
                        <h4>Genres</h4>
                        <p>{movie.genres[0].name}, {movie.genres[1].name}</p>
                    </div>
                </div>
            </div>
            <div className={css.CastReviewsBox}>
                <p>Additional Information</p>
                <div className={css.CastReviewsLinks}>
                <NavLink to="cast">Cast</NavLink>
                <NavLink to="reviews">Reviews</NavLink>
                </div>
                <Outlet />
            </div>
        </div>    
        ) : (<NotFoundPage />)}
        </>
    );
}

export default MoviesDetailsPage;