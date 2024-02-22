import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import { bookProps } from './bookArray';
import { Book } from './Book';


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



ReactDOM.render(<BestSellingBooks />, document.getElementById('root'));