let map;
let currentMarker;

async function initMap() {
  // The location of Uluru
  const position = { lat: -23.550305, lng: -46.6367758 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const  AdvancedMarkerView  = await google.maps.importLibrary("marker");


  map = new Map(document.getElementById("map"), {
    zoom: 10,
    center: position,
    mapId: "4bfc0fd6ba1b10ed",
  });


  map.addListener("click", (event) => {
    if(currentMarker){
      currentMarker.setMap(null)
    }
  currentMarker = addMarker(event.latLng, map)
  })
  
}

function addMarker (position, map) {
  const marker = new google.maps.Marker({
    position: position,
    map: map
  })
  return marker
}

initMap();