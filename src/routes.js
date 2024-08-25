export const routePaths = [
  "/",
  "/canvas",
  "/canvas/01",
  "/canvas/02",
  "/chartjs",
  "/chartjs/AreaChart",
  "/chartjs/BarChart",
  "/chartjs/BubbleChart",
  "/chartjs/DoughnutChart",
  "/chartjs/LineChart",
  "/chartjs/PieChart",
  "/chartjs/PolarAreaChart",
  "/chartjs/RadarChart",
  "/chartjs/ScatterChart",
  "/chartjs/MixedChart",
  "/chartjs/Olympic",
  "/chartjs/MBTI",
  "/d3js",
  "/d3js/01",
  "/d3js/02",
  "/map",
  "/map/01",
  "/map/02",
];

export const routes = {
  "/": {
    key: "/",
    link: "/",
    name: "Home",
    children: ["/canvas", "/chartjs", "/d3js", "/map"],
  },
  "/canvas": {
    key: "/canvas",
    link: "/canvas",
    name: "Canvas",
    children: ["/canvas/01", "/canvas/02"],
  },

  "/canvas/01": {
    key: "/canvas/01",
    link: "/canvas/01",
    name: "01",
  },

  "/canvas/02": {
    key: "/canvas/02",
    link: "/canvas/02",
    name: "02",
  },

  "/chartjs": {
    key: "/chartjs",
    link: "/chartjs",
    name: "Chart.js",
    children: [
      "/chartjs/AreaChart",
      "/chartjs/BarChart",
      "/chartjs/BubbleChart",
      "/chartjs/DoughnutChart",
      "/chartjs/LineChart",
      "/chartjs/PieChart",
      "/chartjs/PolarAreaChart",
      "/chartjs/RadarChart",
      "/chartjs/ScatterChart",
      "/chartjs/MixedChart",
      "/chartjs/Olympic",
      "/chartjs/MBTI",
    ],
  },

  "/chartjs/AreaChart": {
    key: "/chartjs/AreaChart",
    link: "/chartjs/AreaChart",
    name: "AreaChart",
  },

  "/chartjs/BarChart": {
    key: "/chartjs/BarChart",
    link: "/chartjs/BarChart",
    name: "BarChart",
  },

  "/chartjs/BubbleChart": {
    key: "/chartjs/BubbleChart",
    link: "/chartjs/BubbleChart",
    name: "BubbleChart",
  },

  "/chartjs/DoughnutChart": {
    key: "/chartjs/DoughnutChart",
    link: "/chartjs/DoughnutChart",
    name: "DoughnutChart",
  },

  "/chartjs/LineChart": {
    key: "/chartjs/LineChart",
    link: "/chartjs/LineChart",
    name: "LineChart",
  },

  "/chartjs/PieChart": {
    key: "/chartjs/PieChart",
    link: "/chartjs/PieChart",
    name: "PieChart",
  },

  "/chartjs/PolarAreaChart": {
    key: "/chartjs/PolarAreaChart",
    link: "/chartjs/PolarAreaChart",
    name: "PolarAreaChart",
  },

  "/chartjs/RadarChart": {
    key: "/chartjs/RadarChart",
    link: "/chartjs/RadarChart",
    name: "RadarChart",
  },

  "/chartjs/ScatterChart": {
    key: "/chartjs/ScatterChart",
    link: "/chartjs/ScatterChart",
    name: "ScatterChart",
  },

  "/chartjs/MixedChart": {
    key: "/chartjs/MixedChart",
    link: "/chartjs/MixedChart",
    name: "MixedChart",
  },

  "/chartjs/Olympic": {
    key: "/chartjs/Olympic",
    link: "/chartjs/Olympic",
    name: "Olympic",
  },

  "/chartjs/MBTI": {
    key: "/chartjs/MBTI",
    link: "/chartjs/MBTI",
    name: "MBTI",
  },

  "/d3js": {
    key: "/d3js",
    link: "/d3js",
    name: "D3.js",
    children: ["/d3js/01", "/d3js/02"],
  },

  "/d3js/01": {
    key: "/d3js/01",
    link: "/d3js/01",
    name: "01",
  },

  "/d3js/02": {
    key: "/d3js/02",
    link: "/d3js/02",
    name: "02",
  },

  "/map": {
    key: "/map",
    link: "/map",
    name: "Map",
    children: ["/map/01", "/map/02"],
  },

  "/map/01": {
    key: "/map/01",
    link: "/map/01",
    name: "01",
  },

  "/map/02": {
    key: "/map/02",
    link: "/map/02",
    name: "02",
  },
};

export const isParentRoute = (route) => Array.isArray(route.children);

export const gnbRootList = routes["/"].children.map((r) => routes[r]);
