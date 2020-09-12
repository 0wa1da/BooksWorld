import React from 'react'
import "./SearchArea.css"

export default function SearchArea({handlSearch,searchBooks,handlSort}) {
    return (
        <div className="searcharea-container">
            <form onSubmit={searchBooks}>
                <input type="search" className="searcharea-input" onChange={handlSearch} />
                <button className='searcharea-button'>Search</button>
                <select className='searcharea-option' defaultValue="Sort"  onChange={handlSort}>
                  <option className="searcharea-option-items" disabled style={{
                    display:"none"
                  }} value="Sort" >Sort</option>
                  <option className="searcharea-option-items" value="Newest" >Newest</option>
                  <option className="searcharea-option-items" value="Oldest" >Oldest</option>
                </select>
            </form>
        </div>
    )
}
