import ExpenseItem from './components/ExpenseItem';
import './App.css';
const para = document.createElement('p');
para.textContent = 'This is also visible';
document.getElementById('root').append(para);
function App() {
  const expenses = [
    {
      id : "e1",
      title: 'toilet paper',
      amount:94.12,
      date: new Date (2020,8,14),
    },
    {
      id: "e2",
      title: "new TV",
      amount: "85.46",
      date: new Date(2021,7,14),
    },
    {
      id:"e3",
      title:"new bike",
      amount:"56.53",
      date: new Date(2021,3,28),
    }


  ]
  return (
    <div>
      <h2>Let's Get Started</h2>
      <p>This is also visible</p>
      <ExpenseItem
       title={expenses[0].title}
       amount={expenses[0].amount}
       date={expenses[0].date}
       />
      <ExpenseItem title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
     />
      <ExpenseItem
       title={expenses[2].title}
       amount={expenses[2].amount}
       date={expenses[2].date}
     />
    </div>
  );
}

export default App;
