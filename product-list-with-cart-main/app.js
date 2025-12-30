// app.js

// Selectors
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
const cartContainer = document.querySelector('.cart-container');
const cartQuantity = document.querySelector('.cart-quantity');
const cartContent = document.querySelector('.cart-content');
const emptyCartMessage = document.querySelector('.empty-cart-message');
let cartItems = [];

// Create order confirmation modal
function createOrderConfirmationModal() {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <h2>Order Confirmation</h2>
            <p>Your order has been confirmed!</p>
            <button class="close-modal">Close</button>
        </div>
    `;
    document.body.appendChild(modal);
    
    // Close modal event
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.remove();
    });
}

// Add item to cart
function addToCart({ name, price, image }) {
  const existingItem = cartItems.find(item => item.name === name);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cartItems.push({ name, price, quantity: 1, image });
  }
  updateCart();
}

// Remove item from cart
function removeFromCart(itemName) {
    cartItems = cartItems.filter(item => item.name !== itemName);
    updateCart();
}

// Update cart display
function updateCart() {
  const cartList = document.querySelector('.cart-items');
  const cartQuantity = document.querySelector('.cart-quantity');
  const totalAmount = document.querySelector('.order-total-amount');
  const emptyMessage = document.querySelector('.empty-cart-message');
  const emptyImage = document.getElementById('empty-cart-image');
  const cartSummary = document.getElementById('cart-summary'); // <-- the wrapper div

  cartList.innerHTML = '';
  let total = 0;

  if (cartItems.length === 0) {
    emptyMessage.style.display = 'block';
    emptyImage.style.display = 'block';
    totalAmount.textContent = '$0.00';
    cartQuantity.textContent = '0';
    cartSummary.style.display = 'none'; // <-- hide cart content when empty
    return;
  }

  emptyMessage.style.display = 'none';
  emptyImage.style.display = 'none';
  cartQuantity.textContent = cartItems.length;
  cartSummary.style.display = 'block'; // <-- show cart content when not empty

  cartItems.forEach(item => {
    total += item.price * item.quantity;

    const li = document.createElement('li');
    li.innerHTML = `
      ${item.name} × ${item.quantity} — $${(item.price * item.quantity).toFixed(2)}
      <img src="./assets/images/icon-remove-item.svg" 
           alt="Remove" 
           class="remove-icon" 
           onclick="removeFromCart('${item.name}')">
    `;
    cartList.appendChild(li);
  });

  totalAmount.textContent = `$${total.toFixed(2)}`;
}



// Add event listeners to remove and quantity buttons
function addRemoveEventListeners() {
    const removeButtons = document.querySelectorAll('.remove-item');
    const increaseButtons = document.querySelectorAll('.increase-quantity');
    const decreaseButtons = document.querySelectorAll('.decrease-quantity');

    removeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const itemName = e.target.dataset.name;
            removeFromCart(itemName);
        });
    });

    increaseButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const itemName = e.target.dataset.name;
            const item = cartItems.find(cartItem => cartItem.name === itemName);
            item.quantity++;
            updateCart();
        });
    });

    decreaseButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const itemName = e.target.dataset.name;
            const item = cartItems.find(cartItem => cartItem.name === itemName);
            if (item.quantity > 1) {
                item.quantity--;
            } else {
                removeFromCart(itemName);
            }
            updateCart();
        });
    });
}

// Confirm order
function confirmOrder() {
    if (cartItems.length > 0) {
        createOrderConfirmationModal();
    } else {
        alert('Your cart is empty!');
    }
}

// Start new order
function startNewOrder() {
  cartItems = [];
  updateCart();
  modal.classList.add('hidden');
  document.getElementById('cart-items').innerHTML = '';
  document.getElementById('order-total-amount').textContent = '$0.00';
  document.getElementById('empty-cart').style.display = 'block';
}

// Event listeners for add to cart buttons
addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const dessertCard = e.target.closest('.dessert-card');
        const itemName = dessertCard.querySelector('.dessert-name').textContent;
        const itemPrice = parseFloat(dessertCard.querySelector('.dessert-price').textContent.replace('$', ''));
        const itemImage = dessertCard.querySelector('img').getAttribute('src'); // ✅ Get image

        addToCart({ name: itemName, price: itemPrice, image: itemImage }); // ✅ Include image
    });
});



const confirmBtn = document.getElementById('confirm-button');
const modal = document.getElementById('order-modal');
const confirmedItemsList = document.getElementById('confirmed-items-list');
const modalTotalAmount = document.getElementById('modal-total-amount');
const newOrderBtn = document.getElementById('new-order-btn');

confirmBtn.addEventListener('click', () => {
  if (cartItems.length === 0) {
    alert('Your cart is empty!');
    return;
  }

  confirmedItemsList.innerHTML = '';

  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${item.name} x ${item.quantity}</span>
      <span>$${(item.price * item.quantity).toFixed(2)}</span>
    `;
    confirmedItemsList.appendChild(li);
  });

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  modalTotalAmount.textContent = `$${total.toFixed(2)}`;

  modal.classList.remove('hidden');
});


// Start New Order
newOrderBtn.addEventListener('click', () => {
  document.getElementById('cart-items').innerHTML = '';
  document.getElementById('order-total-amount').textContent = '$0.00';
  document.getElementById('empty-cart').style.display = 'block';
  modal.classList.add('hidden');
});


// Show Order Confirmation Modal with Images
function showOrderConfirmationModal(cartItems) {
  const modal = document.getElementById("order-modal");
  const confirmedList = document.getElementById("confirmed-items-list");
  const totalAmountDisplay = document.getElementById("modal-total-amount");

  confirmedList.innerHTML = "";

  let total = 0;

  cartItems.forEach(item => {
    total += item.price * item.quantity;

    const li = document.createElement("li");
    li.classList.add("confirmed-item");

    li.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="confirmed-item-image" />
      <div class="confirmed-item-details">
        <p class="item-name">${item.name}</p>
        <p class="item-qty-price">${item.quantity}x @ $${item.price.toFixed(2)}</p>
      </div>
      <strong class="item-total">$${(item.price * item.quantity).toFixed(2)}</strong>
    `;

    confirmedList.appendChild(li);
  });

  totalAmountDisplay.textContent = `$${total.toFixed(2)}`;
  modal.classList.remove("hidden");
}


// Event listeners for "Add to Cart"
addToCartButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const dessertCard = e.target.closest('.dessert-card');
    const itemName = dessertCard.querySelector('.dessert-name').textContent;
    const itemPrice = parseFloat(dessertCard.querySelector('.dessert-price').textContent.replace('$', ''));
    const itemImage = dessertCard.querySelector('img').getAttribute('src');

    addToCart({ name: itemName, price: itemPrice, image: itemImage });
  });
});

// Confirm Order Button
confirmBtn.addEventListener('click', () => {
  if (cartItems.length === 0) {
    alert('Your cart is empty!');
    return;
  }
  showOrderConfirmationModal(cartItems);
});

// Start New Order Button
newOrderBtn.addEventListener('click', startNewOrder);


