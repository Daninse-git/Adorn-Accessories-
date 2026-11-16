const products = [
    {
        id: 1,
        name: "Crystal Necklace",
        price: 6000,
        category: "Necklaces",
        image: "./dark.jpg"
    },
    {
        id: 2,
        name: "Thin Clover Bracelet",
        price: 4500,
        category: "Bracelets",
        image: "./VCA braceletes.jpg"
    },
    {
        id: 3,
        name: "Cherry Earrings",
        price: 4000,
        category: "Earrings",
        image: "./cccc.jpg"
    },
    {
        id: 4,
        name: "Clover Ring",
        price: 4500,
        category: "Rings",
        image: "./fff.jpg"
    },
    {
        id: 5,
        name: "Cute Bow Necklace",
        price: 3500,
        category: "Necklaces",
        image: "./R.jpg"
    },
    {
        id: 6,
        name: "G-shock",
        price: 20000,
        category: "Watches",
        image: "./Gshock.jpg"
    },
    {
        id: 7,
        name: "Nail Bracelet",
        price: 4000,
        category: "Bracelets",
        image: "./nail.jpg"
    },
    {
        id: 8,
        name: "Velvet Rose Necklace",
        price: 3500,
        category: "Necklaces",
        image: "./IMG-20260902-WA0258.jpg"
    },
    {
        id: 9,
        name: "Gold Hoop Earrings",
        price: 2500,
        category: "Earrings",
        image: "./earrings.png"
    },
    {
        id: 10,
        name: "Chain Ring",
        price: 5500,
        category: "Rings",
        image: "./bbb.jpg"
    },
    {
        id: 11,
        name: "Three Line Chain Necklace",
        price: 7000,
        category: "Necklaces",
        image: "./3 set.jpg"
    },
    {
        id: 12,
        name: "Cute Bracelet Set",
        price: 6500,
        category: "Bracelets",
        image: "./girl set.jpg"
    },

    /* WATCHES */
    {
        id: 13,
        name: "WOKAI Leather Watch",
        price: 12000,
        category: "Watches",
        image: "./lether watch.jpg"
    },
    {
        id: 14,
        name: "NAIDU Set",
        price: 15000,
        category: "Watches",
        image: "./1000000.jpg"
    },
    {
        id: 15,
        name: "NAIDU Silver Watch",
        price: 10000,
        category: "Watches",
        image: "./4.jpg"
    },
    {
        id: 16,
        name: "Clover Gold Watch",
        price: 14000,
        category: "Watches",
        image: "./CCC.jpg"
    },
    {
        id: 17,
        name: "NAIDU Gold Watch",
        price: 11000,
        category: "Watches",
        image: "./Y.jpg"
    },
    {
        id: 18,
        name: "Brown Leather Watch",
        price: 13500,
        category: "Watches",
        image: "./same.jpg"
    },
    {
        id: 19,
        name: "NAIDU Gold Watch",
        price: 11000,
        category: "Watches",
        image: "./IMG-20260902-WA0265.jpg"
    },

    /* NECKLACES */
    {
        id: 20,
        name: "Necklace Collection",
        price: 11000,
        category: "Necklaces",
        image: "./Neck.jpg"
    },
    {
        id: 21,
        name: "Steel Wedding",
        price: 3500,
        category: "Rings",
        image: "./9f2d8865d27b560c31c0df69def8931ae2f6cd323769f10fa23291f0906a5303.png"
    },
    {
        id: 22,
        name: "Gold Necklace",
        price: 11000,
        category: "Necklaces",
        image: "./IMG-20260902-WA0256.jpg"
    },
    {
        id: 23,
        name: "Classic Necklace",
        price: 11000,
        category: "Necklaces",
        image: "./IMG-20260902-WA0257.jpg"
    },
    {
        id: 8,
        name: "Velvet Rose Necklace",
        price: 3500,
        category: "Necklaces",
        image: "./necklace.png"
    },
    {
        id: 8,
        name: "Original 3 in 1 stainless steel wedding ring",
        price: 8000,
        category: "Ring",
        image: "./IMG-20261020-WA0066.jpg"
    },
    {
        id: 8,
        name: "Available in silver",
        price: 8000,
        category: "Ring",
        image: "./IMG-20261020-WA0069.jpg"
    },
    {
        id: 8,
        name: "cole earing",
        price: 3500,
        category: "Earing",
        image: "./IMG-20261013-WA0020.jpg"
    },
    {
        id: 8,
        name: "Shell Earing",
        price: 2000,
        category: "Earring",
        image: "./IMG-20261009-WA0007.jpg"
    },
    {
        id: 8,
        name: "Bid Earring",
        price: 2000,
        category: "Earrings",
        image: "./IMG-20261009-WA0005.jpg"
    },
    {
        id: 8,
        name: "Ring hole Earring",
        price: 2000,
        category: "Earring",
        image: "./IMG-20261009-WA0006.jpg"
    },
    {
        id: 8,
        name: "Cecul shell Earring",
        price: 2000,
        category: "Earring",
        image: "./IMG-20261009-WA0004.jpg"
    },
    {
        id: 8,
        name: "Flower Earring",
        price: 2500,
        category: "Earring",
        image: "./IMG-20260902-WA0270.jpg"
    },
];




let cart = [];
let currentCategory = "All";

const productGrid = document.getElementById("product-grid");
const searchInput = document.getElementById("search");
const cartPanel = document.getElementById("cart-panel");
const overlay = document.getElementById("overlay");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");


/* =========================
   FORMAT NIGERIAN NAIRA
========================= */

function naira(amount) {
    return "₦" + amount.toLocaleString("en-NG");
}


/* =========================
   DISPLAY PRODUCTS
========================= */

function displayProducts() {
    const searchText = searchInput.value.trim().toLowerCase();

    const filteredProducts = products.filter(function (product) {
        const matchesCategory =
            currentCategory === "All" ||
            product.category === currentCategory;

        const matchesSearch =
            product.name.toLowerCase().includes(searchText);

        return matchesCategory && matchesSearch;
    });

    productGrid.innerHTML = "";

    if (filteredProducts.length === 0) {
        productGrid.innerHTML =
            '<p class="no-products">No products found.</p>';
        return;
    }

    filteredProducts.forEach(function (product) {
        const card = document.createElement("article");
        card.className = "card";

        const imageHolder = document.createElement("div");
        imageHolder.className = "card-image-holder";

        const image = document.createElement("img");
        image.className = "card-image";
        image.src = product.image;
        image.alt = product.name;
        image.loading = "lazy";

        image.addEventListener("error", function () {
            image.alt = product.name + " image could not be loaded";
            image.classList.add("image-error");
        });

        imageHolder.appendChild(image);

        const info = document.createElement("div");
        info.className = "product-info";

        const name = document.createElement("p");
        name.className = "product-name";
        name.textContent = product.name;

        const price = document.createElement("p");
        price.className = "product-price";
        price.textContent = naira(product.price);

        const button = document.createElement("button");
        button.className = "add-btn";
        button.type = "button";
        button.textContent = "Add to Cart";

        button.addEventListener("click", function () {
            addToCart(product.id);
        });

        info.append(name, price, button);
        card.append(imageHolder, info);

        productGrid.appendChild(card);
    });
}


/* =========================
   ADD PRODUCT TO CART
========================= */

function addToCart(productId) {
    const product = products.find(function (item) {
        return item.id === productId;
    });

    if (!product) return;

    const existingItem = cart.find(function (item) {
        return item.id === productId;
    });

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    displayCart();
}


/* =========================
   DISPLAY CART
========================= */

function displayCart() {
    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML =
            '<p class="empty-cart">Your cart is empty.</p>';
    }

    cart.forEach(function (item) {
        const row = document.createElement("div");
        row.className = "cart-item";

        const name = document.createElement("h3");
        name.textContent = item.name;

        const price = document.createElement("p");
        price.textContent = naira(item.price);

        const bottom = document.createElement("div");
        bottom.className = "cart-item-bottom";

        const controls = document.createElement("div");
        controls.className = "quantity-controls";

        const minus = document.createElement("button");
        minus.type = "button";
        minus.textContent = "−";
        minus.setAttribute("aria-label", "Decrease quantity");

        minus.addEventListener("click", function () {
            changeQuantity(item.id, -1);
        });

        const quantity = document.createElement("span");
        quantity.textContent = item.quantity;

        const plus = document.createElement("button");
        plus.type = "button";
        plus.textContent = "+";
        plus.setAttribute("aria-label", "Increase quantity");

        plus.addEventListener("click", function () {
            changeQuantity(item.id, 1);
        });

        controls.append(minus, quantity, plus);

        const subtotal = document.createElement("strong");
        subtotal.textContent =
            naira(item.price * item.quantity);

        bottom.append(controls, subtotal);

        const remove = document.createElement("button");
        remove.type = "button";
        remove.className = "remove-btn";
        remove.textContent = "Remove";

        remove.addEventListener("click", function () {
            cart = cart.filter(function (product) {
                return product.id !== item.id;
            });

            displayCart();
        });

        row.append(name, price, bottom, remove);
        cartItems.appendChild(row);
    });

    const total = cart.reduce(function (sum, item) {
        return sum + item.price * item.quantity;
    }, 0);

    const count = cart.reduce(function (sum, item) {
        return sum + item.quantity;
    }, 0);

    cartTotal.textContent = naira(total);
    cartCount.textContent = count;
}


/* =========================
   CHANGE PRODUCT QUANTITY
========================= */

function changeQuantity(productId, amount) {
    const item = cart.find(function (product) {
        return product.id === productId;
    });

    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {
        cart = cart.filter(function (product) {
            return product.id !== productId;
        });
    }

    displayCart();
}


/* =========================
   OPEN AND CLOSE CART
========================= */

function openCart() {
    cartPanel.classList.add("open");
    overlay.classList.add("show");
    cartPanel.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeCart() {
    cartPanel.classList.remove("open");
    overlay.classList.remove("show");
    cartPanel.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

document.getElementById("open-cart")
    .addEventListener("click", openCart);

document.getElementById("close-cart")
    .addEventListener("click", closeCart);

overlay.addEventListener("click", closeCart);

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeCart();
    }
});


/* =========================
   SEARCH PRODUCTS
========================= */

searchInput.addEventListener("input", displayProducts);


/* =========================
   FILTER BY CATEGORY
========================= */

document.querySelectorAll(".filter-btn")
    .forEach(function (button) {
        button.addEventListener("click", function () {
            currentCategory = button.dataset.category;

            document.querySelectorAll(".filter-btn")
                .forEach(function (btn) {
                    btn.classList.remove("active");
                });

            button.classList.add("active");

            displayProducts();
        });
    });


/* =========================
   CLEAR CART
========================= */

document.getElementById("clear-cart")
    .addEventListener("click", function () {
        cart = [];
        displayCart();
    });


/* =========================
   CHECKOUT ON WHATSAPP
========================= */

document.getElementById("checkout-btn")
    .addEventListener("click", function () {
        if (cart.length === 0) {
            alert("Your cart is empty. Add a product first!");
            return;
        }

        let message =
            "Hello ADORN Accessories! I want to place an order.\n\n";

        cart.forEach(function (item) {
            message += item.name + "\n";
            message += "Quantity: " + item.quantity + "\n";
            message += "Subtotal: " +
                naira(item.price * item.quantity) + "\n\n";
        });

        const total = cart.reduce(function (sum, item) {
            return sum + item.price * item.quantity;
        }, 0);

        message += "Total: " + naira(total);
        message +=
            "\n\nPlease confirm availability and delivery details.";

        // Replace this with your own business WhatsApp number.
        const phoneNumber = "2349049629912";

        const url =
            "https://wa.me/" + phoneNumber +
            "?text=" + encodeURIComponent(message);

        window.open(url, "_blank");
    });


/* =========================
   START THE SHOP
========================= */

displayProducts();
displayCart();