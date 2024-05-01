import { useState, useEffect } from "react";
import { fetchTrainings } from "../apicalls";

import { PieChart, Pie, BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Stack, Box, duration } from "@mui/material";

import { forOwn, groupBy, sumBy } from "lodash";

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


    return (
        <>
            <Stack spacing={2} direction="row"  mt={2} justifyContent="center" alignItems="center">

                <ResponsiveContainer width="100%" height={700}>
                    <PieChart >
                        <Pie
                            dataKey="duration"
                            startAngle={180}
                            endAngle={-180}
                            data={trainingData}
                            cx={200}
                            cy={200}
                            outerRadius={150}
                            fill="#8884d8"
                            label
                        />
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
                        <YAxis label={{ value: 'Duration', angle: -90, position: 'insideLeft' }}/>
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
