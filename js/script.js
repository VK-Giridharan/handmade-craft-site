const LIGHTING_ADDON = 100;

const PRODUCTS = [
  {
    id: '1',
    name: 'Rapunzel Tub',
    basePrice: 249,
    weight: "66 gm",
    dimensions: "7 x 7 x 11 cm",
    sizeType: "Small",
    description: "Rapunzel Tub is a handmade decorative lightweight,elegant chenille stem flower pot crafted with vibrant colors and built-in LED lighting.",
    makingTime: "Small item: 4–5 days making + 2 days courier",
    image: "assets/products/rapunzel-tub.jpg",
    colors: ["Red", "Pink", "Yellow", "Custom"],
    lightingAvailable: true
  },
  {
    id: '2',
    name: 'Mini Light Bouquet',
    basePrice: 249,
    weight: "104 gm",
    dimensions: "15 x 6 x 30 cm",
    sizeType: "Medium",
    description: "Mini Light Bouquet is a beautiful chenille flower arrangement,Wrapped in elegant premium paper with a cute ribbon finish and warm LED lights.",
    makingTime: "Medium item: 5–6 days making + 2 days courier",
    image: "assets/products/Mini-Light-Bouquet.jpeg",
    colors: ["Red", "Pink", "Yellow", "Custom"],
    lightingAvailable: true
  },
  {
    id: '3',
    name: 'Love Tub',
    basePrice: 199,
    weight: "70 gm",
    dimensions: "15 x 6 x 30 cm",
    sizeType: "Medium",
    description: "Love Tub is a cute handmade chenille stem flower pot designed with red heart-shaped flowers and 'Love' text. It is soft, aesthetic, and perfect for gifting on Valentine's Day, birthdays, and special moments.",
    makingTime: "Medium item: 5–6 days making + 2 days courier",
    image: "assets/products/love-tub.jpeg",
    colors: ["Red", "Custom"],
    lightingAvailable: false
  },
  {
    id: '4',
    name: 'Dancing Flower',
    basePrice: 149,
    weight: "50 gm",
    dimensions: "7 x 7 x 12 cm",
    sizeType: "Small",
    description: "Dancing Flower is a cute handmade chenille stem flower pot designed with soft blue flowers and a charming look. It gives a lively and aesthetic vibe, perfect for gifting and home decoration.",
    makingTime: "Small item: 3–4 days making + 2 days courier",
    image: "assets/products/dancing-flower.jpeg",
    colors: ["Blue", "Custom"],
    lightingAvailable: false
  },
  {
    id: '5',
    name: 'Medium Bouquet',
    basePrice: 349,
    weight: "120 gm",
    dimensions: "30 x 7 x 35 cm",
    sizeType: "Medium",
    description: "Medium Bouquet is a beautifully handcrafted chenille,a realistic floral look stem flower arrangement wrapped in premium paper with elegant finishing.",
    makingTime: "Medium item: 5–6 days making + 2 days courier",

    // multiple images 👇
    images: [
      "assets/products/medium-Bouquet.jpg",
      "assets/products/medium-Bouquet1.jpg",
      "assets/products/medium-Bouquet2.jpg"
    ],

    colors: ["Red", "White", "Custom"],
    lightingAvailable: false
  },
  {
  id: '6',
  name: 'Blooming Grace Basket',
  basePrice: 499,
  weight: "469 gm",
  dimensions: "25 x 10.5 x 30 cm",
  sizeType: "Large",
  description: "Blooming Grace Basket is a premium handcrafted chenille flower arrangement designed with vibrant pink and red lilies, elegant greenery, and decorative lace detailing.",
  makingTime: "Large item: 6–8 days making + 2 days courier",

  // multiple images 👇
  images: [
    "assets/products/Blooming Grace Basket.jpeg",
    "assets/products/Blooming Grace Basket1.jpeg"
  ],

  colors: ["Pink", "Red", "Custom"],
  lightingAvailable: false
},
{
  id: '7',
  name: 'Mini Bouquet (Lily)',
  basePrice: 249,
  weight: "80 gm",
  dimensions: "20 x 8 x 25 cm",
  sizeType: "Small",
  description: "Mini Lily Bouquet is a cute handcrafted chenille flower bouquet wrapped in premium paper with ribbon finish. Perfect for surprise gifts and small occasions.",
  makingTime: "Small item: 3–4 days making + 2 days courier",

  images: [
    "assets/products/Mini bouquet (lily) .jpeg",
    "assets/products/Mini bouquet (lily)1.jpeg",
    "assets/products/Mini bouquet (lily)2.jpeg"
  ],

  colors: ["Red", "Custom"],
  lightingAvailable: false
},
{
  id: '8',
  name: 'Rapunzel Mini Bouquet',
  basePrice: 249,
  weight: "90 gm",
  dimensions: "15 x 6 x 28 cm",
  sizeType: "Medium",
  description: "Rapunzel Mini Bouquet is a beautifully handcrafted chenille stem flower arrangement designed with soft pastel tones with dreamy aesthetic look  and elegant wrapping.",
  makingTime: "Medium item: 5–6 days making + 2 days courier",

  images: [
    "assets/products/Rapunzel mini Bouquet (1).jpeg",
    "assets/products/Rapunzel mini Bouquet (2).jpeg",
    "assets/products/Rapunzel mini Bouquet (3).jpeg"
  ],

  colors: ["Pink", "Purple", "Custom"],
  lightingAvailable: false
},
{
  id: '9',
  name: 'Vase Flowers',
  basePrice: 129,
  weight: "80 gm",
  dimensions: "10 x 10 x 20 cm",
  sizeType: "Small",
  description: "Vase Flowers is a simple and elegant handmade chenille stem flower arrangement with a classy and minimal look placed in a transparent aesthetic vase.",
  makingTime: "Small item: 3–4 days making + 2 days courier",

  images: [
    "assets/products/vase flowers (1).jpeg",
    "assets/products/vase flowers (2).jpeg",
    "assets/products/vase flowers (3).jpeg",
    "assets/products/vase flowers (4).jpeg",
    "assets/products/vase flowers (5).jpeg"
  ],

  colors: ["Pink", "Custom"],
  lightingAvailable: false
},
{
  id: '10',
  name: 'Heart Tub',
  basePrice: 149,
  weight: "100 gm",
  dimensions: "12 x 12 x 15 cm",
  sizeType: "Small",
  description: "Heart Tub is a cute and customizable handmade gift featuring multiple chenille hearts arranged beautifully in a tub. You can personalize the color and number of hearts to make it perfect for special occasions like birthdays, anniversaries, or surprises.",
  makingTime: "Small item: 3–4 days making + 2 days courier",
  image: "assets/products/heart tub.jpeg",
  colors: ["Red", "Pink", "Custom"],
  customizable: {
    color: true,
    numberOfHearts: true
  },

  lightingAvailable: false
},
{
  id: '11',
  name: 'Candy Flower',
  basePrice: 99,
  weight: "50 gm",
  dimensions: "10 x 10 x 15 cm",
  sizeType: "Small",
  description: "Candy Flower is a cute and colorful handmade chenille stem flower designed with a candy-like aesthetic. It is customizable in both flower type and color, making it a perfect budget-friendly gift for any occasion like wedding,birthdays.",
  makingTime: "Small item: 2–3 days making + 2 days courier",

  image: "assets/products/candy flower.jpeg",

  colors: ["Red", "Pink", "Yellow", "Custom"],
  customizable: {
    color: true,
    flowerType: true
  },

  lightingAvailable: false
},
{
  id: '12',
  name: 'Hand Bouquet',
  basePrice: 80,
  maxPrice: 150,
  displayPrice: 229,
  weight: "120 gm",
  dimensions: "20 x 10 x 30 cm",
  sizeType: "Medium",
  description: "Hand Bouquet is a beautifully crafted handmade chenille stem flower arrangement perfect for gifting. Customers can customize the bouquet with different flower types based on selection.",
  makingTime: "Medium item: 3–5 days making + 2 days courier",

  images: [
    "assets/products/hand banquet (1).jpeg",
    "assets/products/hand banquet (2).jpeg",
    "assets/products/hand banquet (3).jpeg",
    "assets/products/hand banquet (4).jpeg"
  ],

  colors: ["Red", "Pink", "Yellow", "Custom"],
  customizable: {
    color: true,
    flowerType: true,
    priceVaries: true
  },

  lightingAvailable: false
}
];
// ================= CART STORAGE SYSTEM =================
function getCart() {
  return JSON.parse(localStorage.getItem("CART")) || [];
}

function saveCart(cart) {
  localStorage.setItem("CART", JSON.stringify(cart));
}

function addToCart(item) {
  const cart = getCart();

  const lightingCost = item.lighting ? LIGHTING_ADDON : 0;
  item.total = (item.basePrice + lightingCost) * item.quantity;

  cart.push(item);
  saveCart(cart);
}
// =======================================================


function renderProducts() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  grid.innerHTML = PRODUCTS.map((product, idx) => `
    <div class="product-card" data-product-id="${product.id}">
     <div class="product-image-container">
  ${product.images ? `
    
    <button class="nav-btn left" onclick="prevImage(${idx}, this)">&#10094;</button>

    <img src="${product.images[0]}" id="product-img-${idx}" class="product-card-image">

    <button class="nav-btn right" onclick="nextImage(${idx}, this)">&#10095;</button>

    <div class="dots">
      ${product.images.map((_, i) => `
        <span class="dot ${i === 0 ? 'active' : ''}" id="dot-${idx}-${i}"></span>
      `).join('')}
    </div>

  ` : `
    <img src="${product.image}" class="product-card-image">
  `}
</div>

      <div class="product-card-body">
        <h3>${product.name}</h3>

        <p>${product.description}</p>

        <p><strong>Weight:</strong> ${product.weight}</p>
        <p><strong>Dimensions:</strong> ${product.dimensions}</p>
        <p><strong>Size:</strong> ${product.sizeType}</p>

        <p class="product-price">
          ₹${product.basePrice}
          <span id="dynamic-${idx}"></span>
        </p>

       <div class="product-options">

  <!-- Color -->
  <div class="option-group">
    <label>Color</label>
    <select class="product-color">
      ${product.colors.map(c => `<option value="${c}">${c}</option>`).join('')}
    </select>
    <span class="hint">Free customization</span>
  </div>

  <!-- Lighting -->
  ${product.lightingAvailable ? `
  <div class="option-group lighting-box">
    <label class="checkbox-container">
      <input type="checkbox" id="lighting-${idx}">
      <span class="checkmark"></span>
      Add LED Lighting <span class="price">+₹100</span>
    </label>
  </div>
  ` : ''}

  <!-- Quantity -->
  <div class="option-group">
    <label>Quantity</label>
    <div class="qty-box">
      <button class="qty-btn minus" onclick="changeQty(${idx}, -1)">−</button>
      <input type="number" min="1" value="1" class="product-qty" readonly>
      <button class="qty-btn plus" onclick="changeQty(${idx}, 1)">+</button>
    </div>
  </div>

</div>

        <p style="font-size:12px; margin-top:10px;">
          <strong>Making Time:</strong><br>
          ${product.makingTime}
        </p>

        <button onclick="handleAddToCart(${idx})" class="btn btn-primary">
          Add to Cart
        </button>
      </div>
    </div>
  `).join('');

  PRODUCTS.forEach((product, idx) => {
    const lightingEl = document.getElementById(`lighting-${idx}`);
    const qtyEl = document.querySelectorAll('.product-qty')[idx];

    const updatePrice = () => {
      const lighting = lightingEl ? lightingEl.checked : false;
      const qty = parseInt(qtyEl.value) || 1;
      const total = (product.basePrice + (lighting ? LIGHTING_ADDON : 0)) * qty;

      document.getElementById(`dynamic-${idx}`).textContent =
        (lighting || qty > 1) ? ` (Total: ₹${total})` : '';
    };

    if (lightingEl) lightingEl.addEventListener('change', updatePrice);
    qtyEl.addEventListener('input', updatePrice);
  });
}

function handleAddToCart(idx) {
  const product = PRODUCTS[idx];
  const card = document.querySelectorAll('.product-card')[idx];

  const color = card.querySelector('.product-color').value;
  const lightingEl = card.querySelector(`#lighting-${idx}`);
  const lighting = lightingEl ? lightingEl.checked : false;
  const quantity = parseInt(card.querySelector('.product-qty').value) || 1;

  const item = {
    id: product.id,
    name: product.name,
    image: product.image || product.images?.[0],
    basePrice: product.basePrice,
    color,
    lighting,
    quantity,
    weight: product.weight,
    dimensions: product.dimensions
  };

  addToCart(item);

  // alert("Added to Cart ✅");
  window.location.href = "cart.html";
}

document.addEventListener("DOMContentLoaded", () => {
  // Render products only on shop page
  const grid = document.getElementById("productGrid");
  if (grid) {
    renderProducts();
  }

  // Mobile hamburger menu (shared for all pages)
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");

  if (hamburger && nav) {
    const toggleNav = () => {
      hamburger.classList.toggle("active");
      nav.classList.toggle("active");
    };

    hamburger.addEventListener("click", toggleNav);

    // Close menu when a nav link is clicked
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        nav.classList.remove("active");
      });
    });
  }
});
const imageIndexes = {};

function updateDots(index) {
  const product = PRODUCTS[index];

  product.images.forEach((_, i) => {
    const dot = document.getElementById(`dot-${index}-${i}`);
    dot.classList.remove("active");
  });

  document.getElementById(`dot-${index}-${imageIndexes[index]}`).classList.add("active");
}

function nextImage(index, btn) {
  const product = PRODUCTS[index];

  if (!imageIndexes[index]) imageIndexes[index] = 0;

  imageIndexes[index] = (imageIndexes[index] + 1) % product.images.length;

  document.getElementById(`product-img-${index}`).src =
    product.images[imageIndexes[index]];

  updateDots(index);

  // arrow click effect
  // btn.classList.add("clicked");
  // setTimeout(() => btn.classList.remove("clicked"), 150);
}

function prevImage(index, btn) {
  const product = PRODUCTS[index];

  if (!imageIndexes[index]) imageIndexes[index] = 0;

  imageIndexes[index] =
    (imageIndexes[index] - 1 + product.images.length) % product.images.length;

  document.getElementById(`product-img-${index}`).src =
    product.images[imageIndexes[index]];

  updateDots(index);

  // // arrow click effect
  // btn.classList.add("clicked");
  // setTimeout(() => btn.classList.remove("clicked"), 150);
}
function changeQty(idx, change) {
  const qtyInput = document.querySelectorAll('.product-qty')[idx];
  let value = parseInt(qtyInput.value) || 1;

  value += change;
  if (value < 1) value = 1;

  qtyInput.value = value;
  qtyInput.dispatchEvent(new Event('input'));
}

function removeFromCart(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
}

function updateCartItem(index, updated) {
  const cart = getCart();

  cart[index].color = updated.color;
  cart[index].lighting = updated.lighting;
  cart[index].quantity = updated.quantity;

  const lightingCost = updated.lighting ? LIGHTING_ADDON : 0;
  cart[index].total =
    (cart[index].basePrice + lightingCost) * updated.quantity;

  saveCart(cart);
}

function getGrandTotal(cart) {
  return cart.reduce((sum, item) => sum + item.total, 0);
}