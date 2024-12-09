import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieReviews = () => {
    const params = useParams();
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const url = `https://api.themoviedb.org/3/movie/${params.movieId}/reviews`;
            const options = {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDk4YmIyNjY0ZDU4Mzg5NjA0YzhkNjhjNWU1ZTg4MCIsIm5iZiI6MTczMjk2NDc0MS4zNDYsInN1YiI6IjY3NGFmMTg1MGRjMmZkYjA1MjNmMDEwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S-fYVGZZdvcq25tKN6D1QgaDIguZnh07l1YWCQOJG2g"
                }
            }
    
            const data = await axios.get(url, options).then((res) => {return res.data.results});
            setMovie(data);
        };

        getData();
    }, [params.movieId])

    return (
        <>
        {(movie.length > 0) ? (
        <ul>
        {movie.map((item) => {
            return <li key={item.id}>
                Author: {item.author_details.username}
                <p>{item.content}</p>
            </li>
        })}
        </ul>
        ) : (<p>We don&apos;t have any reviews for this film.</p>)}
        </>
    );
}

export default MovieReviews;