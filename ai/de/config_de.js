var config = {
    title: "­KI Unternehmen im DACH Raum",
    //subtitle: "<a href=\"http://example.org\" lang=\"en\" hreflang=\"de\">Click for German version</a>",
    //byline: "Byline",
    style: 'mapbox://styles/istariai/ckt8nk7h4541f17k7idd5jesc',
    accessToken: 'pk.eyJ1IjoiaXN0YXJpYWkiLCJhIjoiY2tzb24xb2tiMGF6YzJ3cGpiaWE1d3hibCJ9.XryS-LoCf6KIyznvGyI2ZA',
    theme: 'light',
    //theme: 'light',
    footer: '© Copyright 2021 <a href="https://janakiev.com/">Nikolai Janakiev</a> und <a href="https://istari.ai/">ISTARI.AI</a><br><a href="https://istari.ai/impressum/">Impressum</a>',
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
            description: "Zur <a href=\"https://stories.istari.ai/ai/en\">englischen Version</a> wechseln<br><br> Bei ISTARI untersuchen wir mit dem intelligenten Analysesystem webAI jede Woche die Webseiten von etwa zwei Millionen Unternehmen in der D-A-CH Region. WebAI liest die Webseiten, erkennt relevante Inhalte und extrahiert so aktuelle Informationen. Unter anderem können wir so bestimmen, welche Unternehmen bereits künstliche Intelligenz (KI) in Produkten oder Dienstleistungen integriert haben und davon berichten. So entsteht ein aktuelles und detailliertes Lagebild der Verbreitung dieser Basistechnologie der Zukunft.<br><br><b>↓ ↓ ↓ ↓<br> Scroll einfach weiter, um mehr zu erfahren <br>↓ ↓ ↓ ↓</b>",
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
            title: "KI Hotspots in Heidelberg",
            image: 'assets/heidelberg.jpg',
            description: "Hier seht ihr beispielhaft die KI-Hotspots (rot) in Heidelberg - also die Nachbarschaften, in denen der Anteil an Unternehmen mit KI besonders hoch ist. Die kleine Stadt in Süddeutschland zeichnet sich durch einen insgesamt vergleichsweise hohen Anteil (1,3%; 9. Platz von 402 in Deutschland) von Unternehmen mit KI aus, auch im Vergleich mit einer anderen süddeutschen Universitätsstadt, die eine ähnliche Wirtschaftsstruktur hat und die wir uns als Nächstes anschauen wollen.",
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
            title: "KI Hotspots in Freiburg",
            image: 'assets/freiburg.jpg',
            description: "Freiburg im Breisgau hat zwar eine insgesamt ähnliche Wirtschaftsstruktur wie Heidelberg, aber einen geringeren Anteil an KI-Unternehmen (0,7%; 39. Platz von 402 in Deutschland). Das schlägt sich beispielsweise auch in der Anzahl offener Stellenausschreibungen zum Thema KI und Machine Learning auf bekannten Jobbörsen nieder, von denen es in Heidelberg mehr als doppelt so viele gibt.",
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
            title: "",
            description: "Das waren jetzt nur zwei Beispiele für Städte mit zusammen etwa 8,000 analysierten Unternehmen. Die anderen knapp zwei Millionen Unternehmen haben wir <a href=\"https://stories.istari.ai/ai/interactive\">hier</a> nach Regionen zusammengefasst. Fahr einfach mit der Maus über die einzelnen Regionen, um dir die jeweiligen Anteile an KI-Unternehmen anzuschauen. Vorsicht, in der Schweiz ist die Zuordnung von Unternehmen zu Regionen noch etwas ungenau...daran arbeiten wir noch. <br><br>Wenn du wissen willst, wie die webAI funktioniert, dann schau dir das Video weiter unten an.",
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
            title: 'Die ISTARI webAI erklärt',
            description: '',
            youtubeId: "nMDLIJ3HXtY",
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
