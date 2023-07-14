import "./styles.css";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

var dataa = [
  
];

export default function App() {
  const [data, setData] = React.useState(dataa);
  const addData=()=>{
    console.log(data)
    setData([...data,{
      name: (data.length).toString(),
      uv: (Math.random()*10000).toFixed(2),
      pv: (Math.random()*10000).toFixed(2)
    }])
  }
  return (
    <div>
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="linear"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
        isAnimationActive={false}
      />
      <Line type="linear" dataKey="uv" stroke="#82ca9d" isAnimationActive={false}/>
    </LineChart>
    <button onClick={addData}>sfssfs</button>
    </div>
  );
}
