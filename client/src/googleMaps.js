const googleMaps = {
  scriptsLoaded: false,

  init({ API_KEY }) {
    window.MAPS = googleMaps;
    this.API_KEY = API_KEY;

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
    const latlng = new google.maps.LatLng(29.760427, -95.369804);
    const infowindow = new google.maps.InfoWindow();
    const map = new google.maps.Map(document.getElementById('map'), {
      center: latlng,
      styles: [
        { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
        { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
        { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#d59563' }]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#d59563' }]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{ color: '#263c3f' }]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#6b9a76' }]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{ color: '#38414e' }]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#212a37' }]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#9ca5b3' }]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{ color: '#746855' }]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#1f2835' }]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#f3d19c' }]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{ color: '#2f3948' }]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#d59563' }]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{ color: '#17263c' }]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#515c6d' }]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{ color: '#17263c' }]
        }
      ],
      zoom: 8
    });

    const marker = new google.maps.Marker({
      position: latlng,
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
