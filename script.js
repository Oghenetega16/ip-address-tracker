// Elements
const searchBtn = document.getElementById('search-btn');
const ipDisplay = document.getElementById('ip-address');
const locationDisplay = document.getElementById('location');
const timezoneDisplay = document.getElementById('timezone');
const ispDisplay = document.getElementById('isp');

// Function to get the user's IP address using Ipify API
async function getUserIP() {
    try {
        let response = await fetch("https://api64.ipify.org?format=json");
        let data = await response.json();
        return data.ip;
    } catch (error) {
        console.error("Error fetching IP:", error);
    }
}

// Function to get IP details (location, ISP, timezone, etc.)
async function getIPDetails(ip) {
    const apiKey = "at_fYqDrmUYcnqH10B8vZ0Sk4fdYdBUy"; 
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`;

    try {
        let response = await fetch(url);
        let data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching IP details:", error);
    }
}

// Function to update UI and map with IP details
async function trackIP(ip = null) {
    if (!ip) {
        ip = await getUserIP();
    }

    let ipDetails = await getIPDetails(ip);

    if (ipDetails) {
        ipDisplay.innerText = ipDetails.ip;
        locationDisplay.innerText = `${ipDetails.location.city}, ${ipDetails.location.region}, ${ipDetails.location.country}`;
        timezoneDisplay.innerText = `UTC ${ipDetails.location.timezone}`;
        ispDisplay.innerText = ipDetails.isp;

        // Update map location
        updateMap(ipDetails.location.lat, ipDetails.location.lng);
    }
}

// Initialize map
let map = L.map('map').setView([0, 0], 2);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Function to update map location
function updateMap(lat, lng) {
    map.setView([lat, lng], 13); // Zoom to IP location

    // Remove old markers and add a new one
    L.marker([lat, lng]).addTo(map)
        
}

// Event listener for search button
document.getElementById("search-btn").addEventListener("click", (e) => {
    e.preventDefault();
    let ipInput = document.getElementById("ip-input").value.trim();
    if (ipInput) {
        trackIP(ipInput);
    }
    document.getElementById("ip-input").value = '';
});

// Fetch and display user's IP address on page load
trackIP();
