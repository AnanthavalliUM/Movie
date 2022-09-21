import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';

export function Moviedetails() {
  const { id } = useParams();
  const [movie, setmovie] = useState({});

  useEffect(() => {
    fetch(`https://62d0ce051cc14f8c088e8f5e.mockapi.io/movies/${id}`)
    .then((data) => data.json())
    .then((mv) => setmovie(mv)); 
  }, []);
      // const movie = movielist[id];
      // console.log(movielist, movie);
  const styles = {
    color: movie.rating > 8 ? "green" : "red"
  };
  const navigate = useNavigate();
  return (
    <div>
      <iframe width="100%" height="600px" src={movie.trailer} title="Baahubali - The Beginning Trailer | Prabhas,Rana Daggubati,Anushka Shetty,Tamannaah|Bahubali Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div className='movie-detail-container'>
        <div className='movie-specs'></div>
        <h2 className='movie.name'>{movie.name}</h2>
        <p style={styles} className="movie-rating"> :star:{movie.rating} </p>
        <p className='movie-summary'>{movie.summary}</p>
        {/* <button onClick={ () => navigate(-1)}>
              Back
            </button> */}
        <Button onClick={() => navigate(-1)} variant="contained">Back</Button>


      </div>
      {/* <h1>movie details {id} </h1> */}
    </div>
  );
}
