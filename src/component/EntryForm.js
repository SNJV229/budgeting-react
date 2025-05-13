import { Form, FormCheckbox, Segment } from "semantic-ui-react";

function EntryForm({description, amount, isExpense, setDescription,setAmount, setIsExpense}){
    return (
        <>
        <Form unstackable>
          <Form.Group widths='equal'>
            <Form.Input 
              icon='tags'
              width={12}
              label='Transaction Name' 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder='Transaction Name' />
            <Form.Input 
              icon='inr'
              width={4}
              label='Amount' 
              iconPosition='left'
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder='Amount' />
          </Form.Group>
          <Segment compact>
            <FormCheckbox 
            toggle 
            label="Is Expense " 
            checked = {isExpense}
            onChange={() => setIsExpense(oldState => !oldState)} />
          </Segment>
        </Form>
        </>
    )
}

export default EntryForm;