var config = {
    title: "AI companies in the DACH region",
    //subtitle: 'Click for <a href="https://janakiev.com/">German version</a>',
    //byline: "Byline",
    style: 'mapbox://styles/istariai/ckt8nk7h4541f17k7idd5jesc',
    accessToken: 'pk.eyJ1IjoiaXN0YXJpYWkiLCJhIjoiY2tzb24xb2tiMGF6YzJ3cGpiaWE1d3hibCJ9.XryS-LoCf6KIyznvGyI2ZA',
    theme: 'light',
    //theme: 'light',
    footer: '© Copyright 2021 <a href="https://janakiev.com/">Nikolai Janakiev</a> and <a href="https://istari.ai/">ISTARI.AI</a><br><a href="https://istari.ai/impressum/">Imprint</a>',
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
            description: "Switch to <a href=\"https://stories.istari.ai/ai/de\">German version</a><br><br> We at ISTARI use the intelligent analysis system webAI to scan the websites of about two million companies in the D-A-CH region every week. WebAI reads the websites, detects relevant content and extracts up-to-date information. This allows us, among other things, to determine which companies have already integrated artificial intelligence (AI) into products or services and report on them. This creates an up-to-date and detailed picture of the dissemination of this core technology of the future.<br><br><b>↓ ↓ ↓ ↓ <br>Keep scrolling to learn more <br>↓ ↓ ↓ ↓</b>",
            alignment: 'left',
            location: {
                center: [10, 49],
                zoom: 5.5,
                pitch: 50,
                bearing: 20
            },
            layers: [
                {
                    id: 'de',
                    type: 'geojson',
                    colorMap: 'default',
                    data: 'data/know_how_boundary.json'
                }
            ]
        },
        {
            id: "heidelberg",
            title: "AI hotspots in Heidelberg",
            image: 'assets/heidelberg.jpg',
            description: "This is an example showing the AI hotspots (red) in Heidelberg - i.e. those neighborhoods in which the proportion of companies with AI is particularly high. The small city in southern Germany is characterized by an overall comparatively high share (1.3%; 9th place out of 402 in Germany) of companies with AI, also in comparison with another southern German university city with a similar economic structure, which we want to look at next.",
            alignment: 'left',
            location: {
                center: [8.67362, 49.41059],
                zoom: 11,
                pitch: 20,
                bearing: 0
            },
            layers: [
                {
                    id: 'hd-bitmap',
                    type: 'bitmap',
                    image: 'data/HD_heatmap_4326.png',
                    bounds: [8.590590810, 49.356538724, 8.782079884, 49.449703264]
                },
                {
                    id: 'hd-scatter',
                    type: 'scatter',
                    data: 'data/HD_firms.json'
                }
            ]
        },
        {
            id: "freiburg",
            title: "AI hotspots in Freiburg",
            image: 'assets/freiburg.jpg',
            description: "Freiburg has a similar overall economic structure to Heidelberg, but a lower proportion of AI companies (0.7%; 39th place out of 402 in Germany). This is also reflected, for example, in the number of open job postings on the topic of AI and machine learning on well-known job boards, of which there are more than twice as many in Heidelberg.",
            alignment: 'left',
            location: {
                center: [7.81075, 47.99918],
                zoom: 11,
                pitch: 30,
                bearing: -20
            },
            layers: [
                {
                    id: 'fr-bitmap',
                    type: 'bitmap',
                    image: 'data/FR_heatmap_4326.png',
                    bounds: [7.676840006, 47.944919663, 7.928230049, 48.066023202]
                },
                {
                    id: 'fr-scatter',
                    type: 'scatter',
                    data: 'data/FR_firms.json'
                }
            ]
        },
        {
            id: "dach-final",
            title: "Explore further",
            description: "These were just two examples for cities with a total of around 8,000 analyzed companies. We have summarized the other nearly two million companies by region <a href=\"https://stories.istari.ai/ai/interactive\">here</a>. Simply hover your mouse over the individual regions to see the respective shares of AI companies. Take note, the mapping of companies to regions in Switzerland is a bit imprecise...we are still working on it.<br><br>If you want to know how webAI works, watch the video below.",
            alignment: 'left',
            location: {
                center: [10, 49.8],
                zoom: 5,
                pitch: 0,
                bearing: 0
            },
            layers: [
                {
                    id: 'de',
                    type: 'geojson',
                    colorMap: 'default',
                    data: 'data/know_how_boundary.json'
                }
            ]
        },
        {
            id: "final",
            title: 'The ISTARI webAI explained',
            description: '',
            youtubeId: "SRCa5m_MnBU",
            alignment: 'full',
            location: {
                center: [10, 49.8],
                zoom: 5,
                pitch: 0,
                bearing: 0
            },
            layers: [
                {
                    id: 'de',
                    type: 'geojson',
                    colorMap: 'default',
                    data: 'data/know_how_boundary.json'
                }
            ]
        }
    ]
}
