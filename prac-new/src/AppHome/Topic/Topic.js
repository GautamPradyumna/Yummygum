import React,{useState,setState} from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../../FormikController/FormikController'
import classes from './Topic.module.scss'
import Button from '../../Ui/Button/Button';

function Topic (props) {
  const[contentName,setContentName]=useState('video');
  const options = [
    { key: 'Your great project', value: 'project' },
    { key: 'Meeting for a coffee', value: 'coffee' },
    { key: 'Birds and bees', value: 'birds' },
    { key: 'Plan a video call', value: 'video' }
  ]

  const initialValues = {
    topicName:contentName
  }

  const onSubmit = values => {
    //console.log('Form data', values);
    setContentName(values.topicName);
    console.log(contentName,values.topicName);
    props.callBack(values.topicName);
  }

  return (
    <div className={classes.topicwrapper}>
      <div>
          <div>
            <h2 className={classes.h2}>Let's talk.</h2>
            <p className={classes.share}>
              Share your excitement with us.<br/>
              <a href="mailto:info@yummygum.com" className={classes.link}>
                <span>info@yummygum.com
                  <svg xmlns="https://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12">
                    <path class="arrow-vector" fill="#fff" fill-rule="evenodd" d="M120.828427,16.6568542 L111,16.6568542 L111,18.6568542 L120.828427,18.6568542 L117.585786,21.8994949 L119,23.3137085 L124.656854,17.6568542 L123.949747,16.9497475 L119,12 L117.585786,13.4142136 L120.828427,16.6568542 Z" transform="translate(-111 -12)"></path>
                  </svg>
                </span>
              </a>
            </p>
          </div>
          <div>
            <br/>
            <Formik
              enableReinitialize={true}
              initialValues={initialValues}
              onSubmit={onSubmit}
            >
              {formik => {
                return (
                  <Form enableReinitialize>
                    <FormikControl
                      control='radio'
                      label="Let's talk about"
                      name='topicName'
                      options={options}
                    />
                    <Button type='submit' text="Next"/>
                    
                  </Form>
                )
              }}
            </Formik>
          </div>
      </div>
    </div>
  )
}

export default Topic