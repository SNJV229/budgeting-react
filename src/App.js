import { Button, Container, Form, Grid, Header, Icon, Segment, Statistic } from 'semantic-ui-react';
import './App.css';
import MainHeader from './component/MainHeader';
import NewEntryForm from './component/NewEntryForm';
import TransactionHistoryBody from './component/TransactionHistoryBody';
import DisplayBalance from './component/DisplayBalance';
import DisplayBalances from './component/DisplayBalances';

function App() {
  return (
    <Container>
      <MainHeader title="Budget Tracker"/>
      <DisplayBalance title='Your Balance' value='3,500.00' color='blue' size='tiny'/>
      <DisplayBalances/>

      <MainHeader title="Transaction History" type='h3'/>
      <TransactionHistoryBody 
          transColor='red' 
          title='First Transaction' 
          amount='INR 1,000'/>
      <TransactionHistoryBody
          transColor={'green'}
          title='Second Transaction'
          amount='INR 2,000'/>
      <TransactionHistoryBody
          transColor={'red'}
          title='Third Transaction'
          amount='INR 10,000'/>
      <TransactionHistoryBody
          transColor={'green'}
          title='Fourth Transaction'
          amount='INR 1,500'/>

      <NewEntryForm/>

    </Container>
  );
}

export default App;
