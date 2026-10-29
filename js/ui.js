
export function renderBooks(books){
    const container = document.getElementById("books-container")
    container.classList.add("flex", "gap-3")
    
    
    container.innerHTML = "";
    books.forEach((book) => {
        const card = document.createElement("div")
        const title = document.createElement("h2")
        title.textContent = book.title
        title.classList.add("text-xl", "font-bold", "text-amber-950")
        
        const author = document.createElement("h3")
        author.textContent = book.author
        title.classList.add("text-xl", "text-amber-950")

        container.appendChild(card)
        card.classList.add(
            "bg-amber-50",
            "border",
            "border-amber-200",
            "rounded-xl",
            "p-6",
            "shadow-sm",
            
        );
        card.appendChild(title)
        card.appendChild(author)
        
    });
}