import React from 'react'
import Input from '../Ui/Input/Input'
import Textarea from '../Ui/TextArea/TextArea'
import RadioButtons from '../Ui/RadioButtons/RadioButtons'
import CheckboxGroup from '../Ui/CheckBoxGroup/CheckBoxGroup';

function FormikControl (props) {
  const { control, ...rest } = props
  switch (control) {
    case 'input':
      return <Input {...rest} />
    case 'textarea':
      return <Textarea {...rest} />
    case 'radio':
      return <RadioButtons {...rest} />
    case 'checkbox':
      return <CheckboxGroup {...rest} />
    default:
      return null
  }
}

export default FormikControl