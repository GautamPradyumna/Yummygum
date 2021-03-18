import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../../FormikController/FormikController'
import classes from './Birds.module.scss'
import Button from '../../Ui/Button/Button';
import ArrowBack from '../../Ui/ArrowBack/ArrowBack';

function Birds () {

  const initialValues = {
    name:'',
    email: '',
    aboutYou: ''
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
    aboutYou: Yup.string()
    .required('Required')
    .max(40,"maximum 40 characters only")
    .min(10,"minimum 10 characters to be present"),
  })

  const onSubmit = values => {
    console.log('Form data', values);
    alert("Details have been captured succesfully");
  }

  return (
    <div className={classes.birdswrapper}>
    <div className={classes.visible}></div>
    <div className={classes.header}>
    <h1 >What's on your mind?</h1>
    </div>
    
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => {
        return (
          <>
          <div className={classes.head}>
            <h4>Personal details</h4>
          </div>
          <div className={classes.form}>
          <Form>
            <div className={classes.input}>
                <FormikControl
                  control='input'
                  type='text'
                  placeholder='Name'
                  name='name'
                />
                <br/>
                <FormikControl
                  control='input'
                  type='email'
                  placeholder='Email'
                  name='email'
                />
            </div>
            <div className={classes.textarea}>
            <FormikControl
              control='textarea'
              placeholder='What do you want to talk about?'
              name='aboutYou'
            />
            <br/>
            </div>
            <div className={classes.click}>
            <Button type='submit' disabled={!formik.isValid} text="Send Inquiry"/>
            </div>
              
          </Form>
          </div>
          </>
        )
      }}
    </Formik>
    </div>
    
  )
}

export default Birds