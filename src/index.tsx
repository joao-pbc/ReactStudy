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
},
{
  image: "https://images-na.ssl-images-amazon.com/images/I/913C+MR3S5L._AC_UL600_SR600,400_.jpg",
  title: "The Woman",
  price: "US$ 19,21"
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
 
  const pimba = () => {
    alert("click");
  }
  return (
    <article className='books'>
      <img src={image} alt="livro" />
      <h1>{title}</h1>
      <p>{price}</p>
      <button type="button" onClick={pimba}>
        Event test  
      </button>
    </article>
  );
}

ReactDOM.render(<BestSellingBooks />, document.getElementById('root'));