const library=[]
const addBtn=document.querySelector('.add')
const bookForm=document.querySelector('.book-add')
const submitBtn=document.querySelector('#submit')
const pageContent=document.querySelector('.content')
let indexToRemove
let dataSet=0
let bookName
let bookAuthor

function Book(name,author){
    this.name=name;
    this.author=author;
}

function addBook(){
    bookName=document.querySelector('#bookName').value
    bookAuthor=document.querySelector('#bookAuthor').value
    book=new Book(bookName,bookAuthor)
    library.push(book)
}

function createCard(book){
    let card=document.createElement('div')
    card.setAttribute('data-id',dataSet)
    let title=document.createElement('h1')
    let author=document.createElement('h2')
    let removeBtn=document.createElement('button')

    removeBtn.setAttribute('data-id',dataSet)
    removeBtn.setAttribute('class','remove')
    dataSet=dataSet+1
    removeBtn.textContent='Remove'
    title.textContent=book.name
    author.textContent='By '+book.author
    card.append(title,author)
    card.append(removeBtn)
    card.classList.add('card')
    pageContent.appendChild(card)
    
    function removeCard(){
        indexToRemove=removeBtn.getAttribute('data-id')
        library.splice(indexToRemove,1)
    }
    removeBtn.addEventListener('click',()=>{
        removeCard()
        let cardToRemove=document.querySelector(`[data-id="${indexToRemove}"]`);
        cardToRemove.remove()
        console.log(library)
    })
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



