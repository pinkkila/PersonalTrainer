import { useState, useEffect } from "react";
import { fetchTrainings } from "../apicalls";

import { PieChart, Pie, BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell} from 'recharts';
import { Stack } from "@mui/material";
import { groupBy, sumBy } from "lodash";

const Charts = () => {
    const [trainingData, setTrainringData] = useState([]);

    useEffect(() => {
        handleFetch();
    }, []);

    const handleFetch = () => {
        fetchTrainings()
            .then(data => groupBy(data, "activity"))
            .then(data => Object.entries(data).map(([key, value]) => {
                return (
                    {
                        activity: key,
                        duration: sumBy(value, "duration")
                    }
                );
            }))
            .then(data => setTrainringData(data))
            .catch(err => console.error(err));
    };


    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];
    const RADIAN = Math.PI / 180;

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };


    return (
        <>
            <Stack spacing={2} direction="row" mt={10} justifyContent="center" alignItems="center">

                <ResponsiveContainer width="100%" height={400}>
                    <PieChart width={400} height={400}>
                        <Pie
                            data={trainingData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={140}
                            dataKey="duration"
                        >
                            {trainingData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend payload={
                            trainingData.map(
                                (item, index) => ({
                                    id: item.name,
                                    type: "square",
                                    value: `${item.activity}`,
                                    color: COLORS[index % COLORS.length]
                                })
                            )
                        } />
                    </PieChart>
                </ResponsiveContainer>

                <ResponsiveContainer width="100%" height={400} >
                    <BarChart
                        width={500}
                        height={300}
                        data={trainingData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="activity" />
                        <YAxis label={{ value: 'Duration (min)', angle: -90, position: 'insideLeft' }} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="duration" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                    </BarChart>
                </ResponsiveContainer>

            </Stack>
        </>
    );
};


export default Charts;
