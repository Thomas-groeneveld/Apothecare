document.addEventListener("DOMContentLoaded", function () {
    const orderForm = document.getElementById("orderForm");
    const cartList = document.getElementById("cartList");
    const viewCartBtn = document.getElementById("viewCartBtn");
    const checkoutBtn = document.getElementById("checkoutBtn");
    const orderList = document.getElementById("orderList");
    const viewOrdersBtnCart = document.getElementById("viewOrdersBtnCart");

    const prices = { 
        "Paracetamol": 5, 
        "Ibuprofen": 7, 
        "Amoxicilline": 15, 
        "Aspirine": 6 
    };

    let cart = [];
    let orders = [];

    function calculateTotal(medicine, quantity) {
        return prices[medicine] * quantity;
    }

    function updateCartList() {
        cartList.innerHTML = "";

        if (cart.length === 0) {
            const li = document.createElement("li");
            li.textContent = "De wagen is leeg.";
            cartList.appendChild(li);
            checkoutBtn.style.display = "none";
            return;
        }

        cart.forEach((item, index) => {
            const li = document.createElement("li");
            li.textContent = `${item.quantity}x ${item.medicine} - €${item.total}`;
            
            const removeButton = document.createElement("button");
            removeButton.textContent = "Verwijder";
            removeButton.classList.add("remove-btn");
            removeButton.addEventListener("click", () => {
                cart.splice(index, 1);
                updateCartList();
            });
            
            li.appendChild(removeButton);
            cartList.appendChild(li);
        });

        checkoutBtn.style.display = "block";
    }

    function updateOrderList() {
        orderList.innerHTML = "";

        if (orders.length === 0) {
            const li = document.createElement("li");
            li.textContent = "Geen bestellingen.";
            orderList.appendChild(li);
            return;
        }

        orders.forEach(order => {
            const li = document.createElement("li");
            li.textContent = `${order.quantity}x ${order.medicine} - €${order.total}`;
            orderList.appendChild(li);
        });
    }

    orderForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const medicine = document.getElementById("medicine").value;
        const quantity = parseInt(document.getElementById("quantity").value);

        if (!medicine || isNaN(quantity) || quantity <= 0) {
            alert("Vul alstublieft een geldig medicijn en aantal in.");
            return;
        }

        const total = calculateTotal(medicine, quantity);
        cart.push({ medicine, quantity, total });
        updateCartList();
        orderForm.reset();
    });

    viewCartBtn.addEventListener("click", function () {
        cartList.style.display = cartList.style.display === "none" ? "block" : "none";
    });

    checkoutBtn.addEventListener("click", function () {
        orders.push(...cart);
        cart = [];
        updateCartList();
        updateOrderList();
    });

    viewOrdersBtnCart.addEventListener("click", function () {
        orderList.style.display = orderList.style.display === "none" ? "block" : "none";
    });
});