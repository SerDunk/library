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
    if (bookName.trim() === '' || bookAuthor.trim() === '') {
        alert('Please enter both book name and author before adding.');
        return; 
    }
    book=new Book(bookName,bookAuthor)
    library.push(book)
}

function createCard(book){
    let card=document.createElement('div')
    card.setAttribute('data-id',dataSet)
    let title=document.createElement('h1')
    let author=document.createElement('h2')
    let removeBtn=document.createElement('button')
    let read=document.createElement('button')
    let notRead=document.createElement('button')
    read.classList.add('remBtn')
    notRead.classList.add('remBtn')
    read.textContent="Read"
    notRead.textContent="Not Read"

    removeBtn.setAttribute('data-id',dataSet)
    removeBtn.setAttribute('class','remove')
    dataSet=dataSet+1
    removeBtn.textContent='Remove'
    removeBtn.classList.add('remBtn')
    title.textContent=book.name
    author.textContent='By '+book.author
    card.append(title,author)
    card.append(read,notRead)
    card.append(removeBtn)
    read.addEventListener('click',()=>{
        card.classList.remove('not-read')
        card.classList.toggle('read')
    })
    notRead.addEventListener('click',()=>{
        card.classList.remove('read')
        card.classList.add('not-read')
    })
    read.classList.add('readHover')
    notRead.classList.add('notReadHover')
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



