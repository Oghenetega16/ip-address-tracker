let map = L.map('map').setView([0, 0], 2); // Default view

// Add OpenStreetMap tiles as background
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Things to be done:
// 1. Create a function to get IP address, Location, Timezone
//    and ISP using an API.
// 2. Make the location icon show on the exact location.