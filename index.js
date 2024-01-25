const library=[]
const addBtn=document.querySelector('.add')
const bookForm=document.querySelector('.book-add')
const submitBtn=document.querySelector('#submit')
const pageContent=document.querySelector('.content')
let bookName
let bookAuthor

function Book(name,author){
    this.name=name;
    this.author=author;
}

function addBook(){
    bookName=document.querySelector('#bookName').value
    bookAuthor=document.querySelector('#bookAuthor').value
    let book=new Book(bookName,bookAuthor)
    

    library.push(book)
}

function createCard(book){
    let card=document.createElement('div')
    let title=document.createElement('h1')
    let author=document.createElement('h2')
    title.textContent=book.name
    author.textContent='By '+book.author
    card.append(title,author)
    card.classList.add('card')
    pageContent.appendChild(card)
}

addBtn.addEventListener('click',()=>{
    bookForm.classList.remove('invisible')
})

submitBtn.addEventListener('click',()=>{
    event.preventDefault();
    addBook()
    createCard(library[library.length-1])
    bookForm.classList.add('invisible')
    console.log(library)
})