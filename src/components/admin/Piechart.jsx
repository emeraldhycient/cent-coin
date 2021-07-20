import React from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';


function Piechart() {
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

    const pieData = [
        {
            "name": "Weekly Pay",
            "value": 68.85
        },
        {
            "name": "Weekly Deposit",
            "value": 7.91
        },
        {
            "name": "Deposit",
            "value": 6.85
        },
        {
            "name": "Withdrawal",
            "value": 6.14
        },
        {
            "name": "Others",
            "value": 10.25
        }
    ];

    const CustomTooltip = ({ active, payload, label }) => {
        if (active) {
            return (
                <div className="custom-tooltip" style={{ backgroundColor: '#ffff', padding: '5px', border: '1px solid #cccc' }}>
                    <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
                </div>
            );
        }

        return null;
    };

    return (
        <PieChart width={730} height={300}>
            <Pie data={pieData} color="#000000" dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} fill="#8884d8" >
                {
                    pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                }
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend />
        </PieChart>
    )
}

export default Piechart
