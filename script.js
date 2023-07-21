
const map = L.map('map').setView([51.505, -0.09], 13);
var myIcon = L.icon({iconUrl: './assets/icon-location.svg'})
var marker = L.marker([51.5, -0.09], {icon:myIcon}).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

