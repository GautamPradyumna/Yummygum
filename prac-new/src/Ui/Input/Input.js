import React from 'react'
import { Field, ErrorMessage,useField } from 'formik'
import "./Input.scss";
import TextError from '../TextError/TextError'

function Input (props) {
  const [field,meta]=useField(props);
  const { placeholder, name, ...rest } = props
  console.log(field,meta);
  return (
    <div className='form-control'>
      <Field autocomplete="off" name={name} id={name}>
             {({
               field, 
               form: { touched, errors },
               meta,
             }) => (
               <div>
                 {meta.touched && meta.error ? (
                   <input type="text" autocomplete="off" placeholder={placeholder} {...field} className={`invalid`}></input>
                 ):(
                  <input type="text" autocomplete="off" placeholder={placeholder} {...field} className={`inputbox`} />
                )}
               </div>
             )}
           </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default Input