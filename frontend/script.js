// Script to handle basic cart functionality

// Initialize cart as an empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add product to cart
function addToCart(product) {
  // Check if product is already in cart
  const existingProduct = cart.find(item => item.id === product.id);

  if (existingProduct) {
    // Increment the quantity of the existing product
    existingProduct.quantity += 1;
  } else {
    // Add new product to cart
    cart.push({ ...product, quantity: 1 });
  }

  // Update cart in localStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  // Optionally, update the UI
  alert('Product added to cart!');
}

// Get all "Add to Cart" buttons
const addCartButtons = document.querySelectorAll('.product button');

// Attach event listeners to "Add to Cart" buttons
addCartButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    // Get product info from the DOM
    const productElement = event.target.parentElement;
    const product = {
      id: productElement.querySelector('h3').textContent,
      price: productElement.querySelector('p').textContent
    };

    // Add product to cart
    addToCart(product);
  });
});
