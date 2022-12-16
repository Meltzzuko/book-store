import { useEffect, useState, useRef } from "react";
import BookDetail from "./components/BookDetail";
import Book from "./models/Book";
import Category from "./models/Category";
import Repo from './repositories'

function App() {

  const [bookList, setBookList] = useState<Book[]>([])
  const [categoryList, setCategoryList] = useState<Category[]>([])
      
  const fetchCBookList = async () => {
    const result = await Repo.books.getAll()
    if (result){
      setBookList(result)
    }
  }
  const fetchCategoryList = async () => {
    const result = await Repo.categorise.getAll()
    if (result){
      setCategoryList(result)
    }
  }
  
  
  useEffect(() => {
    fetchCategoryList()
    fetchCBookList()
  },[])

  return (
    <div>
      <div>
        {categoryList.map(category => 
          <option key={category.id} value={category.id}> {category.title}</option>
        )}
        <hr />
      </div>

      {bookList.map( book =>
        <div key={book.id}>
          <BookDetail {...book}/>
          <hr />
        </div>
      )}

    </div>
    
  );
}

export default App;
