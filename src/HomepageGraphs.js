import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Jan', uv: 400, pv: 2400 },
  { name: 'Feb', uv: 300, pv: 2210 },
  { name: 'Mar', uv: 200, pv: 2290 },
  { name: 'Apr', uv: 278, pv: 2000 },
  { name: 'May', uv: 189, pv: 2181 },
];

const pieData = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const HomepageGraphs = () => {
  return (
    <div style={{ textAlign: 'left', marginTop: '20px', marginLeft:'65px' }}>
      <h3>Number of youths who participated in training opportunities (Number of MSMEs trained)</h3>
      {/* Flex container for horizontal stacking */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
        {/* Line Chart */}
        <div>
          <h3>Line Chart</h3>
          <LineChart
            width={400}
            height={300}
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
          </LineChart>
        </div>

        {/* Bar Chart */}
        <div>
          <h3>Bar Chart</h3>
          <BarChart
            width={400}
            height={300}
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="uv" fill="#8884d8" />
            <Bar dataKey="pv" fill="#82ca9d" />
          </BarChart>
        </div>

        {/* Pie Chart 1*/}
        <div>
          <h3>Pie Chart (Donut)</h3>
          <PieChart width={300} height={300}>
            <Pie
              data={pieData}
              cx={150}
              cy={150}
              labelLine={false}
              outerRadius={100} // Outer radius for the donut chart
              innerRadius={70} // Inner radius to create the hole in the middle
              fill="#8884d8"
              dataKey="value"
              paddingAngle={5} // Increase this value to increase gap between segments
              stroke="#fff" // Set stroke to white for better contrast between segments
              strokeWidth={2} // Softer edges with a thinner stroke
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        {/* Pie Chart 2*/}
        <div>
          <h3>Pie Chart (Donut)</h3>
          <PieChart width={300} height={300}>
            <Pie
              data={pieData}
              cx={150}
              cy={150}
              labelLine={false}
              outerRadius={100} // Outer radius for the donut chart
              innerRadius={70} // Inner radius to create the hole in the middle
              fill="#8884d8"
              dataKey="value"
              paddingAngle={5} // Increase this value to increase gap between segments
              stroke="#fff" // Set stroke to white for better contrast between segments
              strokeWidth={2} // Softer edges with a thinner stroke
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

      </div>
    </div>
  );
};

export default HomepageGraphs;