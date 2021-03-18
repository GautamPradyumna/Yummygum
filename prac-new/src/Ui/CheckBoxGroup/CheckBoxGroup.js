import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from '../TextError/TextError'
import classes from './CheckBoxGroup.module.scss'

function CheckboxGroup (props) {
  const { label, name, options, ...rest } = props
  return (
    <div className='form-control'>
      <h3><label className={classes.head}>{label}</label></h3>
      <br/>
      <Field name={name}>
        {({ field }) => {
          return options.map(option => {
            return (
              <React.Fragment key={option.key} className={classes.option}>
                <input
                  type='checkbox'
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                />
                <label htmlFor={option.value} className={classes.key}>{option.key}</label>
                <br/>
                <br/>
              </React.Fragment>
            )
          })
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default CheckboxGroup