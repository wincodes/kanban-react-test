import React from "react";
import KeyboardDown from "@material-ui/icons/KeyboardArrowDown";
import Timeline from "@material-ui/icons/Timeline";
import webFx from "../../assets/images/webfx.png";
import Fingerprint from "@material-ui/icons/Fingerprint";
import Layers from "@material-ui/icons/Layers";
import Settings from "@material-ui/icons/Settings";

const Sidebar = () => {
  return (
    <div className="sidebar pl-2">
      <div className="fx-header pl-4 pt-2 pb-2">
        MarketingCloud{" "}
        <span>
          <img src={webFx} width="40px" height="30px" />
        </span>
      </div>
      <div className="reporting pl-4 pt-1 pb-1">
        <Timeline className="pr-2" />
        REPORTING
      </div>
      <div className="overview card ">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Overview</li>
          <li className="list-group-item d-flex justify-content-between">
            LeadManagerFx{" "}
            <span className="keydown">
              <KeyboardDown />
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            CallTrackerFx{" "}
            <span className="keydown">
              <KeyboardDown />
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            CompanyTrackerFx{" "}
            <span className="keydown">
              <KeyboardDown />
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            CPLdashboardFx{" "}
            <span className="keydown">
              <KeyboardDown />
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            ContentAnalyticsFx{" "}
            <span className="keydown">
              <KeyboardDown />
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            Custom Export{" "}
          </li>
        </ul>

        {/* marketing and intelligence */}
        <div className="reporting pl-4 pt-1 pb-1">
          <Fingerprint className="pr-2" />
          MARKETING AND INTELLIGENCE
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between">
            CompetitorSpyFx{" "}
            <span className="keydown">
              <KeyboardDown />
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            PredictionGeniusFx{" "}
            <span className="keydown">
              <KeyboardDown />
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            LeadNurtureFx{" "}
            <span className="keydown">
              <KeyboardDown />
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            ReviewBoostFx{" "}
            <span className="keydown">
              <KeyboardDown />
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            PersonalizeFx{" "}
            <span className="keydown">
              <KeyboardDown />
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            ClickBoostFx{" "}
            <span className="keydown">
              <KeyboardDown />
            </span>
          </li>
          <li className="list-group-item d-flex ">
            AudienceTargetingFx <span className="beta">Beta</span>{" "}
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <div>
              LocalFx <span className="beta">Beta</span>
            </div>{" "}
            <span className="keydown">
              <KeyboardDown />
            </span>
          </li>
        </ul>

        {/* contet */}
        <ul className="list-group list-group-flush">
          <div className="reporting pl-4 pt-1 pb-1">
            <Layers className="pr-2" />
            CONTENT
          </div>
          <li className="list-group-item d-flex justify-content-between sidebar-active">
            ContentGeniusFx{" "}
          </li>
          <li className="list-group-item d-flex justify-content-between">
            Link Campaign History{" "}
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <div>
              DeepLearningFx <span className="beta">Beta</span>{" "}
            </div>{" "}
            <span className="keydown">
              <KeyboardDown />
            </span>
          </li>
        </ul>

        {/* contet */}
        <ul className="list-group list-group-flush pb-5">
          <div className="reporting pl-4 pt-1 pb-1">
            <Settings className="pr-2" />
            CONFIGURATION
          </div>
          <li className="list-group-item d-flex justify-content-between">
            Settings{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
