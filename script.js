// Product list
const products = [
  // Electric
  { id: 1, name: "LED Bulb", category: "electric", image: "images/electric/bulb.png" },
  { id: 2, name: "Switch", category: "electric", image: "images/electric/switch.png" },

  // Hardware
  { id: 3, name: "Hammer", category: "hardware", image: "images/hardware/hammer.png" },
  { id: 4, name: "Screwdriver", category: "hardware", image: "images/hardware/screwdriver.png" },

  // Sanitary
  { id: 5, name: "Pipe", category: "sanitary", image: "images/sanitary/pipe.png" },
  { id: 6, name: "Water Tap", category: "sanitary", image: "images/sanitary/tap.png" },

  // Snacks
  { id: 7, name: "Lays Chips", category: "snacks", image: "images/snacks/lays.png" },
  { id: 8, name: "Coca Cola", category: "snacks", image: "images/snacks/coke.png" }
];

// Display products
function displayProducts(list) {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  list.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Price: Contact us</p>
      <a href="https://wa.me/?text=I%20want%20to%20order%20${encodeURIComponent(product.name)}" target="_blank">
        Order via WhatsApp
      </a>
    `;
    productList.appendChild(card);
  });
}

// Filter by category
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

// Initial load
displayProducts(products);
