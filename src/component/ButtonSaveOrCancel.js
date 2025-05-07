import React from "react";
import { Button } from "semantic-ui-react";

function ButtonSaveOrCancel({ onSave, onCancel }) {
    return (
        <Button.Group>
          <Button color='red'>Cancel</Button>
          <Button.Or />
          <Button color='green' type='submit'>Add Transaction</Button>
        </Button.Group>
    );
    }
export default ButtonSaveOrCancel;