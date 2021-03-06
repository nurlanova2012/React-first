import {Route} from "react-router-dom";
import React, {useEffect, useState } from "react";
import Header from "./components/Header/Header";
import {Home, Cart} from "./pages";




import "./App.scss";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() =>{
    fetch("http://localhost:3000/db.json").then((response) =>{
      response.json().then((json)=>{
        setBooks(json.books);
      });
    });
  }, []);
  return (
    <div className="wrapper">
       <Header/>
      <div class="content">
       <Route exact path="/" render={()=> <Home bookItems={books}/>}/>
       <Route exact path="/cart" companent={Cart}/>

        </div>
        </div>
  );
}

export default App;
