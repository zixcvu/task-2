let cart = [];
function addToCart(productId) {
    const productElement = document.getElementById(`product-${productId}`);
    const productName = productElement.getElementsByTagName('h2')[0].innerText;
    const cartItem = cart.find(item => item.productId === productId);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ productId, productName, quantity: 1 });
    }

    updateCartDisplay();
}
function updateCartDisplay() {
    const cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = '';

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.productName} - Quantity: ${item.quantity}`;
        cartItemsElement.appendChild(listItem);
    });
}
function viewCart() {
    alert('Your cart contains ' + cart.length + ' item(s).');
}