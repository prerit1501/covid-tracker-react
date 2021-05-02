import React from "react";
import DataCard from './DataCard'

const Numbers = (data) => {
    // console.log("sdfsdfsdfdsfsdfsdf",data.data)
    // console.log("Sdfsdfsdf",data.data)
    return (
        <div className="ui three column grid container" style={{margin:"20px 0px"}}>
            <DataCard
                title="Cases"
                firstQ="New Confirmed"
                firstA={data.data.NC}
                secondQ="Total Confirmed"
                secondA={data.data.TC}
            />
            <DataCard
                title="Deaths"
                firstQ="New Deaths"
                firstA={data.data.ND}
                secondQ="Total Deaths"
                secondA={data.data.TD}
            />
            <DataCard
                title="Recovered"
                firstQ="New Recovered"
                firstA={data.data.NR}
                secondQ="Total Recovered"
                secondA={data.data.TR}
            /> 
        </div>
    );
};

export default Numbers;
