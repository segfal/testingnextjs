import Head from 'next/head'
import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: 'How close to 1',
      data: [1,1,1,0.3,1,0],
      fill: false,
      backgroundColor: 'rgb(224, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
    {
        label: 'How close to 0',
        data: [0,0,0,0.3,0,0],
        fill: false,
        backgroundColor: 'rgb(99, 224, 132)',
        borderColor: 'rgba(99, 255, 132, 0.2)',
        
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

const LineChart = () => (
  <>
    <div className='header'>
      <h1 className='title'>Line Chart</h1>
      <div className='links'>
       
      </div>
    </div>
    <Line data={data} options={options} />
  </>
);

export default LineChart;