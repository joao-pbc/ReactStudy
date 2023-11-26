import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';

function BestSellingBooks() {
  return (
    <>
      <section className='bookList'>
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </section>
    </>
  )
}

const Book = () => {

  return(
    <>
      <article className='books'>
        <img src="https://images-na.ssl-images-amazon.com/images/I/91n7p-j5aqL._AC_UL600_SR600,400_.jpg" alt="livro" />
        <h1>Book name</h1>
        <p>price</p>
        <p>Description</p>
      </article>
    </>
  );
}

/*const BookShelf = () => {

  return (
    <>
    </>
  );

}*/

ReactDOM.render(<BestSellingBooks />, document.getElementById('root'));