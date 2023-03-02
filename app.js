const list = document.querySelector(".list");
class Books {
    constructor(title,writer,code){
        this.title = title;
        this.writer = writer;
        this.code = code;
    };
};
    
    let addBOOK = (BookRow1) => {
    const secondTrow = document.createElement("tr");
    secondTrow.classList.add("secondTrow");
    secondTrow.innerHTML = `<td>${BookRow1.title}</td>
                            <td>${BookRow1.writer}</td>
                            <td>${BookRow1.code}</td>
                            <td class="exist">X</td>`;
        list.appendChild(secondTrow);
    };



//////////////////////////
    
class UI{
    static displayBooks(){
        const storedBooks = [
          {title:"The Hypothesis Love",
           author:"Ali Hazelwood",
           code:"1001"},
        ];
        let books = storedBooks;
        books.forEach((book) =>{
            UI.addBookToList(book);
        });
    };
    
    static addBookToList = (book) => {
            const rows = document.createElement("tr");
            rows.innerHTML = `<td>${book.title}</td>
                              <td>${book.author}</td>
                              <td>${book.code}</td>
                              <td class="exist">X</td>`;
            list.appendChild(rows);
    };  




    static showAlert = (message) => {
        const div = document.createElement("div");
        div.classList.add("danger");
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector(".container");
        const form = document.getElementById("bookForm");
        container.insertBefore(div,form);
        setTimeout(() => {
            document.querySelector(".danger").remove()
        }, 3000)
    };
 



    static deleteList = (el) => {
        if(el.classList.contains("exist")){
            el.parentElement.remove();
        }
    };


    static clearFields = () => {
       let title = document.getElementById("title").value = ' ';
        let author = document.getElementById("author").value = ' ';
        let code = document.getElementById("#code").value = ' ';
    };
};
//display book
document.addEventListener("DOMContentLoaded",UI.displayBooks());


//Add Books

document.getElementById("btn").addEventListener("click", (e) =>{
    e.preventDefault()

    title = document.getElementById("title").value;
     author = document.getElementById("author").value;
     code = document.getElementById("#code").value;
     UI.clearFields();
     if(title === '' || author === '' || code === ''){
        UI.showAlert("pls fill in the blank");
     } else{
        let BookRow1 = new Books(title,author,code);
        console.log(BookRow1);
        addBOOK(BookRow1);
     };
});

//removing book list
document.getElementById("bookList").addEventListener("click", (e) => {
    UI.deleteList(e.target);
});
