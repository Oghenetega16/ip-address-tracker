let map = L.map('map').setView([0, 0], 2); // Default view

// Add OpenStreetMap tiles as background
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);