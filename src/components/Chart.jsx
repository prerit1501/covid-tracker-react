import React from "react";
import { Bar,Line} from "react-chartjs-2";

const Chart = (props) => {
    const displayData = {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"],
        datasets: [
            {
                label: "Select Country ",
                data: [
                    148120033,
                    149034010,
                    149920413,
                    150829393,
                    151820402,
                ],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.6)",
                    "rgba(54, 162, 235, 0.6)",
                    "rgba(255, 206, 86, 0.6)",
                    "rgba(75, 192, 192, 0.6)",
                    "rgba(153, 102, 255, 0.6)",
                    "rgba(255, 159, 64, 0.6)",
                    "rgba(255, 99, 132, 0.6)",
                ],
            },
        ],
    };
    if (props.ChartData.data !== undefined) {
        props.ChartData.data.forEach((day, index) => {
            if (day !== undefined) {
                displayData.labels[index] = day.Date.slice(0, 10);
                displayData.datasets[0].data[index] = day.Cases;
                console.log(day);
            }
        });
    }

    console.log(props.ChartData);
    console.log(typeof props, "Sdfs");
    return (
        <div className="chart">
            <Line data={displayData} options={{ maintainAspectRatio: true }} />
        </div>
    );
};
export default Chart;
