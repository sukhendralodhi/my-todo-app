const addButton = document.querySelector(".add");
const inputEle = document.querySelector(".input");
const containerEle = document.querySelector(".container");

class Item {
  constructor(itemName) {
    this.createDiv(itemName);
  }
  createDiv(itemName) {
    // creating input element
    let input = document.createElement("input");
    input.value = itemName;
    input.disabled = true;
    input.classList.add("input-item");
    input.type = "text";

    // creating div element
    let itemBox = document.createElement("div");
    itemBox.classList.add("item-box");

    // edit button
    let editButton = document.createElement("button");
    editButton.classList.add("edit-Button");
    editButton.textContent = "Edit";

    // remove button
    let removeButton = document.createElement("button");
    removeButton.classList.add("remove-button");
    removeButton.textContent = "Remove";

    // append item in container
    containerEle.append(itemBox);

    // appending all element in itemBox
    itemBox.append(input);
    itemBox.append(editButton);
    itemBox.append(removeButton);

    // set eventListener to edit button
    editButton.addEventListener("click", () => {
      this.edit(input);
    });

    // set eventListener to remove button
    removeButton.addEventListener("click", () => {
      this.remove(itemBox);
    });
  }
  edit(input) {
    input.disabled = !input.disabled;
  }
  remove(itemBox) {
    containerEle.removeChild(itemBox);
  }
}

function check() {
  if (inputEle.value != "") {
    new Item(inputEle.value);
    inputEle.value = "";
  } else {
    alert("Please input something!");
  }
}

addButton.addEventListener("click", () => {
  console.log("Hello world");
  check();
});
