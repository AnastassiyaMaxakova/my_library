const addBtn = document.getElementById('addBtn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');
const addBookBtn = document.getElementById('addBookBtn');
const myLibrary = [];

addBtn.addEventListener('click', () => modal.showModal());
closeBtn.addEventListener('click', ()=> modal.close());
addBookBtn.addEventListener('click', addBookToLibrary());


function addBookToLibrary(){
    /*let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let readStatus = document.getElementById('checkbox').checked;
    myLibrary.push(new Book(title,author,pages,readStatus));*/
    


    //addBookBtn.addEventListener('click',()=>console.log(readStatus));

}

function Book(title,author,pages,readStatus){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}
