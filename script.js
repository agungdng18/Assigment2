// Array untuk menyimpan daftar belanja
const shoppingItems = [];

// Function untuk menambahkan item ke daftar belanja
function addItem() {
    const newItem = document.getElementById("itemInput").value;
    if (newItem !== "") {
        shoppingItems.push(newItem);
        document.getElementById("itemInput").value = "";
        displayItems();
    } else {
        alert("Silakan masukkan item terlebih dahulu!");
    }
}

// Function untuk menampilkan daftar belanja
function displayItems() {
    const listElement = document.getElementById("shoppingList");
    listElement.innerHTML = "";
    for (let i = 0; i < shoppingItems.length; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = shoppingItems[i];
        listElement.appendChild(listItem);
    }
}
