import css from './MoviesDetailsPage.module.css';
import axios from 'axios';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const MoviesDetailsPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    const [movie, setMovie] = useState();

    const goBackFunc = () => {navigate(location.state.from.pathname, {replace: true})}

    useEffect(() => {
        const getData = async () => {
            const url = `https://api.themoviedb.org/3/movie/${params.movieId}`;
            const options = {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDk4YmIyNjY0ZDU4Mzg5NjA0YzhkNjhjNWU1ZTg4MCIsIm5iZiI6MTczMjk2NDc0MS4zNDYsInN1YiI6IjY3NGFmMTg1MGRjMmZkYjA1MjNmMDEwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S-fYVGZZdvcq25tKN6D1QgaDIguZnh07l1YWCQOJG2g"
                }
            }

            const data = await axios.get(url, options).then((res) => {return res.data});
            setMovie(data);
        };

        getData();
    }, [params.movieId])

    console.log(movie);

    return (
        <div className={css.MainBox}>
            <div className={css.SecondBox}>
                <button className={css.GoBack} onClick={goBackFunc}>Go back</button>
                {/* <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" className={css.PosterImg}/> */}
            </div>
            <div className={css.DetailsBox}>
                <div>
                    {/* <h3>{movie.title} ({(movie.release_date).substring(0, 4)})</h3> */}
                    {/* <p>User Score: {movie.popularity}</p> */}
                </div>
                
                <div>
                    <h4>Overview</h4>
                    <p>{movie.overview}</p>
                </div>

                <div>
                    <h4>Genres</h4>
                    {/* <p>{movie.genres[0].name}, {movie.genres[1].name}</p> */}
                </div>
            </div>
        </div>
    );
}

export default MoviesDetailsPage;