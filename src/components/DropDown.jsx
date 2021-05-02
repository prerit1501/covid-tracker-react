import React,{useState} from "react";

const DropDown = ({ countries,location,onLocationChange }) => {
    const [open,setOpen] = useState(false)
    const list = countries.map((country) => {
        return (
            <div className="item" key={country}  onClick={() =>onLocationChange(country)}>
                {country}
            </div>
        );
    });
    return (
        <div className="ui form">
        {/* Select Country */}
        <div className="field">
          {/* <label className="label">Select a Color</label> */}
          <div
            onClick={() => setOpen(!open)}
            className={`ui selection dropdown ${open ? 'visible active' : ''}`}
          >
            <i className="dropdown icon"></i>
            <div className="text">{location}</div>
            <div className={`menu ${open ? 'visible transition' : ''}`}>
              {list}
            </div>
          </div>
        </div>
      </div>
    );
};

export default DropDown;
