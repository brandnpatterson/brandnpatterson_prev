const googleMaps = {
  latLng: {
    lat: 29.760427,
    lng: -95.369804
  },
  scriptsLoaded: false,

  init() {
    window.MAPS = googleMaps;

    this.API_KEY = 'AIzaSyAT1HBJSs6uj1J8js8kON1jUZy3osegiNg';

    if (!this.scriptsLoaded) {
      this.loadScript();
    } else {
      this.initMap();
    }
  },

  loadScript() {
    window.__maps_initMap = this.initMap;

    const script = document.createElement('script');

    script.id = 'google-maps';
    script.type = 'text/javascript';
    script.src = `https://maps.googleapis.com/maps/api/js?key=${
      this.API_KEY
    }&callback=__maps_initMap`;

    document.body.appendChild(script);

    this.scriptsLoaded = true;
  },

  initMap() {
    const infowindow = new google.maps.InfoWindow();
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: googleMaps.latLng
    });

    const marker = new google.maps.Marker({
      position: googleMaps.latLng,
      map: map,
      title: 'Hello World!'
    });

    const infoMarkup = `
        <h4 class="google-maps-title">Brandon Patterson</h4>
        <h5>Front End Developer</h5>
      `;

    google.maps.event.addListener(marker, 'click', () => {
      infowindow.setContent(infoMarkup);
      infowindow.open(map, marker);
    });
  }
};

export default googleMaps;
