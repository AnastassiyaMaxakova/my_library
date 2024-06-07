const addBtn = document.getElementById('addBtn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');
const addBookBtn = document.getElementById('addBookBtn');
const myLibrary = [];

addBtn.addEventListener('click', () => modal.showModal());
closeBtn.addEventListener('click', ()=> modal.close());
addBookBtn.addEventListener('click', addBookToLibrary);



function addBookToLibrary(){
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let readStatus = document.getElementById('checkbox').checked;
    myLibrary.push(new Book(title,author,pages,readStatus));
    console.log(myLibrary);
    clearForm();
    modal.close();

}

function Book(title,author,pages,readStatus){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function clearForm(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    document.getElementById('checkbox').checked = false;
}

const main = document.querySelector('main');

function displayBook(array){
    //for (let i =0; i<myLibrary.length; i++){
            let bookDiv = document.createElement('div');
            bookDiv.classList.add('bookContainer');
            main.appendChild(bookDiv);

            /*let bookInfo =
            `<button class="removeBtn" id="removeBtn">x</button>
                <div class="bookInfo">
                    <p class="title">Title:${myLibrary[i].title}</p>
                    <p class="author">Author:${myLibrary[i].author}</p>
                    <p class="pages">Pages:${myLibrary[i].pages}</p>
                    <p class="readStatus">Read:${myLibrary[i].readStatus=== false? 'No' : 'Yes'}</p>
                </div> `;*/

            let bookInfo =
            `<button class="removeBtn" id="removeBtn">x</button>
                <div class="bookInfo">
                    <p class="title">Title:Hey</p>
                    <p class="author">Author:Day</p>
                    <p class="pages">Pages:Say</p>
                    <p class="readStatus">Read:no</p>

                </div> `;
            bookDiv.insertAdjacentHTML('beforeend',bookInfo)
        //}
}

displayBook();
displayBook();
displayBook();
displayBook();
displayBook();