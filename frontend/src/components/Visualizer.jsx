import React from 'react';
import { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';


export default function Visualizer(){
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/")
        .then(res => {
        console.log("Response status:", res.status);
        return res.json();
        })
        .then(json => {
        console.log("Data received:", json);
        setData(json);
        })
    }, []);
    console.log("Current data:", data);

    if (!data) {
    return (
      <div className='w-72 h-48 border border-gray-200 shadow-xl flex justify-center items-center'>
        <p>Loading data...</p>
      </div>
    )
  }

    return(
        <Plot
        data={[
          {
            x: data.x,
            y: data.y,
            z: data.z,
            text: data.words,
            type: 'scatter3d',
            mode: 'markers',
            marker: {
                size: 3,             
                color: 'red',  
                opacity: 0.8
            },     
            hoverinfo: "text" 
          },
        ]}
        layout = {{
            autosize: true,
            scene: {
            xaxis: { showgrid: false, showticklabels: false, zeroline: true },
            yaxis: { showgrid: false, showticklabels: false, zeroline: true },
            zaxis: { showgrid: false, showticklabels: false, zeroline: true },
            }
        }}
      />
    )
}