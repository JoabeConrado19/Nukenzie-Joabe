import ButtonTrash from "../Posts/Post-Card/assets/ButtonTrash.png";
import PostCard from "./Post-Card";

const Render = (props) => {
  let Lista = JSON.parse(localStorage.getItem("@NuKenzieJojo"));
  if (Lista === null) {
    Lista = [];
  }
  console.log(Lista);

  return (
    <ul>
      {props.listaNu.map((element, index) => (
        <PostCard
          key={index}
          description={element.description}
          Value={element.Value}
          ValueType={element.ValueType}
        />
      ))}
    </ul>
  );
};

export default Render;
