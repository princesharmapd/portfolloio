import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import firstimage from "../assets/tileimages/firstimage.jpg";
import secondimage from "../assets/tileimages/secondimage.jpg";
import thirdimage from "../assets/tileimages/thirdimage.jpg";
import fourthimage from "../assets/tileimages/fourthimage.jpg";

const initialTiles = [
  { id: 1, title: "CSG Dashboard", image: firstimage, route: "/dashboard" },
  { id: 2, title: "ISG Dashboard", image: secondimage, route: "/isg-dashboard" },
  { id: 3, title: "Third Dashboard", image: thirdimage, route: "/partner-dashboard" },
  { id: 4, title: "Fourth Dashboard", image: fourthimage, route: "/ppm-dashboard" },
];

const LandingPage = () => {
  const navigate = useNavigate();
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    // Check if images are already stored in localStorage
    const storedTiles = localStorage.getItem("tilesData");

    if (storedTiles) {
      setTiles(JSON.parse(storedTiles));
    } else {
      setTiles(initialTiles);
      localStorage.setItem("tilesData", JSON.stringify(initialTiles));
    }
  }, []);

  if (tiles.length === 0) return null; // Prevents re-rendering on refresh

  return (
    <div className="landing-container">
      <h2>Market Dashboards</h2>
      <div className="tiles">
        {tiles.map((tile) => (
          <div key={tile.id} className="tile" onClick={() => navigate(tile.route)}>
            <img src={tile.image} alt={tile.title} className="tile-image" />
            <div className="tile-title">{tile.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
