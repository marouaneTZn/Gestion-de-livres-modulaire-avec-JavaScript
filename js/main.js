import { books } from "./books.js";
import {renderBooks} from "./ui.js"


renderBooks(books)


const searchInput = document.getElementById("search-input")

searchInput.addEventListener("input", (event) => {
    console.log(event.target.value)
    
    const results = books.filter((book) => {
        return book.title.toLowerCase().includes(event.target.value.toLowerCase());
    });

    renderBooks(results)

})



