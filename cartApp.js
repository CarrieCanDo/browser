/*create fx called initializeCart to check if there is a cart in localStorage, if not, creates it*/
function initializeCart() {
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (!cart) {
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
    
    }
}
/*create fx that takes an object as a parameter (), retreive cart from storage
add item to the cart(push), stores updated cart back in storage.*/
function addItem(item) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
}

/*create fx removeItem takes itemID as a parameter, retrieves cart from localStorage,
removes item from cart, then stores the cart back in localStorage*/
function removeItem(itemID) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== itemID);
    localStorage.setItem('cart', JSON.stringify(cart));

}
/*create fx displayCart retieves the cart from localStorage and logs the cart to console*/
function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart'));
    console.log(cart);
}

initializeCart();

/*event listeners for add item form and display cart button to call the respective functions*/
document.getElementById('addItemForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const itemName = document.getElementById('itemName').value;
    const itemPrice = parseFloat(document.getElementById('itemPrice').value);

    const newItem = {
        id: Date.now(),
        name: itemName,
        price: itemPrice
    };

    addItem(newItem);
    // Clear the form fields after adding item
    document.getElementById('itemName').value = '';
    document.getElementById('itemPrice').value = '';
});


// Event listener for displaying the cart
document.getElementById('displayCartButton').addEventListener('click', function() {
  displayCart();
});
