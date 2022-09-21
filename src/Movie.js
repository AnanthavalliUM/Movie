import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Counter } from './Counter';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';







export function Movie({ movie, id, deleteBtn, editBtn }) {
  //conditional styling
const styles = {
  color: movie.rating > 8 ? "green" : "red"
};
const [show, setshow] = useState(true);
const toggstyles = {
  display: show ? "block" : "none"
};
const navigate = useNavigate();
  return (
    <Card className="movie-container">
      <img src={movie.poster} alt={movie.name} className="movie-poster"></img>
      <CardContent>

      <div className='movie-specs'>
      <h2 className='movie.name'>{movie.name}</h2>
      <p style={styles} className="movie-rating"> ⭐{movie.rating} </p>
      </div>
          </CardContent>

      {/* <button onClick={() => setshow(!show)}>Toggle summary</button>
      <button onClick={ () => navigate (`/movies/${id}`) }>Info</button> */}
      
      <IconButton color="primary" onClick={() => setshow(!show)} aria-label="Toggle summary"> 
        { show ? <ExpandLessIcon /> : <ExpandMoreIcon /> }
    </IconButton>

      <IconButton color="primary" onClick={ () => navigate (`/movies/${id}`) } aria-label="movie-info">
  <InfoOutlinedIcon />
</IconButton>

      <p style={toggstyles} className='movie-summary'>{movie.summary}</p>
      <CardActions> <Counter /> {deleteBtn} {editBtn}
         </CardActions>

         

      
    {/* // conditional rendering */}
        {/* //          {show? <p  className='movie-summary'>{movie.summary}</p> :null } */}


    </Card>



  );

}
