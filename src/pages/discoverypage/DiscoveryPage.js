import React, { Component } from 'react';
import "./DiscoveryPage.css";
import SearchArea from "../../component/searcharea/SearchArea";
import CollectionList from "../../component/collectionlist/CollectionList";

export default class DiscoveryPage extends Component {
  constructor(){
    super()
    this.state={
      searchField: '',
      books: [],
      sort: ''
    }
  }
  searchBooks = (e) => {
    e.preventDefault();
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchField}`)
    .then(response => response.json())
    .then(data =>{
      // const cleanCode = this.cleanCode(data)
      const cleanCode = this.cleanCode(data)
      this.setState({books : cleanCode})
      } 
    )
    .catch(()=>console.log('Error in searchBooks fcn'))
    // .then(console.log(this.state.books))    
  }

  handlSearch = (e) => {
    this.setState({searchField:e.target.value})
  }
  
  handlSort = (e) =>{
    this.setState({sort:e.target.value})
  }

  cleanCode = (data) =>{  
    const cleanedData = data.items.map((book) => {
      if(book.volumeInfo.hasOwnProperty('publishedDate') === false)
        book.volumeInfo['publishedDate'] = '0000'
      
      if(book.volumeInfo.hasOwnProperty('imageLinks') === false)
        book.volumeInfo['imageLinks'] = {thumbnail: 'https://www.westernheights.k12.ok.us/wp-content/uploads/2020/01/No-Photo-Available.jpg'}
      if(book.volumeInfo.hasOwnProperty('authors') === false)
        book.volumeInfo['authors'] = 'UnAvailable'
      
      return book;
      })
    return cleanedData;
  }

  render(){
    const sortedBooks = this.state.books.sort(
      (a,b) => {
        if(this.state.sort === 'Newest')
          return parseInt(b.volumeInfo.publishedDate.substring(0,4)) - parseInt(a.volumeInfo.publishedDate.substring(0,4))
        if(this.state.sort === 'Oldest')
          return parseInt(a.volumeInfo.publishedDate.substring(0,4)) - parseInt(b.volumeInfo.publishedDate.substring(0,4))
        return parseInt(a.volumeInfo.publishedDate.substring(0,4)) + parseInt(b.volumeInfo.publishedDate.substring(0,4))
      }
    )
    return (
      <div>          
        <SearchArea
          handlSearch={this.handlSearch}
          searchBooks={this.searchBooks} 
          handlSort={this.handlSort}
          />
          <CollectionList books={sortedBooks} />
      </div>
    )
  }
}

//useless code

// export function DiscoveryPagee() {
//   const [state, setState] =  useState({searchField: '', books: []})
  
//   const card = () =>{
//     state.books.map((book,i) => 
//       <CardItem
//             key = {i} 
//             src = {book.volumeInfo.imageLinks.thumbnail} 
//             title = {book.volumeInfo.title} 
//             auth = {book.volumeInfo.authors} 
//             published = {book.volumeInfo.publishedDate}
//           />)
//   }

//   const searchBooks = (e) => {
//     e.preventDefault();
//     fetch(`https://www.googleapis.com/books/v1/volumes?q=${state.searchField}`)
//     .then(response => response.json())
//     .then(data => setState({books : [...data.items]}))
//     .then(console.log(state.books))    
//     .catch(()=>console.log('error=> searchfield is empty'))

//     document.getElementById('collectionlist-cards').innerHTML=`${
//      card()
//     }`

//   }                              
// // should add hasProperty  
//   const handlSearch = (e) => {
//      setState({searchField:e.target.value})
//   }

//   return (
//     <div>
//       <SearchArea
//           handlSearch={handlSearch}
//           searchBooks={searchBooks} 
//           />
//           <CollectionList books={state.books} test={state.test}/>
//     </div>
//   )
// }


