import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieCast = () => {
    const params = useParams();
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const url = `https://api.themoviedb.org/3/movie/${params.movieId}/credits`;
                const options = {
                    headers: {
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDk4YmIyNjY0ZDU4Mzg5NjA0YzhkNjhjNWU1ZTg4MCIsIm5iZiI6MTczMjk2NDc0MS4zNDYsInN1YiI6IjY3NGFmMTg1MGRjMmZkYjA1MjNmMDEwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S-fYVGZZdvcq25tKN6D1QgaDIguZnh07l1YWCQOJG2g"
                    }
                }
        
                const data = await axios.get(url, options).then((res) => {return res.data.cast});
                setMovie(data);   
            } catch (error) {
                console.log(error);
            }
        };

        getData();
    }, [params.movieId])

    return (
        <>
        {(movie.length > 0) ? (
        <ul>
        {movie.map((item) => {
            return <li key={item.id}>
                <div><img src={`https://image.tmdb.org/t/p/w500${item.profile_path}`} alt="" width="200px" height="200px"/></div>
                {item.name}
                <p>{item.character}</p>
            </li>
        })}
        </ul>
        ) : (<p>We don&apos;t have any reviews for this film.</p>)}
        </>
    );
}

export default MovieCast;