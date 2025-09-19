let cart = [];

// Show selected section
function showSection(sectionId) {
  let sections = document.querySelectorAll(".product-section");
  sections.forEach(sec => sec.style.display = "none");
  document.getElementById(sectionId).style.display = "flex";
}

// Add product to cart
function addToCart(name, price) {
  cart.push({ name, price });
  alert(name + " added to cart!");
}

// Show cart
function showCart() {
  if (cart.length === 0) {
    document.getElementById("cart").innerHTML = "Cart is empty.";
    return;
  }

  let html = "<h3>Your Cart</h3><ul>";
  let total = 0;
  cart.forEach(item => {
    html += `<li>${item.name} - $${item.price}</li>`;
    total += item.price;
  });
  html += `</ul><p><strong>Total: $${total}</strong></p>`;
  document.getElementById("cart").innerHTML = html;
}

// Search products
function searchProducts() {
  let input = document.getElementById("searchBar").value.toLowerCase();
  let products = document.querySelectorAll(".product");

  products.forEach(product => {
    let name = product.querySelector("h3").innerText.toLowerCase();
    if (name.includes(input)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}


