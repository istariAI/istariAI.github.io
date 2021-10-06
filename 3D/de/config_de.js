
// pictures are only placeholders --> check for copyrights/licenses

var config = {
    title: "­3D-Druck in Deutschland",
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
            description: "Zur <a href=\"https://stories.istari.ai/ai/en\">englischen Version</a> wechseln<br><br> 3D-Druck, oftmals auch als Additive Fertigung bezeichnet, umfasst eine Gruppe an Fertigungstechnologien. Dabei werden, durch das schichtweise Auftragen von Material und basierend auf einem digitalem Design, komplexe, dreidimensionale physische Produkte hergestellt. Die Vorteile gegenüber herkömmlichen Fertigungsverfahren liegen in der Flexibilität und der Freiheit im Design herzustellender Produkte. Relevant ist der 3D-Druck insbesondere für die bedarfs- und kundenspezifische Fertigung von Endprodukten. Mit einer jährlichen Wachstumsrate von 25% seit 2014, betrug der globale Markt für 3D-Druck in 2018 $9,3 Mrd. und wächst bis 2024 auf prognostizierte $34 Mrd. an.",
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
                }
            ]
        },
        {
            id: "jena",
            title: "3D-Druck-Hotspot Jena",
            image: 'assets/jena.jpg',
            description: "Text für Jena einfügen",
            alignment: 'left',
            location: {
                center: [11.58, 50.92],
                zoom: 11,
                pitch: 20,
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
                center: [8.69, 48.89],
                zoom: 11,
                pitch: 30,
                bearing: -20
            },
            layers: [
                {
                    id: 'de',
                    type: 'geojson',
                    colorMap: 'default',
                    data: 'data/3D_engaged_edited.json'
                },
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
            description: "Text für TUs einfügen",
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
            id: "total-data",
            title: "",
            description: "Das waren jetzt nur zwei Beispiele für Städte. Die anderen knapp zwei Millionen Unternehmen haben wir <a href=\"https://stories.istari.ai/ai/interactive\">hier</a> nach Regionen zusammengefasst. Fahr einfach mit der Maus über die einzelnen Regionen, um dir die jeweiligen Anteile an KI-Unternehmen anzuschauen. Vorsicht, in der Schweiz ist die Zuordnung von Unternehmen zu Regionen noch etwas ungenau...daran arbeiten wir noch. <br><br>Wenn du wissen willst, wie die webAI funktioniert, dann schau dir das Video weiter unten an.",
            alignment: 'left',
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
            id: "final",
            title: 'Die ISTARI webAI erklärt',
            description: '',
            youtubeId: "nMDLIJ3HXtY",
            alignment: 'full',
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
        }
    ]
}
