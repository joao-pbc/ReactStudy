import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';

const bookProps = [{
  image: "https://images-na.ssl-images-amazon.com/images/I/91n7p-j5aqL._AC_UL600_SR600,400_.jpg",
  title: "Book name",
  price: "price"
},
{
  image: "https://images-na.ssl-images-amazon.com/images/I/51ha90+JbfL._AC_UL600_SR600,400_.jpg",
  title: "He leadeth me",
  price: "US$ 12,21"
}]


function BestSellingBooks() {
  return (
    <>
      <section className='bookList'>
        {bookProps.map((book) => {
          return (
           <Book {...book}/>
          );
        })}
      </section>
    </>
  )
}

const Book = ({ image, title, price }) => {
  return (
    <article className='books'>
      <img src={image} alt="livro" />
      <h1>{title}</h1>
      <p>{price}</p>
    </article>
  );
}

ReactDOM.render(<BestSellingBooks />, document.getElementById('root'));