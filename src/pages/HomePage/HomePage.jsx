import axios from 'axios'
import css from './HomePage.module.css'
import { useState, useEffect } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

const HomePage = () => {
    const [trendingData, setTrendingData] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try {
                setError(false);
                const url = `https://api.themoviedb.org/3/trending/movie/day`;
                const options = {
                    headers: {
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDk4YmIyNjY0ZDU4Mzg5NjA0YzhkNjhjNWU1ZTg4MCIsIm5iZiI6MTczMjk2NDc0MS4zNDYsInN1YiI6IjY3NGFmMTg1MGRjMmZkYjA1MjNmMDEwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S-fYVGZZdvcq25tKN6D1QgaDIguZnh07l1YWCQOJG2g"
                    }
                }

                const data = await axios.get(url, options).then((res) => {return res.data.results});
                setTrendingData(data);    
            } catch (error) {
                setError(true);
                console.log(error);
            }
        };

        getData();
    }, [])

    return (
        <>
        <h1 className={css.Heading}>Trending Today</h1>
        {trendingData.length > 0 && <MovieList films={trendingData} />}
        {(error) && <NotFoundPage />}
        </>
    );
}

export default HomePage;