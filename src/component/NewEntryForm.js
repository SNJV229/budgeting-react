import React from "react";
import { Button, Container, Form } from "semantic-ui-react";
import MainHeader from "./MainHeader";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";

function NewEntryForm() {
    return (
        <Container>
        <MainHeader title="Add Transaction" type="h3"/>
        <Form unstackable>
          <Form.Group widths='equal'>
            <Form.Input 
              icon='tags'
              width={12}
              label='Transaction Name' 
              placeholder='Transaction Name' />
            <Form.Input 
              icon='inr'
              width={4}
              label='Amount' 
              iconPosition='left'
              placeholder='Amount' />
          </Form.Group>
          <Form.Group inline>
            <label>Type</label>
            <Form.Radio label='Income' value='income' checked />
            <Form.Radio label='Expense' value='expense' />
          </Form.Group>
  
          
          <ButtonSaveOrCancel/>
        </Form>
        </Container>
    );
}
export default NewEntryForm;