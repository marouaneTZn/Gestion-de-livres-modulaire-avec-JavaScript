
export function renderBooks(books){
    const container = document.getElementById("books-container")
    container.classList.add( "gap-3")
    
    
    container.innerHTML = "";
    books.forEach((book) => {
        const card = document.createElement("div")
        card.classList.add("flex", "gap-5", "justify-center", "mt-5")
        
        const title = document.createElement("h2")
        title.textContent = book.title
        title.classList.add(
            "text-xl", 
            "font-bold", 
            "text-amber-950"
        )
        
        const author = document.createElement("h3")
        author.textContent = book.author
        author.classList.add(
            "text-xl", 
            "text-amber-950"
        )

        const type = document.createElement("h4")
        type.textContent = book.genre
        type.classList.add(
            "bg-orange-200",
            "text-green-800",
            "px-3",
            "py-1",
            "rounded-full",
            "text-sm",
            "w-fit",
            "ml-auto",

            )

        const statu = document.createElement("span")
        if(book.status === "reading"){
            statu.classList.add("bg-green-100", "text-green-800", "p-2", "rounded-full")
            statu.textContent = book.status
        }
        else if(book.status === "read"){
            statu.classList.add("bg-orange-100", "text-orange-950", "p-2", "rounded-full")
            statu.textContent = book.status
        }
        else if (book.status === "to-read") {
            statu.classList.add("bg-amber-100", "text-amber-800");
        }
        

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
        card.appendChild(type)
        card.appendChild(statu)
        
    });
}