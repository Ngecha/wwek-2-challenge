let listForm = document.getElementById("list");  //this is the form where the user enters the item.
listForm.addEventListener("submit", function (e) {
  e.preventDefault();                              
  addItem(e.target.new_item.value);
  listForm.reset();                               //Clears the input box when enter is pressed .
});

function addItem(new_item) {
  let item = document.createElement("p");          //creates a paragraph where the new itm will be populated.
  let itemList = document.createElement("li");      //creates a list with the item
  item.textContent = `${new_item}`;                 // New_item is the user input
  let rem = document.createElement("button");
  rem.textContent = "Delete";                         // rem is a button that deletes the item
  itemList.appendChild(item);
  itemList.appendChild(rem);                          // When the user enters the item, both the item and the delete button are populated together
  rem.addEventListener("click", function (e) {
    e.target.parentNode.remove();                       //function that enables rem to delete the single item
  });
  document.getElementById("listing").appendChild(itemList);
  let del = document.getElementById("delete");               //del is the clear button
  del.addEventListener("click", function () {                 //function for delete button
    item.parentNode.remove();
  });
  itemList.addEventListener("click", function () {
    itemList.style.color = "Blue";                              //function to enable the user to mark purchased.
  });
}
