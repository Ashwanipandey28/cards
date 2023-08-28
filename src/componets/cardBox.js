import "./style.css";

const CardBox = (props) => {
  console.log(props.value, "data");

  return (
    <div className="box-container">
      <div className="box-heading">
        <h1>{props.value.title}</h1>
      </div>
      <div className="box-para">
        <p>{props.value.para}</p>
      </div>
      <div className="box-img">
        <img src={props.value.img} alt="image" />
      </div>
    </div>
  );
};

export { CardBox };
