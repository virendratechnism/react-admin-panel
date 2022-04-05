import React, { useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import ChartJS from 'chart.js/auto'

const data = [
  {
    year: "2016",
    userGain: "20000",
    userLose: "10000",
  },
  {
    year: "2017",
    userGain: "50000",
    userLose: "15000",
  },
  {
    year: "2018",
    userGain: "15000",
    userLose: "45000",
  },
  {
    year: "2019",
    userGain: "50000",
    userLose: "5000",
  },
  {
    year: "2020",
    userGain: "60000",
    userLose: "6000",
  },
];

function BarChart({ data }) {
  return <Bar data={data} />
}

function LineChart({ data }) {
  return <Line data={data} />
}

const ChartView = () => {
  const [userGainData, setUserGainData] = useState({
    labels: data.map((d) => d.year),
    datasets: [
      {
        label: "Total Number of User Gain in Last 5 Years",
        data: data.map((d) => d.userGain),
        backgroundColor: ["green"]
      },
      {
        label: "Total Number of User Lose in Last 5 Years",
        data: data.map((d) => d.userLose),
        backgroundColor: ["red"],
        borderColor: "red"
      }
    ]
  });

  const [userLoseData, setUserLoseData] = useState({
    labels: data.map((d) => d.year),
    datasets: [
      {
        label: "Total Number of User Gain in Last 5 Years",
        data: data.map((d) => d.userGain),
        backgroundColor: ["green"],
        borderColor: "green"
      },
      {
        label: "Total Number of User Lose in Last 5 Years",
        data: data.map((d) => d.userLose),
        backgroundColor: ["red"],
        borderColor: "red"
      }
    ]
  });

  return (
    <div style={{ width: 500 }}>
      <BarChart data={userGainData} />
      <LineChart data={userLoseData} />
    </div>
  );
}

export default ChartView;
