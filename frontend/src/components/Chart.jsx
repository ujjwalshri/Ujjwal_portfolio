import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, Cell } from 'recharts';

// Data for the BarChart
const data = [
  { name: 'JavaScript', proficiency: 80 , ex:"1 year" },
  { name: 'React', proficiency: 70 , ex:"2 year" },
  { name: 'Node.js', proficiency: 87 , ex:"6 month" },
  { name: 'Express.js', proficiency: 89 , ex:'1 year' },
  { name: 'Mongo', proficiency: 50 , ex:'4 month' },
  { name: 'TypeScript', proficiency: 95 , ex:'1 month' },
  { name: 'DSA', proficiency: 97 , ex:'2 year' },
];


// Define colors for each bar
const COLORS = ['#FFBB28', '#FF8042', '#00B38A', '#0088FE', '#FF6F61', '#9B59B6', '#2ECC71'];
const Chart = () => {

   function showPopUp(index){
    alert(`experience of ${data[index].ex} in ${data[index].name}`);
   }



  return (
    <BarChart width={900} height={700} data={data}>
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="proficiency">
      {data.map((entry, index) => (
      
        <Cell  key={`cell-${index}`} fill={COLORS[index % COLORS.length]} onClick={()=>showPopUp(index)} />
      ))}
    </Bar>
  </BarChart>
  )
}

export default Chart