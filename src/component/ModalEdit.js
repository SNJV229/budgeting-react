import { Button, Modal } from "semantic-ui-react";
import EntryForm from "./EntryForm";

function ModalEdit ({isOpen, setIsOpen, description, amount, isExpense, setAmount, setDescription, setIsExpense}){
    return(
        <Modal open = {isOpen}>
            <Modal.Header> Edit Transaction </Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <EntryForm 
                        description={description}
                        amount={amount}
                        isExpense={isExpense}
                        setAmount={setAmount}
                        setDescription={setDescription}
                        setIsExpense={setIsExpense}/>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => setIsOpen(false)}>
                    Close
                </Button>
                <Button onClick={() => setIsOpen(false)} positive>
                    Save
                </Button>
            </Modal.Actions>
        </Modal>
    )
}
export default ModalEdit;