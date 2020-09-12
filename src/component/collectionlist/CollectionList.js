import React from 'react'
import "./CollectionList.css"
import CardItem from '../carditem/CardItem'
export default function CollectionList(props) {

  return (
    <div className="collectionlist-container">
      {
        props.books.map((book,i) => 
          <CardItem
                key = {i} 
                src = {book.volumeInfo.imageLinks.thumbnail} 
                title = {book.volumeInfo.title} 
                auth = {book.volumeInfo.authors} 
                published = {book.volumeInfo.publishedDate}
              />)
      }
    </div>
  )
}
