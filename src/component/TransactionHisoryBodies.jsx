import { Container } from "semantic-ui-react";
import TransactionHistoryBody from "./TransactionHistoryBody";

function TransactionHistoryBodies({ transactions, deleteTransaction, editTransaction }) {
    return (
        <Container>
        {transactions.map((transaction) => (
            <TransactionHistoryBody
            {...transaction}
            key = {transaction.id}
            deleteTransaction = {deleteTransaction}
            editTransaction = {editTransaction}/>
        ))}        
        </Container>
    );
}
export default TransactionHistoryBodies;