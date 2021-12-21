var config = {
    // title: "3D-Druck in Deutschland",
    //subtitle: "<a href=\"http://example.org\" lang=\"en\" hreflang=\"de\">Click for German version</a>",
    //byline: "Byline",
    image: '../assets/Istari_farbig.png',
    style: 'mapbox://styles/istariai/ckt8nk7h4541f17k7idd5jesc',
    accessToken: 'pk.eyJ1IjoiaXN0YXJpYWkiLCJhIjoiY2tzb24xb2tiMGF6YzJ3cGpiaWE1d3hibCJ9.XryS-LoCf6KIyznvGyI2ZA',
    theme: 'light',
    header: '<h1>3D printing in Germany</h1>',
    //header: '<br> <a href="https://istari.ai/"> <img src="assets/Istari_farbig.png" style="float:left; vertical-align:middle; margin-left: 30px; width:282px;height:45px;"> </a>  <a href="https://www.professors.wi.tum.de/eoi/startseite/""> <img src="assets/tum_logo.png" style="float:right;vertical-align:top; margin-right: 30px;width:135px;height:50px;"> </a> <h1>3D-Druck in Deutschland</h1> <br>',
    footer: '© Copyright 2021 <a href="https://janakiev.com/">Nikolai Janakiev</a>, <a href="https://istari.ai/">ISTARI.AI</a> and <a href="https://www.professors.wi.tum.de/eoi/startseite/">Technical University of Munich</a> <br> <a href="https://istari.ai/impressum/">Imprint</a> <br><br> <img src="../assets/Istari_farbig.png" style="width:232px;height:37px;">',
    colorMaps: {
        'default': [
            [  0, 210, 212],
            [ 76, 224, 226],
            [154, 240, 240],
            [232, 254, 254],
            [239, 220, 184],
            [247, 185, 112],
            [255, 151,  42]
        ],
        'coolwarm': [
            [ 58,  76, 192],
            [111, 145, 242],
            [170, 198, 253],
            [221, 220, 219],
            [246, 183, 156],
            [230, 116,  90],
            [179,   3,  38]
        ]
    },
    chapters: [
        {
            id: "dach-start",
            title: "",
            description: "↓ Simply scroll down to use ↓ <br><br>Switch to <a href=\"https://stories.istari.ai/3D/de\">German version</a><br><br> 3D printing, often referred to as additive manufacturing, comprises a group of modern manufacturing technologies. Based on a digital design, complex products are made by applying material layer by layer. The advantages over conventional manufacturing processes lie in the freedom of design and flexibility of production. 3D printing is particularly relevant for prototyping and the demand- and customer-specific production of end products. <br><br> The map shows the top 10 3D printing hotspots in Germany.",
            image_bottom: '../assets/colourbar.png',
            alignment: 'left',
            location: {
                center: [9, 51.25],
                zoom: 5.1,
                pitch: 0,
                bearing: 0
            },
            layers: [
                {
                    id: 'de',
                    type: 'geojson',
                    colorMap: 'default',
                    data: '../data/3D_engaged_edited.json'
                },
                {
                    id: 'hotspot_labels',
                    type: 'bitmap',
                    image: '../data/hotspot_labels.png',
                    bounds: [5.4197322122883627,46.9744237769598598, 15.4178439372327940,55.2671564545392613]
                },
            ]
        },
        {
            id: "total-data",
            title: "",
            description: "The results presented here are the result of a collaboration between <a href=\"https://istari.ai/\">ISTARI.AI</a> and the <a href=\"https://www.professors.wi.tum.de/eoi/startseite/\">Professorship for Innovation Economics</a> at the Technical University of Munich. For our analysis, we examined almost two million companies.  <br><br> If you want to know how our webAI works, watch the video below.",
            image: '../assets/logos.png',
            alignment: 'center',
            location: {
                center: [13, 51.25],
                zoom: 5.1,
                pitch: 0,
                bearing: 0
            },
            layers: [
                {
                    id: 'de',
                    type: 'geojson',
                    colorMap: 'default',
                    data: '../data/3D_engaged_edited.json'
                },
                {
                    id: 'hotspot_labels',
                    type: 'bitmap',
                    image: '../data/hotspot_labels.png',
                    bounds: [5.4197322122883627,46.9744237769598598, 15.4178439372327940,55.2671564545392613]
                },
            ]
        },
        {
            id: "jena",
            title: "3D printing hotspot Jena",
            image: '../assets/jena.jpg',
            description: "Jena is a university town in central Germany on the river Saale. It is the second largest city in Thuringia after the state capital Erfurt. The city is also known as the \"City of Light\" because it is considered the cradle of the optical industry in Europe. Nowadays, the close cooperation of the two universities with research centres and local industry in particular is characteristic of the region. Jena is therefore also the European centre of research in optics and photonics. For example, our analysis enabled us to locate the Leibniz Institute for Photonic Technologies, which uses 3D printing in its research. <br><br> Areas with high 3D printing intensity are shown on the map as red, areas with low intensity as blue.",
            alignment: 'left',
            location: {
                center: [11.58, 50.92],
                zoom: 11
            },
            layers: [
                {
                    id: 'jena_heatmap',
                    type: 'bitmap',
                    image: '../data/jena_heatmap.png',
                    bounds: [11.521,50.848,11.707,50.978]
                },
                {
                    id: 'jena-scatter',
                    type: 'scatter',
                    data: '../data/jena_firms.json'
                }
            ]
        },
        {
            id: "pforzheim",
            title: "3D printing hotspot Pforzheim",
            image: '../assets/pforzheim.JPG',
            description: "Pforzheim is a large city on the northern edge of the Black Forest. It is widely known as the \"Gold City\" because its jewellery industry produces almost 80% of Germany's export jewellery. In addition, Pforzheim is a special location for suppliers to the automotive and mechanical engineering industries. We found companies that use 3D printing in the 'Wilferdinger Höhe' and 'Altgefäll' industrial estates, among others.",
            alignment: 'left',
            location: {
                center: [8.71, 48.89],
                zoom: 11
            },
            layers: [
                {
                    id: 'pforzheim_heatmap',
                    type: 'bitmap',
                    image: '../data/pforzheim_heatmap.png',
                    bounds: [8.628,48.823, 8.784,48.933]
                },
                {
                    id: 'pforzheim-scatter',
                    type: 'scatter',
                    data: '../data/pforzheim_firms.json'
                }
            ]
        },
        {
            id: "munich",
            title: "State capital Munich",
            image: '../assets/munich.JPG',
            description: "In contrast to Jena and Pforzheim, Munich is a metropolis. In addition to the presence of many large industrial companies (such as Siemens & MTU Aero Engines), the Bavarian capital is also an important location for research. Furthermore, some of the market leaders in German 3D printing are based in Munich or the nearby district of Starnberg (including EOS GmbH). We were able to identify the Munich Technology Centre and the Obersendling district, among others, as 3D printing hotspots in the city.",
            alignment: 'left',
            location: {
                center: [11.57, 48.14],
                zoom: 10.5
            },
            layers: [
                {
                    id: 'munich_heatmap',
                    type: 'bitmap',
                    image: '../data/munich_heatmap.png',
                    bounds: [11.353,47.999,11.744,48.275]
                },
                {
                    id: 'munich-scatter',
                    type: 'scatter',
                    data: '../data/munich_firms.json'
                }
            ]
        },
        {
            id: "technical-universities",
            title: "Importance of universities",
            description: "3D printing technology is particularly widespread at locations of technical universities. Technical universities play an important role not only in the research of new technologies, but also in their diffusion through their contribution to knowledge-based start-ups and the training of skilled personnel.",
            alignment: 'left',
            location: {
                center: [9, 51.25],
                zoom: 5.1,
                pitch: 0,
                bearing: 0
            },
            layers: [
                {
                    id: 'de',
                    type: 'geojson',
                    colorMap: 'default',
                    data: '../data/3D_engaged_edited.json'
                },
                {
                    id: 'technical_universities_labels',
                    type: 'bitmap',
                    image: '../data/technical_universities_labels.png',
                    bounds: [5.4197322122883627,46.9744237769598598, 15.4178439372327940,55.2671564545392613]
                },
                {
                    id: 'technical_universities',
                    type: 'technical_uni',
                    data: '../data/technical_universities.json',
                },
            ]
        },
        {
            id: "paper",
            title: "",
            description: "For more information, see our publication 'Technology Mapping Using WebAI: The Case of 3D Printing' (<a href=''>Link</a>) <br><br> Authors: Robert Dehghan, Hanna Hottenrott, Jan Kinne, David Lenz, Elisa Rodepeter, Sebastian Schmidt, Julian Schwierzy, Andreas Stömmer, Kaan Uçtum. <br><br> If you have any questions, please contact Julian Schwierzy (<a href=mailto:julian.schwierzy@tum.de><span>&#9993;</span></a>) or Sebastian Schmidt (<a href=mailto:sebastian.schmidt@istari.ai><span>&#9993;</span></a>).",
            alignment: 'center',
            location: {
                center: [8.48, 49.48],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
        },
        {
            id: "final",
            title: 'The ISTARI webAI explained',
            description: '',
            youtubeId: "nMDLIJ3HXtY",
            alignment: 'full',
            location: {
                center: [8.48, 49.48],
                zoom: 13,
                pitch: 0,
                bearing: 0
            }
        }
    ]
}
