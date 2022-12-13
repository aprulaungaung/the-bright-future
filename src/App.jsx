import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import Bottom from "./Bottom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <div className="row frame">
        <div className="col-sm-12 col-lg-4">
          <Bottom
            source="images/image-retro-pcs.jpg"
            number="01"
            subTitle="Reviving Retro
             PCs"
            text="What happens when old PCs are given modern upgrades?"
          />
        </div>
        <div className="col-sm-12 col-lg-4">
          <Bottom
            source="images/image-top-laptops.jpg"
            number="02"
            subTitle="Top 10 Laptops of 2022"
            text="Our best picks for various needs and budgets."
          />
        </div>
        <div className="col-sm-12 col-lg-4">
          <Bottom
            source="images/image-gaming-growth.jpg"
            number="03"
            subTitle="The Growth of Gaming"
            text="How the pandemic has sparked fresh opportunities."
          />
        </div>
      </div>
    </div>
  );
}

export default App;
