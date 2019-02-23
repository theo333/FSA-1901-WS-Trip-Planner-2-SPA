const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker.js");

mapboxgl.accessToken = "pk.eyJ1IjoidGhlbzMzMyIsImEiOiJjanNmZmlyNm4xMHVqM3l0bGVxenVvOWw0In0.bZVyyflQ7BPzt3ohmxw7Tw";

const fullstackCoords = [-74.009, 40.705] // NY
// const fullstackCoords = [-87.6320523, 41.8881084] // CHI

const map = new mapboxgl.Map({
  container: "map",
  center: fullstackCoords, // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = buildMarker("activities", fullstackCoords);
marker.addTo(map);


const fetchOptions = () => {
  return fetch('/api')
  .then( response => response.json())
  .then( ({ hotels, activities, restaurants }) => {

    hotels.forEach( hotel => {
      const parent = document.querySelector('#hotels-choices');
      console.log(parent);
      const option = document.createElement('option');
      option.text = hotel.name;
      parent.appendChild(option);

      // parent.addEventListener()
    })
  })
}

fetchOptions();



  

