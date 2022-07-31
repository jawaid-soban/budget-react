import React from 'react'

import {Form} from 'semantic-ui-react'
import ButtonSaveOrCancel from './ButtonSaveOrCancel'

function NewEntryForm() {
  return (
    <Form unstackable>
    <Form.Group>
      <Form.Input 
        icon='tags'
        width={12}
        label='description'
        placeholder='New Shiney Thing'
      />
      <Form.Input 
        width={4}
        label='Value'
        placeholder='100.00'
        icon='dollar'
        iconPosition='left'
      />
    </Form.Group>
      <ButtonSaveOrCancel />
  </Form>
  )
}

export default NewEntryForm