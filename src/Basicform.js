import { useFormik } from "formik";
import * as yup from "yup";

const formvalidationschema = yup.object({
  email: yup
  .string()
  .email("Pls provide a valid email")
  .min(5, "need a longer email")
  .required("why not fill this email?"),
  password: yup
  .string()
  .min(8 , "need a longer password")
  .max(12)
  .required("why not fill this password"),
})

export function Basicform() {
 const {handleSubmit, handleChange, values, errors, touched, handleBlur  } = useFormik ({
  initialValues: {email: "valli@gmail.com" , password: ""},
  validationSchema: formvalidationschema,
  onSubmit: (values) => {
     console.log("onSubmit", values);
  },
 });
  return (
    <form onSubmit={handleSubmit}>
      <input name="email" value={values.email}
       onChange={handleChange} 
       onBlur={handleBlur} 
       type="email" placeholder='email' />

     {touched.email && errors.email ? errors.email : null}
      <input name="password" value={values.password} 
      onChange={handleChange} 
      onBlur={handleBlur} 
      type="password" placeholder='password' />

      {touched.password && errors.password ? errors.password : null}

      {/* <pre> Values: {JSON.stringify(formik.values)} </pre>
      <pre> Errors: {JSON.stringify(formik.errors)} </pre>
      <pre> Touched: {JSON.stringify(formik.touched)} </pre> */}

      <button type="submit">
        Submit
      </button>
    </form>

  );
}
