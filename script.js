// let map = L.map('map').setView([0, 0], 2); // Default view


// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; OpenStreetMap contributors'
// }).addTo(map);


// Elements
const ipInput = document.getElementById('ip-input');
const searchBtn = document.getElementById('search-btn');
const ipDisplay = document.getElementById('ip-address');
const locationDisplay = document.getElementById('location');
const timezoneDisplay = document.getElementById('timezone');
const ispDisplay = document.getElementById('isp');

// Initialize Map
const map = L.map('map').setView([0, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Fetch IP details
async function fetchIPDetails(ip) {
    const response = await fetch(`https://ip-api.com/json/${ip}`);
    const data = await response.json();
    console.log(data);
    
    if (data.status === 'success') {
        ipDisplay.textContent = data.query;
        locationDisplay.textContent = `${data.city}, ${data.region}, ${data.country}`;
        timezoneDisplay.textContent = data.timezone.utc;
        ispDisplay.textContent = data.isp;

        // Update map
        // map.setView([data.latitude, data.longitude], 13);
        // L.marker([data.latitude, data.longitude]).addTo(map);
    }
}
fetchIPDetails('66.183.83.48');

// Search Button Click Event
// searchBtn.addEventListener('click', () => {
//     const ip = '66.183.83.48';
//     if (ip) {
//         fetchIPDetails(ip);
//     }
// });


// Get User's IP on Load
// fetch('https://api64.ipify.org?format=json')
//     .then(response => response.json())
//     .then(data => fetchIPDetails(data.ip));

