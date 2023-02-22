import './App.css';
import Header from './Header';
import BookList from './BookList';
import Timer from './Timer';
import Clicker from './Clicker';
import Counter from './Couter';

function App() {

  const books = [
    {
      title: "Harry Potter",
      author: 'JK Rowling',
      year_written: 1875,
      edition: "Pengiun",
      price: 18.2 
    },
    {
      title: "Harry Potter 2",
      author: 'JK Rowling 2',
      year_written: 1871,
      edition: "Pengiun",
      price: 20 
    }
  
  ]
  return (
    <div className="App">
      <header className="App-header">

        <Header>Librery</Header>

        <Timer start={1}/>
        <Clicker/>

        <Counter/>
        <BookList bookList={books}/>

      </header> 
    </div>
  );
}

export default App;
