import React from 'react'
import { Field, ErrorMessage,useField } from 'formik'
import TextError from '../TextError/TextError'
import classes from './TextArea.scss';

function Textarea (props) {
  const [field,meta]=useField(props);
  const { placeholder, name, ...rest } = props
  return (
    <div className='form-control'>
      {meta.touched && meta.error ? (
      <Field as='textarea' id={name} name={name} placeholder={placeholder} {...rest} className='invalidtextbox'/>):
      (<Field as='textarea' id={name} name={name} placeholder={placeholder} {...rest} className='textbox'/>)}
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default Textarea