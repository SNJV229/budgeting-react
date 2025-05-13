import { Button } from "semantic-ui-react";

function ButtonSaveOrCancel({ addTransaction }) {
    return (
        <Button.Group>
          <Button color='red'>Cancel</Button>
          <Button.Or />
          <Button 
            color='green' 
            type='submit' 
            onClick={() => addTransaction()}>
              Add Transaction
          </Button>
        </Button.Group>
    );
    }
export default ButtonSaveOrCancel;