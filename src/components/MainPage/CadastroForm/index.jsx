import { useState } from "react";
import PostsRender from "../Posts";
import Renderizar from '../../../App'
import Render from '../../MainPage/Posts/index'



let arr = []


if(JSON.parse(localStorage.getItem("@NuKenzieJojo")) != null){
    arr = JSON.parse(localStorage.getItem("@NuKenzieJojo"))
}

const CadastroForm = (props) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [valueType, setValueType] = useState("");
  const [PostNu, setPostNu] = useState(arr);





 
  function CriarPost(event) {
    event.preventDefault();
    let post2 = {
      "description": description,
      "Value": value,
      "ValueType": valueType
    };
    console.log(description, value, valueType);
    arr.unshift(post2);
    console.log(arr)
    localStorage.setItem('@NuKenzieJojo', JSON.stringify(arr));
    
    
    



    
  }

  return (
    <form className="form-container">
      <div className="form-top">
        <h3>Descrição</h3>
        <div>
          <input
            type="text"
            placeholder="Digite aqui sua descrição"
            onChange={(event) => setDescription(event.target.value)}
          ></input>
        </div>
        <p>Ex: Compra de roupas</p>
      </div>
      <div className="form-bottom">
        <div className="input-p">
          <p>Valor</p>
          <p>Tipo de valor</p>
        </div>
      </div>
      <div className="inputs">
        <div className="input1">
          <input
            placeholder="1"
            onChange={(event) => setValue(event.target.value)}
          ></input>
          <p>R$</p>
        </div>
        <select
          className="input2"
          onChange={(e) => setValueType(e.target.value)}
        >
          <option>Tipo de valor</option>
          <option value="Entrada">Entrada</option>
          <option value="Despesa">Despesa</option>
        </select>
      </div>
      <div className="form-btn">
        <button type="submit" onChange={CriarPost}>
          Inserir valor
        </button>
      </div>
    </form>
  );
};

export default CadastroForm;
