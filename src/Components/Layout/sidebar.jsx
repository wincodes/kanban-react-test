import React from "react";
import KeyboardDown from '@material-ui/icons/KeyboardArrowDown'
import Timeline from '@material-ui/icons/Timeline'
import webFx from "../../assets/images/webfx.png"

const Sidebar = () => {
  return (
    <div className="sidebar pl-2">
      <div className="fx-header pl-4 pt-2 pb-2">MarketingCloud <span><img src={webFx} width="40px" height="30px"/></span></div>
      <div className="reporting pl-4 pt-1 pb-1"><Timeline className="pr-2" />REPORTING</div>
      <div className="overview card ">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Overview</li>
          <li className="list-group-item d-flex justify-content-between">LeadManagerFx <span class="keydown"><KeyboardDown /></span></li>
          <li className="list-group-item d-flex justify-content-between">CompanyTrackerFx <span class="keydown"><KeyboardDown /></span></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
