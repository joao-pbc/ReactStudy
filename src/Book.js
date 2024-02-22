import React from "react";

export const Book = ({ image, title, price }) => {
 
    const pimba = (title) => {
      console.log(title);
    }
    return (
      <article className='books'>
        <img src={image} alt="livro" />
        <h1>{title}</h1>
        <p>{price}</p>
        <button type="button" onClick={() => pimba(title)}>
          Event test  
        </button>
      </article>
    );
}
