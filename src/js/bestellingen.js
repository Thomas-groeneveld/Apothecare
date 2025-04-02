// Fetch orders from the backend and populate the table
async function fetchOrders() {
    try {
        // Replace with your backend API endpoint
        const response = await fetch('/api/orders');
        const orders = await response.json();

        // Get the table body element
        const orderTableBody = document.getElementById('order-data');

        // Clear existing rows
        orderTableBody.innerHTML = '';

        // Populate the table with orders
        orders.forEach(order => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${order.id}</td>
                <td>${order.customerName}</td>
                <td>${order.medicine}</td>
                <td>${order.quantity}</td>
                <td style="color: ${getStatusColor(order.status)};">${order.status}</td>
            `;
            orderTableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching orders:', error);
    }
}

// Helper function to determine status color
function getStatusColor(status) {
    switch (status.toLowerCase()) {
        case 'verzonden':
            return 'green';
        case 'in behandeling':
            return 'orange';
        case 'geannuleerd':
            return 'red';
        default:
            return 'black';
    }
}

// Fetch orders on page load
document.addEventListener('DOMContentLoaded', fetchOrders);