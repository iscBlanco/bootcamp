import React from 'react'
import BookItem from './BookItem'
import bookData from './bookData'

const BookList = () => {

  let datos = bookData.map((item)=>{
      return(<BookItem
        key={item.id}
        item={item}
      />)
      
  })

  return (
    <div className="card">
      <div className="card-content">
        <h2 className="title is-3">Últimas órdenes</h2>
        {datos}
        <button className="button is-link is-outlined">Ver todas</button>
      </div>
    </div>
  )
}

export default BookList