import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const statistics = useLoaderData();
    const statisticsdata = statistics.data;

   
    
    return (
        <div>
            <h3 className='my-6 text-4xl'>Total Queston Chart</h3>

            <div className='w-full m-auto'>
                <ResponsiveContainer width={600} height={400} className="m-auto">
                    <LineChart data={statisticsdata}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="name" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            
        </div>
    );
};

export default Statistics;