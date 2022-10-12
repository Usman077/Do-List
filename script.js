

const items = document.querySelector('.items');
const data  = document.querySelector('.data');
 // getting the input
  items.addEventListener("keyup",
  function(event) {
    if (event.key === 'Enter') {
        dataItem(this.value)
        this.value = '';
    }
  })
  // adding the input into the data
const dataItem = (items)=>{
let listItem = document.createElement('li')
listItem.innerHTML= `${items}   <i class="fa fa-close" style="font-size:23px"></i>`;
// deleting the input
listItem.querySelector("i").addEventListener("click",()=>{
    listItem.remove();
})

data.appendChild(listItem)
}

