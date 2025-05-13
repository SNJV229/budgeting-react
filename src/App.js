import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import MainHeader from './component/MainHeader';
import NewEntryForm from './component/NewEntryForm';
import DisplayBalance from './component/DisplayBalance';
import DisplayBalances from './component/DisplayBalances';
import TransactionHistoryBodies from './component/TransactionHisoryBodies';
import ModalEdit from './component/ModalEdit';

function App() {
  const [transactions, setTransactions] = useState(initialExpences);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState();
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen]= useState(false);
  const [transId, setTransId]=useState();
  const [total, setTotal]=useState();
  const [totalExpense, setTotalExpense] = useState();
  const [totalIncome, setTotalIncome] = useState();

  useEffect(() => {
    if(!isOpen && transId){
      const index = transactions.findIndex((transaction) => transaction.id === transId);
      const newTransactions = [...transactions]
      newTransactions[index].description = description;
      newTransactions[index].amount = amount;
      newTransactions[index].isExpense = isExpense;
      console.log('__________ New Transaction ________', newTransactions)
      setTransactions(newTransactions);
      resetTransaction();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isOpen])

  useEffect(() => {
    let totalIncome = 0;
    let totalExpense = 0;
    transactions.map((transaction) => {
      if(transaction.isExpense){
        return (totalExpense += transaction.amount); 
      } else{
        return (totalIncome += transaction.amount);
      }
    });
    setTotal(totalIncome - totalExpense);
    setTotalExpense(totalExpense);
    setTotalIncome(totalIncome);
    console.log("_____ TotalIncome __________", totalIncome , " _______ Total Expense ________" , totalExpense)
    console.log("_____ Total __________", total)
        // eslint-disable-next-line react-hooks/exhaustive-deps
  },[transactions])

  function deleteTransaction(id) {
    const newTransactions = transactions.filter((transaction) => transaction.id !== id);
    setTransactions(newTransactions);
  }

  function editTransaction(id){
    console.log(id);
    if(id){
      const index = transactions.findIndex((transaction) => transaction.id === id)
      const transaction = transactions[index];
      setTransId(id);
      setDescription(transaction.description);
      setAmount(Number(transaction.amount));
      setIsExpense(transaction.isExpense);
      setIsOpen(true);
    }
  }

  function addTransaction() {
    console.log(transactions);
    const newTransactions = transactions.concat({ 
      id: transactions.length + 1,
      description,
      amount: Number(amount), 
      isExpense
    })
    setTransactions(newTransactions);
    resetTransaction();
  }

  function resetTransaction(){
    setDescription('');
    setAmount('');
    setIsExpense(true);
  }

  return (
    <Container>
      <MainHeader title="Budget Tracker"/>
      <DisplayBalance title='Your Balance' value={'₹ '+ total} color='blue' size='tiny'/>
      <DisplayBalances totalExpense={totalExpense} totalIncome={totalIncome}/>
      <MainHeader title="Transaction History" type='h3'/>
      <TransactionHistoryBodies 
        transactions={transactions} 
        deleteTransaction={deleteTransaction} 
        setIsOpen={setIsOpen}
        editTransaction={editTransaction}/>
      <NewEntryForm 
        addTransaction = {addTransaction}
        description={description}
        amount={amount}
        isExpense={isExpense}
        setAmount={setAmount}
        setDescription={setDescription}
        setIsExpense={setIsExpense}/>
      <ModalEdit 
        isOpen={isOpen} 
        setIsOpen={setIsOpen}
        description={description}
        amount={amount}
        isExpense={isExpense}
        setAmount={setAmount}
        setDescription={setDescription}
        setIsExpense={setIsExpense}/>

    </Container>
  );
}
export default App;

var initialExpences = [
  { id: 1,description: 'Work Income', amount: 5000, isExpense: false },
  { id: 2,description: 'Rent', amount: 1500, isExpense: true },
  { id: 3,description: 'Groceries', amount: 500, isExpense: true },
  { id: 4,description: 'Utilities', amount: 300, isExpense: true },
  { id: 5,description: 'Transportation', amount: 200, isExpense: true },
  { id: 6,description: 'Entertainment', amount: 50, isExpense: true },
  { id: 7,description: 'BankInterest', amount: 500, isExpense: false }
]