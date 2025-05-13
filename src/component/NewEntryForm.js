import {Container } from "semantic-ui-react";
import MainHeader from "./MainHeader";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryForm from "./EntryForm";

function NewEntryForm({addTransaction, description, amount, isExpense, setDescription, setAmount, setIsExpense}) {

    return (
      <Container>
        <MainHeader title="Add Transaction" type="h3"/>
        <EntryForm 
        description={description}
        amount={amount}
        isExpense={isExpense}
        setAmount={setAmount}
        setDescription={setDescription}
        setIsExpense={setIsExpense}/>

        <ButtonSaveOrCancel addTransaction={addTransaction} />
      </Container>
    );
}
export default NewEntryForm;