import React, { useEffect, useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
import './Home.css'


const Chart = () => {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
        const { data } = await response.json();
        setData(data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const Data = {
        labels: data.map((item) => item.Year),
        datasets: [
            {
                label: 'Population',
                data: data.map((item) => item.Population),
                backgroundColor: ["green"],
                borderColor: 'green',
                borderWidth: 1,
                yAxisID: 'population',
                xAxisID: 'nations', 
            },
        ],
    };

    const lines = {
        scales: {
            population: {
                
                position: 'left',
                title: {
                    display: true,
                    text: 'Population',
                },
            },
            nations: {
                
                position: 'bottom',
                title: {
                    display: true,
                    text: 'Years',
                },
            },
        },
    };

    return (
        <div>
        <h3>USA Population Data</h3>
        <div  className='USApopulationChart'>
            
            <Line data={Data} options={lines} />
        </div>
        </div>
    )


};

export default Chart;