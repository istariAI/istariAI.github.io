var alignments = {
  'left': 'lefty',
  'center': 'centered',
  'right': 'righty',
  'full': 'fully'
}

// Default color map Viridis
var colorMaps = {
  'default': [
    [ 68,   1,  84],
    [ 68,  57, 130],
    [ 48, 103, 141],
    [ 32, 144, 140],
    [ 53, 183, 120],
    [144, 214,  67],
    [253, 231,  36]
  ]
};

const deckgl = new deck.DeckGL({
  container: 'map',
  mapStyle: config.style,
  mapboxApiAccessToken: config.accessToken,
  initialViewState: {
    longitude:50,
    latitude: 10,
    zoom: 2
  },
  controller: { 
    scrollZoom: false,
    dragPan: false,
    dragRotate: false,
    doubleClickZoom: false,
    touchZoom: false,
    tourchRotate: false
  },
  layers: []
});

var layers = {};

function createLayers(layersSettings){
  if (layersSettings == null) { return [] }

  layers = []
  layersSettings.forEach((element, idx) => {
    var colorMap = colorMaps[element.colorMap];
    if (element.type == "geojson") {
      layers.push(new deck.GeoJsonLayer({
        id: element.id,
        data: element.data,
        getFillColor: d => colorMap[d.properties.color_class],
        getLineColor: [0, 0, 0, 255],
        getLineWidth: 10,
        lineWidthMinPixels: 1,
        opacity: 0.5,
        stroked: false
      }));
    } else if (element.type == "heatmap") {
      layers.push(new deck.HeatmapLayer({
        id: element.id,
        data: element.data,
        aggregation: 'SUM',
        getPosition: d => d.coordinates,
        radiusPixels: 25,
        colorRange: colorMap,
        opacity: 0.5
      }));
    } else if (element.type == "scatter") {
      layers.push(new deck.ScatterplotLayer({
        id: element.id,
        data: element.data,
        getPosition: d => d.coordinates,
        getRadius: 50,
        opacity: 0.5
      }));
    } else if (element.type == "technical_uni") {
      layers.push(new deck.ScatterplotLayer({
        id: element.id,
        data: element.data,
        getPosition: d => d.coordinates,
        getRadius: 5000,
        opacity: 0.5
      }));
    } else if (element.type == "point") {
      layers.push(new deck.ScatterplotLayer({
        id: element.id,
        data: element.data,
        getPosition: d => d.coordinates,
        getRadius: 20,
        opacity: 0.7
      }));
    } else if (element.type == "bitmap" ) {
      layers.push(new deck.BitmapLayer({
        id: element.id,
        bounds: element.bounds,
        image: element.image
      }));
    } else {
      throw "Layer type " + element.type + " not implemented!";
    }
  });

  return layers;
}

var story = document.getElementById('story');
var features = document.createElement('div');
features.setAttribute('id', 'features');

var header = document.createElement('div');

if (config.header) {
  var headerText = document.createElement('p');
  headerText.innerHTML = config.header;
  header.appendChild(headerText);
}

if (config.title) {
  var titleText = document.createElement('h1');
  titleText.innerText = config.title;
  header.appendChild(titleText);
}

if (config.subtitle) {
  var subtitleText = document.createElement('h2');
  subtitleText.innerText = config.subtitle;
  header.appendChild(subtitleText);
}

if (config.byline) {
  var bylineText = document.createElement('p');
  bylineText.innerText = config.byline;
  header.appendChild(bylineText);
}

if (config.colorMaps) {
  var colorMaps = config.colorMaps;
}

if (header.innerText.length > 0) {
  header.classList.add(config.theme);
  header.setAttribute('id', 'header');
  story.appendChild(header);
}

config.chapters.forEach((record, idx) => {
  console.log(record);
  
  var container = document.createElement('div');
  var chapter = document.createElement('div');
  
  if (record.title) {
    var title = document.createElement('h3');
    title.innerText = record.title;
    chapter.appendChild(title);
  }
  
  if (record.image) {
    var image = new Image();
    image.src = record.image;
    chapter.appendChild(image);
  }

  if (record.youtubeId) {
    var video = document.createElement('iframe');
    video.setAttribute('title', "YouTube video player");
    video.setAttribute('allow', "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;");
    video.setAttribute('allowfullscreen', true);
    video.setAttribute('frameborder', "0"); 
    video.setAttribute('src', "https://www.youtube.com/embed/" + record.youtubeId);
    chapter.appendChild(video);
  }
  
  if (record.description) {
    var story = document.createElement('p');
    story.innerHTML = record.description;
    chapter.appendChild(story);
  }
  
  container.setAttribute('id', record.id);
  container.classList.add('step');
  if (idx === 0) {
    container.classList.add('active');
  }
  
  chapter.classList.add(config.theme);
  container.appendChild(chapter);
  container.classList.add(alignments[record.alignment] || 'centered');
  if (record.hidden) {
    container.classList.add('hidden');
  }
  features.appendChild(container);
});

story.appendChild(features);

var footer = document.createElement('div');

if (config.footer) {
  var footerText = document.createElement('p');
  footerText.innerHTML = config.footer;
  footer.appendChild(footerText);
}

if (footer.innerText.length > 0) {
  footer.classList.add(config.theme);
  footer.setAttribute('id', 'footer');
  story.appendChild(footer);
}

// instantiate the scrollama
var scroller = scrollama();

scroller
.setup({
  step: '.step',
  offset: 0.5,
  progress: true,
  debug: false
})
.onStepEnter(response => {
  console.log("onStepEnter");
  //console.log(response);
  
  var chapter = config.chapters.find(chap => chap.id === response.element.id);
  response.element.classList.add('active');

  deckgl.setProps({
    initialViewState: {
      longitude: chapter.location.center[0],
      latitude: chapter.location.center[1],
      zoom: chapter.location.zoom,
      pitch: chapter.location.pitch,
      bearing: chapter.location.bearing,
      transitionInterpolator: new deck.FlyToInterpolator(),
      transitionDuration: 'auto'
    },
    layers: createLayers(chapter.layers)
  });
})
.onStepExit(response => {
  console.log("onStepExit");
  //console.log(response);
  
  var chapter = config.chapters.find(chap => chap.id === response.element.id);
  response.element.classList.remove('active');
});

// setup resize event
window.addEventListener('resize', scroller.resize);
