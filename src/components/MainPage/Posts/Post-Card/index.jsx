import ButtonTrash from "../Post-Card/assets/ButtonTrash.png";
const PostCard = (props) => {
  if (props.ValueType === "Despesa") {
    return (
      <li>
        <div className="card-type2"></div>
        <div className="card-container">
          <div>
            <h3>{props.description}</h3>
            <span>{props.ValueType}</span>
          </div>
          <span>R$ {props.Value}</span>
          <img src={ButtonTrash} className="trashIco"></img>
        </div>
      </li>
    );
  } else {
    return (
      <li>
        <div className="card-type"></div>
        <div className="card-container">
          <div>
            <h3>{props.description}</h3>
            <span>{props.ValueType}</span>
          </div>
          <span>R$ {props.Value}</span>
          <img src={ButtonTrash} className="trashIco"></img>
        </div>
      </li>
    );
  }
};

export default PostCard;
