import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./components/LandingPage";
import "./components/LandingPage/index.css";
import { useState } from "react";
import "./components/MainPage/index.css";
import Header from "./components/MainPage/Header";
import "./components/MainPage/Header/index.css";
import Render from "./components/MainPage/Posts";
import TotalPreco from './components/MainPage/Total/total'
import Resumo from './components/MainPage/Resumo Filtro/Resumo'
let setar = "";
let total = 0;

function LocalPosts() {
  if (JSON.parse(localStorage.getItem("@NuKenzieJojo")) != null) {
    setar = JSON.parse(localStorage.getItem("@NuKenzieJojo"));
  } else {
    setar = [];
  }
}
LocalPosts();

function App() {
  const [state, setTrue] = useState();
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [valueType, setValueType] = useState("");
  const [PostNu, setPostNu] = useState(setar);
  const [Total, setTotal] = useState(total);
  function AtualizarTotal() {
    total = 0;
    PostNu.map((element) => {
      if (element.ValueType == "Entrada") {
        total = parseInt(element.Value) + total;
      } else {
        total = total - parseInt(element.Value);
      }
    });
  }
  AtualizarTotal();

  function Dashboard() {
    setTrue(true);
    console.log(state);
  }
  function Inicio() {
    setTrue(false);
  }

  function CriarPost(event) {
    event.preventDefault();
    let post2 = {
      description: description,
      Value: value,
      ValueType: valueType,
    };
    console.log(description, value, valueType);

    setPostNu([post2, ...PostNu]);

    localStorage.setItem("@NuKenzieJojo", JSON.stringify([post2, ...PostNu]));
    AtualizarTotal();
  }

  if (state == true) {
    return (
      <main className="dashboardMain">
        <Header Function={Inicio} />

        <div className="main-container">
          <div className="main-container-left">
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
                  onClick={(e) => setValueType(e.target.value)}
                >
                  <option>Tipo de valor</option>
                  <option value="Entrada">Entrada</option>
                  <option value="Despesa">Despesa</option>
                </select>
              </div>
              <div className="form-btn">
                <button type="submit" onClick={CriarPost}>
                  Inserir valor
                </button>
              </div>
            </form>
            <TotalPreco totalProps ={total}/>
          </div>
          <div className="main-container-rigth">
            <Resumo/>
            <Render listaNu={PostNu} />
          </div>
        </div>
      </main>
    );
  } else {
    return <LandingPage Function={Dashboard} />;
  }
}

export default App;
