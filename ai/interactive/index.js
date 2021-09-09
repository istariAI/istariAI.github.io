var colorMap = [
  [  0, 210, 212],
  [ 76, 224, 226],
  [154, 240, 240],
  [232, 254, 254],
  [239, 220, 184],
  [247, 185, 112],
  [255, 151,  42]
]

fetch("data/know_how_boundary.json")
  .then(response => response.json())
  .then(function(data) {
  console.log(data);
  

  const layer = new deck.GeoJsonLayer({
    id: 'geojson',
    data: data,
    getFillColor: d => colorMap[d.properties.color_class],
    getLineColor: [0, 0, 0, 255],
    getLineWidth: 10,
    lineWidthMinPixels: 1,
    opacity: 0.5,
    stroked: false,
    pickable: true
  });

  const deckgl = new deck.DeckGL({
    container: 'map',
    mapStyle: 'mapbox://styles/istariai/ckt8nk7h4541f17k7idd5jesc',
    mapboxApiAccessToken: 'pk.eyJ1IjoiaXN0YXJpYWkiLCJhIjoiY2tzb24xb2tiMGF6YzJ3cGpiaWE1d3hibCJ9.XryS-LoCf6KIyznvGyI2ZA',
    initialViewState: {
      longitude: 10.5,
      latitude: 50.3,
      zoom: 5.5,
      pitch: 0,
      bearing: 0
    },
    controller: { 
      scrollZoom: true,
      dragPan: true,
      doubleClickZoom: true,
      touchZoom: false,
      tourchRotate: false
    },
    getTooltip: ({object}) => object && {
      html: object.properties.text,
      style: {
        color: '#fff',
        fontSize: '1.1em',
        fontFamily: "'Barlow', sans-serif"
      }
    },
    layers: [layer]
  });
});
