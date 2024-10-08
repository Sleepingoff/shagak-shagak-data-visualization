import React, { useState } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
} from "chart.js";
import { Pie, Bar, Line } from "react-chartjs-2";
import AreaChart from "./AreaChart";
import BubbleChart from "./BubbleChart";
import MixedChart from "./MixedChart";
import PolarAreaChart from "./PolarAreaChart";
import RadarChart from "./RadarChart";
import ScatterChart from "./ScatterChart";
import ChartCommonFeaturesComparison from "./Options";
import AttendanceManagementSystem from "./Company";
import OlympicAthleteStats from "./Olympic";
import PersonalityCareerAssessment from "./MBTI";
import DoughnutPieChart from "./DoughnutNPieChart";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement
);

const data = {
  labels: ["Red", "Blue", "Yellow", "Green"],
  datasets: [
    {
      data: [12, 19, 3, 5],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      borderColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      borderWidth: 1,
    },
  ],
};
//4.2.1. Area Chart
// 4.2.2. Bar Chart
// 4.2.3. Bubble Chart
// 4.2.4. Doughnut and Pie Charts
// 4.2.5. Line Chart
// 4.2.6. Mixed Chart Types
// 4.2.7. Polar Area Chart
// 4.2.8. Radar Chart
// 4.2.9. Scatter Chart
const charts = [
  { id: "area", name: "면적 차트" },
  { id: "bar", name: "막대 차트" },
  { id: "bubble", name: "버블 차트" },
  { id: "donut", name: "도넛 차트" },
  { id: "line", name: "선 차트" },
  { id: "mixed", name: "혼합 차트" },
  { id: "polar", name: "극좌표 차트" },
  { id: "radar", name: "레이더 차트" },
  { id: "scatter", name: "산포 차트" },
  { id: "options", name: "옵션" },
  { id: "company", name: "근태관리시스템" },
  { id: "olympic", name: "올림픽 선수 능력치" },
  { id: "mbti", name: "MBTI 성격 유형과 적성검사 결과" },
];

const DonutChart = () => <Pie data={data} options={{ cutout: "50%" }} />;

const BarChart = () => (
  <Bar
    data={data}
    options={{
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Bar Chart",
        },
      },
    }}
  />
);

const LineChart = () => (
  <Line
    data={data}
    options={{
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Line Chart",
        },
      },
    }}
  />
);

export default function Layout() {
  const [selectedChart, setSelectedChart] = useState("donut");

  return (
    <div className="flex h-screen ">
      {/* 왼쪽 메뉴 */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">차트 선택</h2>
          <ul>
            {charts.map((chart) => (
              <li key={chart.id} className="mb-2">
                <button
                  className={`w-full text-left p-2 rounded ${
                    selectedChart === chart.id
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => setSelectedChart(chart.id)}
                >
                  {chart.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 중앙 설명 및 코드 영역 */}
      <div className="flex-1 p-8 overflow-auto">
        <h1 className="text-3xl font-bold mb-4">
          {charts.find((chart) => chart.id === selectedChart).name}
        </h1>
        <p className="mb-4">
          {selectedChart === "donut" &&
            "도넛 차트는 원형 차트의 변형으로, 중앙에 구멍이 있는 형태입니다. 이 차트는 전체에 대한 부분의 비율을 시각적으로 표현하는 데 효과적입니다."}
          {selectedChart === "bar" &&
            "막대 차트는 데이터를 직사각형 막대로 표현하여 범주 간의 비교를 용이하게 합니다. 각 막대의 길이나 높이가 해당 데이터의 값을 나타냅니다."}
          {selectedChart === "line" &&
            "선 차트는 시간에 따른 데이터의 변화나 추세를 보여주는 데 효과적입니다. 데이터 포인트를 선으로 연결하여 연속적인 변화를 표현합니다."}
        </p>
        <div>
          <input type="radio" value={"선 추가"} />
        </div>
        <div className=" text-white p-4 rounded-lg">
          <pre className="whitespace-pre-wrap">
            {selectedChart === "donut" &&
              `
import React from 'react';
import { Pie } from 'react-chartjs-2';

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green'],
  datasets: [
    {
      data: [12, 19, 3, 5],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      borderColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      borderWidth: 1,
    },
  ],
};

const DonutChart = () => (
  <Pie data={data} options={{ cutout: '50%' }} />
);
            `}
            {selectedChart === "bar" &&
              `
import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green'],
  datasets: [
    {
      data: [12, 19, 3, 5],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      borderColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      borderWidth: 1,
    },
  ],
};

const BarChart = () => (
  <Bar 
    data={data}
    options={{
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Bar Chart',
        },
      },
    }}
  />
);
            `}
            {selectedChart === "line" &&
              `
import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green'],
  datasets: [
    {
      data: [12, 19, 3, 5],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      borderColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      borderWidth: 1,
    },
  ],
};

const LineChart = () => (
  <Line 
    data={data}
    options={{
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Line Chart',
        },
      },
    }}
  />
);
            `}
          </pre>
          {selectedChart === "options" && <ChartCommonFeaturesComparison />}
          {selectedChart === "company" && <AttendanceManagementSystem />}
          {selectedChart === "olympic" && <OlympicAthleteStats />}
          {selectedChart === "mbti" && <PersonalityCareerAssessment />}
        </div>
      </div>

      {/* 오른쪽 차트 영역 */}
      <div className="w-1/3 bg-white shadow-md p-4">
        <h2 className="text-xl font-semibold mb-4">차트 미리보기</h2>
        {selectedChart === "area" && <AreaChart />}
        {selectedChart === "bar" && <BarChart />}
        {selectedChart === "bubble" && <BubbleChart />}
        {selectedChart === "donut" && <DoughnutPieChart />}
        {selectedChart === "line" && <LineChart />}
        {selectedChart === "mixed" && <MixedChart />}
        {selectedChart === "polar" && <PolarAreaChart />}
        {selectedChart === "radar" && <RadarChart />}
        {selectedChart === "scatter" && <ScatterChart />}
      </div>
    </div>
  );
}
