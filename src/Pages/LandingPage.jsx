import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import firstimage from "../assets/tileimages/firstimage.png";
import secondimage from "../assets/tileimages/secondimage.png";
import thirdimage from "../assets/tileimages/thirdimage.png";
import fourthimage from "../assets/tileimages/fourthimage.png";
import fifthimage from "../assets/tileimages/fifthimage.png";

const initialTiles = [
  { id: 1, title: "Market Overview", image: firstimage, route: "/executive" },
  { id: 2, title: "Stock Data", image: secondimage, route: "/data" },
  { id: 3, title: "Indices Performance", image: thirdimage, route: "/dashboard" },
  { id: 4, title: "Derivatives Analysis", image: fourthimage, route: "/dashboard" },
  { id: 5, title: "Trading Insights", image: fifthimage, route: "/dashboard" },
];

const userAllowedIds = [1, 2, 3, 4, 5];

const LandingPage = () => {
  const navigate = useNavigate();
  const [tiles, setTiles] = useState(initialTiles);

  return (
    <div className="landing-container">
      <h2>NSE Dashboards</h2>
      <div className="tiles">
        {tiles.map((tile, index) => {
          const isDisabled = !userAllowedIds.includes(tile.id);
          return (
            <div
              key={tile.id}
              className={`tile ${isDisabled ? "disabled" : ""}`}
              onClick={() => !isDisabled && navigate(tile.route)}
              style={{ "--delay": `${index * 0.2}s` }} // Staggered flip effect
            >
              <div className="tile-image-container">
                <img src={tile.image} alt={tile.title} className="tile-image" />
              </div>
              <div className="tile-title">{tile.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LandingPage;
