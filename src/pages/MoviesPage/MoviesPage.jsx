import css from './MoviesPage.module.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieList from '../../components/MovieList/MovieList';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

const MoviesPage = () => {
    const [films, setFilms] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query");
    const [error, setError] = useState(false);

    useEffect(() => {
        if (query === "") return;

        const getData = async () => {
            try {
                setError(false);
                const url = `https://api.themoviedb.org/3/search/movie?query=${query}`;
                const options = {
                    headers: {
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDk4YmIyNjY0ZDU4Mzg5NjA0YzhkNjhjNWU1ZTg4MCIsIm5iZiI6MTczMjk2NDc0MS4zNDYsInN1YiI6IjY3NGFmMTg1MGRjMmZkYjA1MjNmMDEwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S-fYVGZZdvcq25tKN6D1QgaDIguZnh07l1YWCQOJG2g"
                    }
                }

                const data = await axios.get(url, options).then((res) => {return res.data.results});
                setFilms(data);    
            } catch (error) {
                setError(true);
                console.log(error);   
            }
        };

        getData();
    }, [query])

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        setSearchParams({ query: form.elements.query.value });
        form.reset();
      };

    return (
        <div className={css.MainBox}>
            <form onSubmit={handleSubmit}>  
                <input type="text" name="query" className={css.Input} placeholder='Search for some mad fine movies dog...'/>
                <button type="submit" className={css.SubmitBtn}>Search</button>
            </form>
            {(query) && (films) && <MovieList films={films}/>}
            {(error) && <NotFoundPage />}
        </div>
    );
}

export default MoviesPage;