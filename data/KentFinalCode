mapboxgl.accessToken = 'pk.eyJ1Ijoia2VpcmFrZW50dCIsImEiOiJjbWg5cjNxNG0wYWN2MmtvanpmY2E2Y3I2In0.j7tZg_4tun5N_UdEPYgvsQ';
const map = new mapboxgl.Map({
  container: 'map', 
  style: 'mapbox://styles/keirakentt/cmh9r72jm00bj01sqgtozfhdf', 
  center: [-122.27, 37.8], 
  zoom: 9 
});

 map.on('load', function() {
 map.addSource('points-data', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/keirakentt/BAHA-Map/main/data/183data.geojson'
    });

    map.addLayer({
        id: 'points-layer',
        type: 'circle',
        source: 'points-data',
        paint: {
            'circle-color': '#4264FB',
            'circle-radius': 6,
            'circle-stroke-width': 2,
            'circle-stroke-color': '#ffffff'
        }
     });
      map.on('click', 'points-layer', (e) => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const properties = e.features[0].properties;

        const popupContent = `
            <div>
                <h3>${properties.Landmark}</h3>
                <p><strong>Address:</strong> ${properties.Address}</p>
                <p><strong>Architect & Date:</strong> ${properties.Architect_Date}</p>
                <p><strong>Designated:</strong> ${properties.Designated}</p>
                ${properties.Link ? `<p><a href="${properties.Link}" target="_blank">More Information</a></p>` : ''}
                ${properties.Notes ? `<p><strong>Notes:</strong> ${properties.Notes}</p>` : ''}
            </div>
        `;

        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(popupContent)
            .addTo(map);
    });
    
    map.on('mouseenter', 'points-layer', () => {
        map.getCanvas().style.cursor = 'pointer';
    });

    map.on('mouseleave', 'points-layer', () => {
        map.getCanvas().style.cursor = '';
    });
});
