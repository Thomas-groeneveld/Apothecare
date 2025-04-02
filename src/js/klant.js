document.addEventListener("DOMContentLoaded", function () {
    // Verkrijg referenties naar de DOM-elementen
    const orderForm = document.getElementById("orderForm");
    const cartList = document.getElementById("cartList");
    const viewCartBtn = document.getElementById("viewCartBtn");
    const checkoutBtn = document.getElementById("checkoutBtn");
    const orderList = document.getElementById("orderList");
    const viewOrdersBtnCart = document.getElementById("viewOrdersBtnCart");

    // Prijzen van verschillende medicijnen
    const prices = { 
        "Paracetamol": 5, 
        "Ibuprofen": 7, 
        "Amoxicilline": 15, 
        "Aspirine": 6 
    };

    // Initialiseer lege winkelwagen en bestellingen array
    let cart = [];
    let orders = [];

    // Functie om de totale prijs van een medicijn te berekenen
    function calculateTotal(medicine, quantity) {
        return prices[medicine] * quantity;
    }

    // Functie om de winkelwagenlijst bij te werken die aan de gebruiker wordt getoond
    function updateCartList() {
        cartList.innerHTML = "";

        // Als de winkelwagen leeg is, toon een bericht
        if (cart.length === 0) {
            const li = document.createElement("li");
            li.textContent = "De wagen is leeg.";
            cartList.appendChild(li);
            checkoutBtn.style.display = "none"; // Verberg de afrekenknop wanneer de winkelwagen leeg is
            return;
        }

        // Loop door de winkelwagen en toon elk item met verwijderknop
        cart.forEach((item, index) => {
            const li = document.createElement("li");
            li.textContent = `${item.quantity}x ${item.medicine} - €${item.total}`;
            
            // Maak een verwijderknop voor elk item
            const removeButton = document.createElement("button");
            removeButton.textContent = "Verwijder";
            removeButton.classList.add("remove-btn");
            removeButton.addEventListener("click", () => {
                cart.splice(index, 1); // Verwijder het item uit de winkelwagen
                updateCartList(); // Werk de winkelwagenweergave bij
            });
            
            li.appendChild(removeButton);
            cartList.appendChild(li);
        });

        checkoutBtn.style.display = "block"; // Toon de afrekenknop wanneer er items in de winkelwagen zijn
    }

    // Functie om de bestelijst bij te werken die aan de gebruiker wordt getoond
    function updateOrderList() {
        orderList.innerHTML = "";

        // Als er geen bestellingen zijn, toon een bericht
        if (orders.length === 0) {
            const li = document.createElement("li");
            li.textContent = "Geen bestellingen.";
            orderList.appendChild(li);
            return;
        }

        // Loop door de bestellingen en toon elke bestelling
        orders.forEach(order => {
            const li = document.createElement("li");
            li.textContent = `${order.quantity}x ${order.medicine} - €${order.total}`;
            orderList.appendChild(li);
        });
    }

    // Event listener voor het indienen van het bestelformulier
    orderForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const medicine = document.getElementById("medicine").value; // Verkrijg het geselecteerde medicijn
        const quantity = parseInt(document.getElementById("quantity").value); // Verkrijg de hoeveelheid

        // Als de invoer ongeldig is, toon een waarschuwing
        if (!medicine || isNaN(quantity) || quantity <= 0) {
            alert("Vul alstublieft een geldig medicijn en aantal in.");
            return;
        }

        const total = calculateTotal(medicine, quantity); // Bereken de totale prijs
        cart.push({ medicine, quantity, total }); // Voeg het item toe aan de winkelwagen
        updateCartList(); // Werk de winkelwagenweergave bij
        orderForm.reset(); // Reset de formulier velden
    });

    // Event listener om de winkelwagenweergave in en uit te schakelen
    viewCartBtn.addEventListener("click", function () {
        cartList.style.display = cartList.style.display === "none" ? "block" : "none";
    });

    // Event listener voor de afrekenknop
    checkoutBtn.addEventListener("click", function () {
        orders.push(...cart); // Voeg items uit de winkelwagen toe aan de bestellingen
        cart = []; // Maak de winkelwagen leeg
        updateCartList(); // Werk de winkelwagenweergave bij
        updateOrderList(); // Werk de bestellingenweergave bij
    });

    // Event listener om de bestellingenweergave in en uit te schakelen
    viewOrdersBtnCart.addEventListener("click", function () {
        orderList.style.display = orderList.style.display === "none" ? "block" : "none";
    });
});
