
// pictures are only placeholders --> check for copyrights/licenses
// change TUM logo (official one + size)

var config = {
    // title: "3D-Druck in Deutschland",
    //subtitle: "<a href=\"http://example.org\" lang=\"en\" hreflang=\"de\">Click for German version</a>",
    //byline: "Byline",
    image: 'assets/Istari_farbig.png',
    style: 'mapbox://styles/istariai/ckt8nk7h4541f17k7idd5jesc',
    accessToken: 'pk.eyJ1IjoiaXN0YXJpYWkiLCJhIjoiY2tzb24xb2tiMGF6YzJ3cGpiaWE1d3hibCJ9.XryS-LoCf6KIyznvGyI2ZA',
    theme: 'light',
    //theme: 'light'
    header: '<br> <a href="https://istari.ai/"> <img src="assets/Istari_farbig.png" style="float:left; vertical-align:middle; margin-left: 30px; width:282px;height:45px;"> </a>  <a href="https://www.professors.wi.tum.de/eoi/startseite/""> <img src="assets/tum_logo.png" style="float:right;vertical-align:top; margin-right: 30px;width:135px;height:50px;"> </a> <h1>3D-Druck in Deutschland</h1> <br>',
    footer: '© Copyright 2021 <a href="https://janakiev.com/">Nikolai Janakiev</a>, <a href="https://istari.ai/">ISTARI.AI</a> und <a href="https://www.professors.wi.tum.de/eoi/startseite/">Technische Universität München</a> <br> <a href="https://istari.ai/impressum/">Impressum</a> <br><br> <img src="assets/Istari_farbig.png" style="width:232px;height:37px;">',
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
            description: "Zur <a href=\"https://stories.istari.ai/ai/en\">englischen Version</a> wechseln<br><br> 3D-Druck, oftmals auch als Additive Fertigung bezeichnet, umfasst eine Gruppe an Fertigungstechnologien. Dabei werden, durch das schichtweise Auftragen von Material und basierend auf einem digitalem Design, komplexe, dreidimensionale physische Produkte hergestellt. Die Vorteile gegenüber herkömmlichen Fertigungsverfahren liegen in der Flexibilität und der Freiheit im Design herzustellender Produkte. Relevant ist der 3D-Druck insbesondere für die bedarfs- und kundenspezifische Fertigung von Endprodukten. Mit einer jährlichen Wachstumsrate von 25% seit 2014, betrug der globale Markt für 3D-Druck in 2018 $9,3 Mrd. und wächst bis 2024 auf prognostizierte $34 Mrd. an. <br><br> Auf der Karte sind die Top 10 der 3D-Druck Hotspots in Deutschland eingezeichnet.",
            alignment: 'left',
            location: {
                center: [8, 51.5],
                zoom: 5.3,
                pitch: 0,
                bearing: 0
            },
            layers: [
                {
                    id: 'de',
                    type: 'geojson',
                    colorMap: 'default',
                    data: 'data/3D_engaged_edited.json'
                },
                {
                    id: 'hotspot_labels',
                    type: 'bitmap',
                    image: 'data/hotspot_labels.png',
                    bounds: [5.4197322122883627,46.9744237769598598, 15.4178439372327940,55.2671564545392613]
                },
            ]
        },
        {
            id: "jena",
            title: "3D-Druck-Hotspot Jena",
            image: 'assets/jena (placeholder).jpg',
            description: "Jena ist eine Universitätsstadt in Mitteldeutschland an der Saale. Sie ist nach der Landeshauptstadt Erfurt die zweitgrößte Stadt in Thüringen. Die Stadt wird auch als “Lichtstadt” bezeichnet, da sie als Wiege der optischen Industrie in Europa gilt. Ursprung war die Gründung des Unternehmens Zeiss in Jena in der Mitte des 19. Jahrhunderts. Inzwischen ist insbesondere die enge Zusammenarbeit der beiden Hochschulen mit Forschungszentren und lokaler Industrie ausschlaggebend. So ist Jena auch europäisches Zentrum der Forschung im Bereich Optik und Photonik.",
            alignment: 'left',
            location: {
                center: [11.48, 50.92],
                zoom: 11
            },
            layers: [
                {
                    id: 'hd-scatter',
                    type: 'scatter',
                    data: 'data/HD_firms.json'
                }
            ]
        },
        {
            id: "pforzheim",
            title: "3D-Druck-Hotspot Pforzheim",
            image: 'assets/pforzheim.JPG',
            description: "Pforzheim ist eine Großstadt am Nordrand des Schwarzwaldes. Sie ist weithin als “Goldstadt” bekannt, da ihre Schmuckindustrie knapp 80% des deutschen Exportschmucks produziert. Darüber hinaus stellt Pforzheim einen besonderen Standort für Zulieferer der Automobil- und Maschinenbauindustrie dar.",
            alignment: 'right',
            location: {
                center: [8.815, 48.89],
                zoom: 11
            },
            layers: [
                {
                    id: 'fr-scatter',
                    type: 'scatter',
                    data: 'data/FR_firms.json'
                }
            ]
        },
        {
            id: "technical-universities",
            title: "Erklärung: Technische Universitäten",
            description: "Wir sehen eine Korrelation zwischen der Verbreitung der 3D-Drucktechnologie und den technischen Universitäten in der Region. Technische Universitäten können eine Rolle dabei spielen, Anreize für die Erforschung dieser neuen, aufstrebenden Technologie zu schaffen und die Start-ups zu fördern, die diese Technologie nutzen werden.",
            alignment: 'left',
            location: {
                center: [8, 51.5],
                zoom: 5.3,
                pitch: 0,
                bearing: 0
            },
            layers: [
                {
                    id: 'de',
                    type: 'geojson',
                    colorMap: 'default',
                    data: 'data/3D_engaged_edited.json'
                },
                {
                    id: 'technical_universities_labels',
                    type: 'bitmap',
                    image: 'data/technical_universities_labels.png',
                    bounds: [5.4197322122883627,46.9744237769598598, 15.4178439372327940,55.2671564545392613]
                },
                {
                    id: 'technical_universities',
                    type: 'technical_uni',
                    data: 'data/technical_universities.json',
                },
            ]
        },
        {
            id: "paper",
            title: "",
            description: "Weitere Informationen findest du in unserer Veröffentlichung 'Technology Mapping Using WebAI: The Case of 3D Printing' (<a href='https://stories.istari.ai/3D/de/'>Link</a>) <br><br> Autoren: Robert Dehghan, Hanna Hottenrott, Jan Kinne, David Lenz, Elisa Rodepeter, Sebastian Schmidt, Julian Schwierzy, Andreas Stömmer, Kaan Uçtum",
            alignment: 'right',
            location: {
                center: [8.48, 49.48],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            layers: [
                {
                    id: 'de',
                    type: 'geojson',
                    colorMap: 'default',
                    data: 'data/3D_engaged_edited.json'
                }
            ]
        },
        {
            id: "total-data",
            title: "",
            description: "Das waren jetzt nur zwei Beispiele für Städte. Die anderen knapp zwei Millionen Unternehmen haben wir <a href=\"https://stories.istari.ai/ai/interactive\">hier</a> nach Regionen zusammengefasst. Fahr einfach mit der Maus über die einzelnen Regionen, um dir die jeweiligen Anteile an 3D-Druck-Unternehmen anzuschauen. <br><br> Wenn du wissen willst, wie unsere webAI funktioniert, dann schau dir das Video weiter unten an.",
            alignment: 'left',
            location: {
                center: [8.48, 49.48],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            layers: [
                {
                    id: 'de',
                    type: 'geojson',
                    colorMap: 'default',
                    data: 'data/3D_engaged_edited.json'
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
                center: [8.48, 49.48],
                zoom: 13,
                pitch: 0,
                bearing: 0
            },
            layers: [
                {
                    id: 'de',
                    type: 'geojson',
                    colorMap: 'default',
                    data: 'data/3D_engaged_edited.json'
                }
            ]
        }
    ]
}
