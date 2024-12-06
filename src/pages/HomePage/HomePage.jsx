import axios from 'axios'
import { useState, useEffect } from 'react';
import MovieList from '../../components/MovieList/MovieList';

const HomePage = () => {
    const [trendingData, setTrendingData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const url = `https://api.themoviedb.org/3/trending/movie/day`;
            const options = {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDk4YmIyNjY0ZDU4Mzg5NjA0YzhkNjhjNWU1ZTg4MCIsIm5iZiI6MTczMjk2NDc0MS4zNDYsInN1YiI6IjY3NGFmMTg1MGRjMmZkYjA1MjNmMDEwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S-fYVGZZdvcq25tKN6D1QgaDIguZnh07l1YWCQOJG2g"
                }
            }

            const data = await axios.get(url, options).then((res) => {return res.data.results});
            setTrendingData(data);
        };

        getData();
    }, [])

    return (
        <>
        {trendingData.length > 0 && <MovieList films={trendingData} />}
        </>
    );
}

export default HomePage;