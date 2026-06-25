import { useContext } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { AppDataContext } from "../../context/Context";


export default function Chart() {
    const { Id: data } = useContext(AppDataContext);
    const maxCount = Math.max(...(data.ratings.map(item => item.count)));
    console.log('this is the chart data' ,data)

    return (
        <div className="w-full h-75 mt-20">
            <h1 className="text-2xl font-bold ">Rating</h1>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data.ratings}
                    layout="vertical"
                    margin={{
                        top: 10,
                        right: 20,
                        left: 20,
                        bottom: 10,
                    }}
                    fill="#fbbc04"
                >
                    <XAxis
                        type="number"
                        domain={[0,maxCount]}
                        axisLine={false}
                        tickLine={false}
                    />
                    <YAxis
                        dataKey="name"
                        type="category"
                        width={50}
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#00193176" }}
                    />
                    <Tooltip />
                    <Bar
                        dataKey="count"
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}