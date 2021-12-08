var config = {
    // title: "3D-Druck in Deutschland",
    //subtitle: "<a href=\"http://example.org\" lang=\"en\" hreflang=\"de\">Click for German version</a>",
    //byline: "Byline",
    image: '../assets/Istari_farbig.png',
    style: 'mapbox://styles/istariai/ckt8nk7h4541f17k7idd5jesc',
    accessToken: 'pk.eyJ1IjoiaXN0YXJpYWkiLCJhIjoiY2tzb24xb2tiMGF6YzJ3cGpiaWE1d3hibCJ9.XryS-LoCf6KIyznvGyI2ZA',
    theme: 'light',
    header: '<h1>3D-Druck in Deutschland</h1>',
    //header: '<br> <a href="https://istari.ai/"> <img src="assets/Istari_farbig.png" style="float:left; vertical-align:middle; margin-left: 30px; width:282px;height:45px;"> </a>  <a href="https://www.professors.wi.tum.de/eoi/startseite/""> <img src="assets/tum_logo.png" style="float:right;vertical-align:top; margin-right: 30px;width:135px;height:50px;"> </a> <h1>3D-Druck in Deutschland</h1> <br>',
    footer: '© Copyright 2021 <a href="https://janakiev.com/">Nikolai Janakiev</a>, <a href="https://istari.ai/">ISTARI.AI</a> und <a href="https://www.professors.wi.tum.de/eoi/startseite/">Technische Universität München</a> <br> <a href="https://istari.ai/impressum/">Impressum</a> <br><br> <img src="../assets/Istari_farbig.png" style="width:232px;height:37px;">',
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
            description: "↓ Zum Benutzen einfach nach unten scrollen ↓ <br><br>Zur <a href=\"https://stories.istari.ai/3D/en\">englischen Version</a> wechseln<br><br>3D-Druck, oftmals auch als Additive Fertigung bezeichnet, umfasst eine Gruppe von modernen Fertigungstechnologien. Basierend auf einem digitalen Design werden durch das schichtweise Auftragen von Material komplexe Produkte hergestellt. Die Vorteile gegenüber herkömmlichen Fertigungsverfahren liegen in der Freiheit im Design sowie Flexibilität der Produktion. Relevant ist der 3D-Druck insbesondere für das Prototyping und die bedarfs- und kundenspezifische Fertigung von Endprodukten. <br><br> Auf der Karte sind die Top 10 der 3D-Druck Hotspots in Deutschland eingezeichnet.",
            image_bottom: '../assets/colourbar_de.png',
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
            description: "Die hier dargestellten Ergebnisse sind das Resultat einer Zusammenarbeit zwischen <a href=\"https://istari.ai/\">ISTARI.AI</a> und der <a href=\"https://www.professors.wi.tum.de/eoi/startseite/\">Professur für Innovationsökonomik</a> der Technischen Universität München. <br> <br> Für unsere Analyse haben wir knapp zwei Millionen Unternehmen untersucht. <a href=\"https://stories.istari.ai/3D/interactive\">Hier</a> findest du eine interaktive Karte, auf der unsere Ergebnisse nach Regionen zusammengefasst wurden. Fahr einfach mit der Maus über die einzelnen Regionen, um dir die jeweiligen Anteile an 3D-Druck-Unternehmen anzuschauen. <br><br> Wenn du wissen willst, wie unsere webAI funktioniert, dann schau dir das Video unten an.",
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
            title: "3D-Druck-Hotspot Jena",
            image: '../assets/jena.jpg',
            description: "Jena ist eine Universitätsstadt in Mitteldeutschland an der Saale. Sie ist nach der Landeshauptstadt Erfurt die zweitgrößte Stadt in Thüringen. Die Stadt wird auch als “Lichtstadt” bezeichnet, da sie als Wiege der optischen Industrie in Europa gilt. Inzwischen ist insbesondere die enge Zusammenarbeit der beiden Hochschulen mit Forschungszentren und lokaler Industrie kennzeichnend für die Region. Jena ist daher auch das europäische Zentrum der Forschung im Bereich Optik und Photonik. So konnten wir durch unsere Analyse z.B. das Leibniz-Institut für Photonische Technologien ausfindig machen, das 3D-Druck in seiner Forschung nutzt. <br><br> Gebiete mit hoher 3D-Druck-Intensität sind auf der Karte als rot dargestellt, Gebiete mit schwacher Intensität als blau.",
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
            title: "3D-Druck-Hotspot Pforzheim",
            image: '../assets/pforzheim.JPG',
            description: "Pforzheim ist eine Großstadt am Nordrand des Schwarzwaldes. Sie ist weithin als “Goldstadt” bekannt, da ihre Schmuckindustrie knapp 80% des deutschen Exportschmucks produziert. Darüber hinaus stellt Pforzheim einen besonderen Standort für Zulieferer der Automobil- und Maschinenbauindustrie dar. Unternehmen, die 3D-Druck verwenden, fanden wir dabei u.a. in den Gewerbegebieten 'Wilferdinger Höhe' und 'Altgefäll'.",
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
            title: "Landeshauptstadt München",
            image: '../assets/munich.JPG',
            description: "Im Gegensatz zu Jena und Pforzheim handelt es sich bei München um eine Metropole. Neben der Präsenz vieler großer Industriebetriebe (wie z.B. Siemens, MTU Aero Engines) stellt die bayrische Landeshauptstadt auch einen wichtigen Standort für Forschung dar. Außerdem haben einige der Marktführer im deutschen 3D-Druck ihren Sitz in München oder dem nahgelegenen Landkreis Starnberg (u.a. EOS GmbH). Als 3D-Druck-Hotspots in der Stadt konnten wir u.a. das Münchner Technologiezentrum und den Stadtteil Obersendling identifizieren.",
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
            title: "Bedeutung von Universitäten",
            description: "Die 3D-Drucktechnologie ist besonders verbreitet an Standorten von technischen Universitäten. Technische Universitäten spielen eine wichtige Rolle nicht nur in der Erforschung neuer Technologien, sondern auch in der Diffusion durch ihren Beitrag zu wissensbasierten Gründungen und der Ausbildung von Fachpersonal.",
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
            description: "Weitere Informationen findest du in unserer Veröffentlichung 'Technology Mapping Using WebAI: The Case of 3D Printing' (<a href=''>Link</a>) <br><br> Autoren: Robert Dehghan, Hanna Hottenrott, Jan Kinne, David Lenz, Elisa Rodepeter, Sebastian Schmidt, Julian Schwierzy, Andreas Stömmer, Kaan Uçtum. <br><br> Bei Fragen kannst du dich bei Julian Schwierzy (<a href=mailto:julian.schwierzy@tum.de><span>&#9993;</span></a>) oder Sebastian Schmidt (<a href=mailto:sebastian.schmidt@plus.ac.at><span>&#9993;</span></a>) melden. ",
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
            title: 'Die ISTARI webAI erklärt',
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
