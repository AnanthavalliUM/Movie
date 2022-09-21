import { Movie } from './Movie';
import { Addmovie } from "./Addmovie";
import { useEffect } from 'react';
import { useState} from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';




export function Movielist() {

  const [movielist, setmovielist] = useState([]);
  const navigate = useNavigate();

   const getmovies = () => {
     fetch("https://62d0ce051cc14f8c088e8f5e.mockapi.io/movies", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mv) => setmovielist(mv));
       
   };
    useEffect(() => getmovies(), [] )
   

       const deletemovie = (id) => {
        console.log("deleting movie", id);
        fetch(`https://62d0ce051cc14f8c088e8f5e.mockapi.io/movies/${id}`, 
        { method: "DELETE" , })
         .then(() => getmovies())
       }
  return (

    <div className='movie-listcontainer'>
    {movielist.map((mv ,index) => (<Movie movie={mv} key={mv.id} id={mv.id} 
    deleteBtn={ <IconButton color="error"  style={{marginLeft: "auto"}} onClick={ () => deletemovie(mv.id)} aria-label="movie-info">
  <DeleteIcon />
</IconButton> 
    } 
    editBtn={ <IconButton color="secondary" onClick={ () => navigate(`movies/edit/${mv.id}`)} aria-label="movie-info" >
  <EditIcon />
</IconButton> 
    }
    />
    ))}

    </div>
      

      // {/* <input type="text" placeholder='Name' onChange={(event) => setname(event.target.value)} /> */}
      // {/* <input type="text" placeholder='Poster' onChange={(event) => setposter(event.target.value)} />
      // <input type="text" placeholder='Rating' onChange={(event) => setrating(event.target.value)} />
      // <input type="text" placeholder='summary'onChange={(event) => setsummary(event.target.value)} />
      // {/* <button onClick={() => { */}
      //   {/* const newmovie = { name: name, poster: poster, rating: rating, summary: summary };
      //   setmovielist([...movielist, newmovie]);
      // }}>Add movie</button> */} 
      
    
  );
}

