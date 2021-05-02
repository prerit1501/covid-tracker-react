import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Numbers from "./components/Numbers";
import Spinner from "./components/Spinner";
import DropDown from "./components/DropDown";
import Chart from "./components/Chart";
import dayjs from "dayjs";
import Background from "./images/white.png";

const App = () => {
    const [location, setLocation] = useState("Global");
    const [data, setData] = useState({});
    const [displayData, setDisplayData] = useState({
        NC: 0,
        TC: 0,
        ND: 0,
        TD: 0,
        NR: 0,
        TR: 0,
    });
    const [countries, setCountries] = useState([]);
    const [chart, setChart] = useState({});

    const onLocationChange = (val) => {
        setLocation(val);
    };

    useEffect(() => {
        const fetchCovidData = async () => {
            const GData = await axios.get("https://api.covid19api.com/summary");
            const list = GData.data.Countries.map((country) => {
                return country.Country;
            });
            list.unshift("Global");
            setCountries(list);
            setData(GData.data);
        };

        const fetchGraphData = async () => {
            console.log(chart);
            let now = new Date();
            now = now.toISOString();
            let prev = dayjs().subtract(5, "day").toISOString();
            now = now.slice(0, 10);
            now += "T00:00:00Z";
            prev = prev.slice(0, 10);
            prev += "T00:00:00Z";

            const graphData = await axios.get(
                `https://api.covid19api.com/country/${location}/status/confirmed?from=${prev}&to=${now}`
            );
            setChart(graphData);
        };

        if (Object.keys(data).length === 0) {
            fetchCovidData();
        } else {
            if (location === "Global") {
                const obj = {
                    NC: data.Global.NewConfirmed,
                    TC: data.Global.TotalConfirmed,
                    ND: data.Global.NewDeaths,
                    TD: data.Global.TotalDeaths,
                    NR: data.Global.NewRecovered,
                    TR: data.Global.TotalRecovered,
                };
                setDisplayData(obj);
            } else {
                let ans = data.Countries.find(
                    (val) => val.Country === location
                );
                const obj = {
                    NC: ans.NewConfirmed,
                    TC: ans.TotalConfirmed,
                    ND: ans.NewDeaths,
                    TD: ans.TotalDeaths,
                    NR: ans.NewRecovered,
                    TR: ans.TotalRecovered,
                };
                setDisplayData(obj);
                fetchGraphData();
            }
        }
    }, [data, location]);

    if (Object.keys(data).length === 0 && data.constructor === Object) {
        return (
            <div>
                <Spinner />
            </div>
        );
    } else {
        return (
            <div style={{ backgroundImage: `url(${Background})` }}>
                <Header />
                <div >
                    <div className="ui container">
                        <Numbers data={displayData} />
                        <br />
                        <DropDown
                            countries={countries}
                            location={location}
                            onLocationChange={onLocationChange}
                        />  
                        <br />
                        <Chart ChartData={chart} />
                        <br/>
                        <br/>
                        <br/>
                    </div>
                </div>
            </div>
        );
    }
};
export default App;
