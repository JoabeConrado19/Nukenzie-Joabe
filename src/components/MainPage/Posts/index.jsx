import ButtonTrash from "../Posts/Post-Card/assets/ButtonTrash.png";
import PostCard from "./Post-Card";

const Render = (props) => {
  let Lista = JSON.parse(localStorage.getItem("@NuKenzieJojo"));
  if (Lista === null) {
    Lista = [];
  }


  return (
    <ul>
      {props.listaNu.map((element, index) => (
        <PostCard
          element={element}
          PostNu={props.listaNu}
          setPostNu={props.setPostNu}
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
