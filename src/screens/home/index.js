import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Library from "../library";
import Feed from "../feed/index.js";
import Trending from "../trending";
import Player from "../player";
import Favourites from "../favourites";
import Sidebar from "../../components/sidebar";
import "./home.css";

function Home() {
  return (
    <Router>
      <div className="main-body">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/player" element={<Player />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Home;

// Wrap the whole home component inside Router so that routes are available inside the whole document
// The routes component maps over the routes and displays which ever matches our current route
