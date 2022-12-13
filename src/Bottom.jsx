function Bottom(props) {
  return (
    <div>
      <div className="row outer-container">
        <div className="col">
          <div className="inner-div">
            <img className="inner-img" src={props.source} alt="subPhoto" />
          </div>

          <div className="inner-div">
            <h5>{props.number}</h5>
            <h6>{props.subTitle}</h6>
            <p>{props.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bottom;
