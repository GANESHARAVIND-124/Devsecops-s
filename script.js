const products = [
  { id: 1, name: "Laptop", price: 49999 },
  { id: 2, name: "Smartphone", price: 19999 },
  { id: 3, name: "Headphones", price: 2999 },
];

let cartCount = 0;

function renderProducts() {
  const productList = document.getElementById("product-list");
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart()">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart() {
  cartCount++;
  document.getElementById("cart-count").textContent = cartCount;
}

renderProducts();
