import { Icon, Grid, Segment } from "semantic-ui-react";

function TransactionHistoryBody({ id, description, amount, isExpense = false, deleteTransaction, editTransaction }) {
    return (
        <div style={{ marginBottom: '10px' }}>
            <Segment color={isExpense ? 'red' : 'green'} >
                <Grid columns={3} >
                <Grid.Row>
                    <Grid.Column width={10} testAlign='left'>
                    {description}
                    </Grid.Column>
                    <Grid.Column width={3} textAlign='right'>
                    {amount}
                    </Grid.Column>
                    <Grid.Column width={3}>
                    <Icon name='edit' color='red' onClick = {() => editTransaction(id)}/>
                    <Icon name='trash' color='red' onClick={() => deleteTransaction(id)}/>
                    </Grid.Column>
                </Grid.Row>
                </Grid>
            </Segment>
        </div>
    );
}
export default TransactionHistoryBody;