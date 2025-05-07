import { Button, Container, Form, Grid, Header, Icon, Segment, Statistic } from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <Container>
      <header as='h1'>Budget Tracker</header>
      <Statistic size='small' color='blue'>
        <Statistic.Label>Your Balance:</Statistic.Label>
        <Statistic.Value>3,000.59</Statistic.Value>
      </Statistic>
      <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic size='small' color='green'>
                <Statistic.Label>Income:</Statistic.Label>
                <Statistic.Value>5,000.00</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Statistic size='small' color='red'>
                <Statistic.Label>Expenses:</Statistic.Label>
                <Statistic.Value>1,500.00</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>


      <Header as='h3'>Recent Transactions</Header>
      <Segment color='red' textAlign='center'>
        <Grid columns={3} >
          <Grid.Row>
            <Grid.Column width={10} testAlign='left'>
              First Transaction
            </Grid.Column>
            <Grid.Column width={3} textAlign='right'>
              INR 1,000
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' color='red'/>
              <Icon name='trash' color='red'/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color='red' textAlign='center'>
        <Grid columns={3} >
          <Grid.Row>
            <Grid.Column width={10} testAlign='left'>
              Second Transaction
            </Grid.Column>
            <Grid.Column width={3} textAlign='right'>
              INR 2,000
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' color='red'/>
              <Icon name='trash' color='red'/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color='green' textAlign='center'>
        <Grid columns={3} >
          <Grid.Row>
            <Grid.Column width={10} testAlign='left'>
              Third Transaction
            </Grid.Column>
            <Grid.Column width={3} textAlign='right'>
              INR 10,000
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' color='red'/>
              <Icon name='trash' color='red'/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color='red' textAlign='center'>
        <Grid columns={3} >
          <Grid.Row>
            <Grid.Column width={10} testAlign='left'>
              Fourth Transaction
            </Grid.Column>
            <Grid.Column width={3} textAlign='right'>
              INR 1,500
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' color='red'/>
              <Icon name='trash' color='red'/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>



      <Header as='h3'>Add Transaction</Header>
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
        <Button.Group>
          <Button color='green' type='submit'>Add Transaction</Button>
          <Button.Or />
          <Button color='red'>Cancel</Button>
        </Button.Group>
      </Form>

    </Container>
  );
}

export default App;
