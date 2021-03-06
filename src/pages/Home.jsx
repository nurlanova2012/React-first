import React from "react";
import Categories from "../components/Categories/Categories";
import Sort from "../components/Sort/Sort";
import BookBlock from "../components/BookBlock/BookBlock";


function Home({bookItems}) {
    return (

        <div className="container">
        <div className="content__top">
          <Categories
          onClick={(itemName)=> console.log(itemName)}
           items = {["Сказки", "Мальчикам", "Девочкам", "Энциклопедии"]}/>
           <Sort
            items = {[ "Популярности", "Цене", "алфавиту"]} />
        </div>
        <h2 className="content__title">Все книги</h2>
        <div className="content__items">
        {bookItems.map((book) => (<BookBlock key={book.idx} {...book}/>))}
          </div>
      </div>
   
    )
}


export default Home;
