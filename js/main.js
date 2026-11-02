import { books } from "./books.js";
import {renderBooks} from "./ui.js"

console.table(books);
renderBooks(books)


const searchInput = document.getElementById("search-input")
const sortSelect = document.getElementById("sort-select")

function updateBooks() {
    const searchText = searchInput.value.toLowerCase();
    const sortBy = sortSelect.value;
    

    const filteredBooks = books.filter((book) => {
        return book.title.toLowerCase().includes(searchText) ||
               book.author.toLowerCase().includes(searchText);
    });

     
    
    const sortedBooks = [...filteredBooks];
    if(sortBy === "title"){
        sortedBooks.sort((a, b) => {
            return a.title.localeCompare(b.title)
        })

    }

    else if(sortBy === "author"){
        sortedBooks.sort((a, b) => {
            return a.author.localeCompare(b.author)
        })
    }
    
    else if(sortBy === "year"){
        sortedBooks.sort((a, b) => {
            return a.year - b.year
        })
    }


    renderBooks(sortedBooks);
}


sortSelect.addEventListener("change", updateBooks)

searchInput.addEventListener("input", updateBooks)



