import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

export function Addmovie() {
  // const [name, setname] = useState("");
  // const [poster, setposter] = useState("");
  // const [rating, setrating] = useState("");
  // const [summary, setsummary] = useState("");
  // const [trailer, settrailer] = useState("");
  const movievalidationschema = yup.object({
    name: yup
    .string()
    .required("why not fill this name"),
    poster: yup
    .string()
    .min(4)
    .required("why not fill this poster"),
    rating: yup
    .number()
    .min(0)
    .max(10)
    .required("why not fill this rating"),
    summary: yup
    .string()
    .min(20)
    .required("why not fill this summary"),
    trailer: yup
    .string()
    .min(4)
    .required("why not fill this trailer"),
  })

  
  const {handleSubmit, handleChange, values, errors, touched, handleBlur  } = useFormik ({
    initialValues: {name: "" , poster: "", rating: "", summary: "", trailer: ""},
    validationSchema: movievalidationschema,
    onSubmit: (newmovie) => {
       console.log("onSubmit", newmovie);
       addmovie(newmovie)
    },
   });
  const addmovie = (newmovie) => {
    // const newmovie = { name: name, poster: poster, rating: rating, summary: summary, trailer: trailer };
    //     console.log(newmovie);
         
        fetch(`https://62d0ce051cc14f8c088e8f5e.mockapi.io/movies`, 
        {method: "POST",
        body: JSON.stringify(newmovie),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => navigate("/movies"));


      }

  const navigate = useNavigate();

  return (
    <form onSubmit={handleSubmit} className='add-movie-form'>
      <TextField 
      error={touched.name && errors.name}
      helperText={touched.name && errors.name ? errors.name : null}
      label="Name" 
      variant="outlined" 
      name="name" 
      value={values.name}
       onChange={handleChange} 
       onBlur={handleBlur}/>
        

      <TextField error={touched.poster && errors.poster}
      helperText={touched.poster && errors.poster ? errors.poster : null}
       label="Poster" 
      variant="outlined" 
      name="poster" 
      value={values.poster}
       onChange={handleChange} 
       onBlur={handleBlur} />
            
      <TextField 
            error={touched.rating && errors.rating}
            helperText={touched.rating && errors.rating ? errors.rating : null}
        label="Rating" 
      variant="outlined" 
      name="rating" 
      value={values.rating}
       onChange={handleChange} 
       onBlur={handleBlur} />
      

       
      <TextField 
            error={touched.summary && errors.summary}
            helperText={touched.summary && errors.summary ? errors.summary : null}

         label="Summary" 
      variant="outlined" 
      name="summary" 
      value={values.summary}
       onChange={handleChange} 
       onBlur={handleBlur} />
      

      <TextField 
            error={touched.trailer && errors.trailer}
       helperText={touched.trailer && errors.trailer ? errors.trailer : null}

      label="Trailer" 
      variant="outlined" 
      name="trailer" 
      value={values.trailer}
       onChange={handleChange} 
       onBlur={handleBlur} />
       
      <Button type="submit" variant="contained"> Add Movie</Button>




    </form>


  );
}
