import Map from "@arcgis/core/Map";
import SceneView from "@arcgis/core/views/SceneView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import SceneLayer from "@arcgis/core/layers/SceneLayer";

import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer";
import UniqueValueRenderer from "@arcgis/core/renderers/UniqueValueRenderer";
import MeshSymbol3D from "@arcgis/core/symbols/MeshSymbol3D";
import SolidEdges3D from "@arcgis/core/symbols/edges/SolidEdges3D";
import FillSymbol3DLayer from "@arcgis/core/symbols/FillSymbol3DLayer";
import LineSymbol3D from "@arcgis/core/symbols/LineSymbol3D";
import PathSymbol3DLayer from "@arcgis/core/symbols/PathSymbol3DLayer";

import PopupTemplate from "@arcgis/core/PopupTemplate";
import ExpressionInfo from "@arcgis/core/form/ExpressionInfo";
import Search from "@arcgis/core/widgets/Search";
import Legend from "@arcgis/core/widgets/Legend";
import Home from "@arcgis/core/widgets/Home";

import { when } from "@arcgis/core/core/reactiveUtils";
import { Chart, registerables } from "chart.js";

const streetsUrl =
  "https://services2.arcgis.com/cFEFS0EWrhfDeVw9/arcgis/rest/services/Berlin_Equal_Street_Names/FeatureServer";
const buildingsUrl =
  "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/Buildings_Berlin/SceneServer";

/********************************************************************
 * Step 1 - Basemap with 3D buildings *
 ********************************************************************/
const map = new Map({
  basemap: "dark-gray-vector",
  ground: "world-elevation",
});

const view = new SceneView({
  container: document.querySelector("#viewDiv") as HTMLDivElement,
  center: [13.405, 52.52],
  scale: 50000,
  map: map,

  environment: {
    atmosphereEnabled: false,
    starsEnabled: false,
  },
});

const buildingSymbol = new MeshSymbol3D({
  symbolLayers: [
    new FillSymbol3DLayer({
      material: {
        color: [40, 40, 40, 0.5],
        colorMixMode: "tint",
      },
      edges: new SolidEdges3D({
        size: 0.5,
        color: [255, 255, 255, 0.5],
      }),
    }),
  ],
});

const buildingsLayer = new SceneLayer({
  url: buildingsUrl,
  outFields: ["*"],
  renderer: new SimpleRenderer({
    symbol: buildingSymbol,
  }),
});

map.add(buildingsLayer);

/**************************************************
 * Step 2 - Change the streets renderer to show a 3D line *
 **************************************************/
const FEMALE_COLOR = "#8400a8";
const MALE_COLOR = "#e6e600";

const femaleStreetSymbol = {
  value: "F",
  symbol: new LineSymbol3D({
    symbolLayers: [
      new PathSymbol3DLayer({
        profile: "quad",
        material: {
          color: FEMALE_COLOR,
        },
        width: 10,
        height: 3,
      }),
    ],
  }),
};

const maleStreetSymbol = {
  value: "M",
  symbol: new LineSymbol3D({
    symbolLayers: [
      new PathSymbol3DLayer({
        profile: "quad",
        material: {
          color: MALE_COLOR,
        },
        width: 10,
        height: 3,
      }),
    ],
  }),
};

const streetsLayer = new FeatureLayer({
  url: streetsUrl,
  outFields: ["*"],
  elevationInfo: {
    mode: "on-the-ground",
  },
  renderer: new UniqueValueRenderer({
    field: "gender",
    uniqueValueInfos: [femaleStreetSymbol, maleStreetSymbol],
  }),
});

map.add(streetsLayer);

/**************************************************
 * Step 3 - Add a popup with the name & description of the street *
 **************************************************/

 const arcadeExpressionInfos = [
  new ExpressionInfo({
    name: "title",
    title: "Name of the person the street is named after.",
    expression: "fromJSON($feature.details).labels.en.value"
  }),
  new ExpressionInfo({
    name: "description",
    title: "Description of the person the street is named after.",
    expression: "fromJSON($feature.details).descriptions.en.value"
  }),
  new ExpressionInfo({
    name: "link",
    title: "Link to wikipedia article.",
    expression: "fromJSON($feature.details).sitelinks.enwiki.url"
  }),
];

streetsLayer.popupTemplate = new PopupTemplate({
  content:
    "<p><strong>{name}</strong></p><p>{expression/title}: {expression/description}</p><p><a href='{expression/link}'>Learn more</a></p><p>",
  expressionInfos: arcadeExpressionInfos
});

/**************************************************
 * Step 4 - Find a widget in the docs to add to your app *
 **************************************************/

const searchWidget = new Search({
  view: view,
});

view.ui.add(searchWidget, {
  position: "top-right",
  index: 0,
});

let legend = new Legend({
  view: view,
});

view.ui.add(legend, "bottom-right");
let homeWidget = new Home({
  view: view,
});

view.ui.add(homeWidget, "top-left");

/**************************************************
 * Step 5 - Add a chart that shows the distribution of the streets by gender *
 **************************************************/
Chart.register(...registerables);

let femaleStreetsCounts = 0;
let maleStreetsCount = 0;

const chartCanvas = document.getElementById(
  "chart-canvas"
) as HTMLCanvasElement;

const chart = new Chart(chartCanvas, {
  type: "doughnut",
  data: {
    labels: ["Female", "Male"],
    datasets: [
      {
        label: "Zurich streets by gender",
        data: [femaleStreetsCounts, maleStreetsCount],
        backgroundColor: [FEMALE_COLOR, MALE_COLOR],
        hoverOffset: 4,
      },
    ],
  },
});

view.whenLayerView(streetsLayer).then((layerView) => {
  when(
    // Update the chart whenever the user is not interacting with the scene
    () => !layerView.updating,
    async () => {
      // Query the features
      const results = await layerView.queryFeatures({
        geometry: view.extent,
        returnGeometry: true,
      });

      const graphics = results.features;
      femaleStreetsCounts = graphics.filter(
        (street) => street.attributes.gender === "F"
      ).length;
      maleStreetsCount = graphics.filter(
        (street) => street.attributes.gender === "M"
      ).length;

      // update chart
      chart.data.datasets[0].data = [femaleStreetsCounts, maleStreetsCount];
      chart.update();
    }
  );
});
