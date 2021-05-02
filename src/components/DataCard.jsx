import React from "react";
import "./datacard.css";
import Background from "../images/card.png";

const DataCard = ({ title, firstQ, firstA, secondQ, secondA }) => {
    // console.log(firstA)
    return (
        <div className="column" >  
            <div className="ui fluid card" style={{ backgroundImage: `url(${Background})` }}>
                <div className="content">
                    <div className="ui large header">{title}</div>
                </div>
                <span className="middle aligned content">
                    <span className="question">{firstQ}:</span>
                    <span className="answer">{firstA.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                </span>
                <span className="middle aligned content all">
                    <span className="question">{secondQ}:</span>
                    <span className="answer">{secondA.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                </span>
            </div>
        </div>
    );
};
export default DataCard;
