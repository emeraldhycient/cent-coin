import React from "react";
import { LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function LineCharts() {
    const data = [
        {
            "name": "Jan 2021",
            "Deposit A": 343200,
            "withdrawal B": 234200
        },
        {
            "name": "Feb 2021",
            "Deposit A": 234200,
            "withdrawal B": 324600
        },
        {
            "name": "Mar 2021",
            "Deposit A": 456500,
            "withdrawal B": 455600
        },
        {
            "name": "Apr 2021",
            "Deposit A": 665400,
            "withdrawal B": 446500
        },
        {
            "name": "May 2021",
            "Product A": 876500,
            "withdrawal B": 455300
        }
    ]

    return (
        <LineChart width={530} height={250} data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Deposit A" stroke="#0095FF" />
            <Line type="monotone" dataKey="withdrawal B" stroke="#FF0000" />
        </LineChart>
    )
}

export default LineCharts
