let shoppingListItems = ["milk", "eggs", "bread"];

function addItem () {
    let itemInput = document.getElementById("new-item-text");
    let item = itemInput.value.trim();
    shoppingListItems = [...shoppingListItems, item];
    updateItems();
    itemInput.value = "";
};

function updateItems () {
    let listElement = document.getElementById("shopping-list-items");
    listElement.innerHTML = "";

    for (const shoppingItem of shoppingListItems) {
        let itemElement = document.createElement("li");
        itemElement.innerText = shoppingItem;
        listElement.appendChild(itemElement);
    }
};

function clearList () {
    shoppingListItems = [];
    updateItems();
};

updateItems();
