function Main() {
  return (
    <div>
      <div className="row section">
        <div className="col-8 main">
          <div className="desktop-container"></div>
          <div className="row info">
            <div className="col-lg-6">
              <h3 className="big-title">
                The Bright
                <br /> Future of
                <br />
                Web 3.0?
              </h3>
            </div>
            <div className="col-lg-6">
              <p>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className="read" type="button">
                READ MORE
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-3 aside">
          <div className="sub-div">
            <h4 className="new"> New</h4>
            <h6>Hydrogen VS Electric Cars</h6>
            <p className="detail">
              {" "}
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
            <hr />
          </div>
          <div className="sub-div">
            <h6> The Downsides of AI Artistry</h6>
            <p className="detail">
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
            <hr />
          </div>
          <div className="sub-div">
            <h6> Is VC Funding Drying Up?</h6>
            <p className="detail">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
