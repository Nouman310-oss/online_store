// Sample product list
const products = [
  { id: 1, name: "LED Bulb", price: 100, category: "electric", image: "images/bulb.png" },
  { id: 2, name: "Switch", price: 50, category: "electric", image: "images/switch.png" },
  { id: 3, name: "Hammer", price: 200, category: "hardware", image: "images/hammer.png" },
  { id: 4, name: "Pipe", price: 150, category: "sanitary", image: "images/pipe.png" }
];

let selectedProducts = [];

// Display all products
function displayProducts(list) {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  list.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
      <button onclick="addToBill(${product.id})">Add to Bill</button>
      <br>
      <a href="https://wa.me/?text=I%20want%20to%20order%20${encodeURIComponent(product.name)}" target="_blank">
        📱 Order via WhatsApp
      </a>
    `;
    productList.appendChild(card);
  });
}

// Filter products by category
function filterCategory(category) {
  if (category === "all") {
    displayProducts(products);
  } else {
    const filtered = products.filter(p => p.category === category);
    displayProducts(filtered);
  }
}

// Search products
function searchProducts() {
  const query = document.getElementById("searchBar").value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(query));
  displayProducts(filtered);
}

// Add product to bill
function addToBill(id) {
  const product = products.find(p => p.id === id);
  selectedProducts.push(product);
  alert(`${product.name} added to bill`);
}

// Calculate total bill
function calculateBill() {
  let total = selectedProducts.reduce((sum, item) => sum + item.price, 0);
  document.getElementById("totalPrice").innerText = "Total: $" + total;
}

// Initial load
displayProducts(products);

