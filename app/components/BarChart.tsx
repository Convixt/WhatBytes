import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine, ResponsiveContainer } from "recharts";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { useEffect, useState } from "react";


const chartData = [
  { percentile: 0, value: 1 },
  { percentile: 10, value: 3 },
  { percentile: 25, value: 8 },
  { percentile: 50, value: 12 },
  { percentile: 75, value: 9 },
  { percentile: 90, value: 5 },
  { percentile: 100, value: 2 },
];


export function BarChart({ userPercentile }) {
  const [filteredData, setFilteredData] = useState(chartData);

 
  useEffect(() => {
    const newData = chartData.filter((data) => data.percentile <= userPercentile);
    setFilteredData(newData);
  }, [userPercentile]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Comparison Graph</CardTitle>
        <CardDescription>
          You scored {userPercentile}% percentile, compared to the average 72% percentile.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={filteredData}
            margin={{ top: 20, right: 20, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="percentile" ticks={[0, 25, 50, 75, 100]} />
            <YAxis />
            <Tooltip />
            <ReferenceLine
              x={userPercentile}
              stroke="red"
              strokeWidth={2}
              label={{
                value: "Your Percentile",
                position: "top",
                fill: "red",
                fontSize: 14,
                fontWeight: "bold",
                dy: 10,
                height: 10 
              }}
            />
            <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
      <CardFooter>
        <div className="text-sm text-muted-foreground">
          Showing comparison with the percentile distribution of all users.
        </div>
      </CardFooter>
    </Card>
  );
}
