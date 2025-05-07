import React from "react";
import { Icon, Grid, Segment } from "semantic-ui-react";

function TransactionHistoryBody({ transColor, title, amount }) {
    return (
        <div style={{ marginBottom: '10px' }}>
            <Segment color={transColor} >
                <Grid columns={3} >
                <Grid.Row>
                    <Grid.Column width={10} testAlign='left'>
                    {title}
                    </Grid.Column>
                    <Grid.Column width={3} textAlign='right'>
                    {amount}
                    </Grid.Column>
                    <Grid.Column width={3}>
                    <Icon name='edit' color='red'/>
                    <Icon name='trash' color='red'/>
                    </Grid.Column>
                </Grid.Row>
                </Grid>
            </Segment>
        </div>
    );
}
export default TransactionHistoryBody;