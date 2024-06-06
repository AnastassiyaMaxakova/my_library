const addBtn = document.getElementById('addBtn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');

addBtn.addEventListener('click', () => modal.showModal())
closeBtn.addEventListener('click', ()=> modal.close())