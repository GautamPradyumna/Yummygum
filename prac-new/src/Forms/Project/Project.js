import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../../FormikController/FormikController'
import classes from './Project.module.scss';
import Button from '../../Ui/Button/Button';

function Project () {
  const checkboxOptions = [
    { key: 'Desktop', value: 'desktop' },
    { key: 'Web', value: 'web' },
    { key: 'Mobile', value: 'mobile' },
    { key: 'Other', value: 'other' }
  ]

  const options = [
    { key: '1 month', value: '1month' },
    { key: '2-3 months', value: '2-3months' },
    { key: '4+ months', value: '4+months' }
  ]

  const initialValues = {
    name:'',
    company:'',
    email: '',
    budget:'',
    aboutProject: '',
    projectType: [],
    timeFrame:'2-3months'
  }

  const validationSchema = Yup.object({
    name: Yup.string()
    .required('Required')
    .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
    .max(40,"maximum 40 characters only")
    .min(3,"minimum 3 characters to be present"),
    email: Yup.string()
      .email('Invalid email format')
      .required('Required'),
    aboutProject: Yup.string()
    .required('Required')
    .max(40,"maximum 40 characters only")
    .min(10,"minimum 10 characters to be present")
  })

  const onSubmit = (values,onSubmitProps) => {
    console.log('Form data', values);
    alert("Details have been captured succesfully");
    onSubmitProps.resetForm();
  }

  return (
    <div className={classes.projectwrapper}>
    <div className={classes.visible}></div>
    <div className={classes.header}>
    <h1 >Let's craft your product.</h1>
    </div>
    <div className={classes.container}>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => {
        return (
          <Form>
            <div className={classes.text}>
              <h3><label>Personal Details</label></h3>
              <FormikControl
                control='input'
                type='text'
                placeholder='Name'
                name='name'
              />
              <br/>
              <FormikControl
                control='input'
                type='text'
                placeholder='Company'
                name='company'
              />
              <br/>
              <FormikControl
                control='input'
                type='email'
                placeholder='Email'
                name='email'
              />
              <br/>
              <FormikControl
                control='input'
                type='text'
                placeholder='Budget'
                name='budget'
              />
              </div>
              <div className={classes.textarea}>
                <FormikControl
                  control='textarea'
                  placeholder='Tell us about you project...'
                  name='aboutProject'
                />
                <br/>
              </div>
              <div className={classes.selection}>
                <FormikControl
                  control='radio'
                  label='Timeframe'
                  name='timeFrame'
                  options={options}
                />
                <FormikControl
                  control='checkbox'
                  label='Project type'
                  name='projectType'
                  options={checkboxOptions}
                />
              </div>
              <div className={classes.click}>
            <Button type='submit' disabled={!formik.isValid} text="Send Inquiry"/>
            </div>
          </Form>
        )
      }}
    </Formik>
    </div>
    </div>
  )
}

export default Project