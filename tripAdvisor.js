// Initialize the Places API
function initPlaces() {
  var input = document.getElementById('searchInput');
  var autocomplete = new google.maps.places.Autocomplete(input);

  autocomplete.addListener('place_changed', function() {
    var place = autocomplete.getPlace();
    console.log(place); // or do something else with the selected place
  });
}

function loadPlacesAPI() {
  var script = document.createElement('script');
  script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAio4zUHbyChfHLT3EuBE9lqHWUFOIJrnY&libraries=places";
  script.async = true;
  script.defer = true;
  document.body.appendChild(script);
  script.onload = initPlaces;
}

