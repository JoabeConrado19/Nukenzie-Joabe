import illustration from "../LandingPage/assets/illustration.svg";
const LandingPage = (props) => {
  return (
    <div className="landingBody">
      <main>
        <div className="divEsquerda">
          <h1>
            <span>Nu </span>Kenzie
          </h1>
          <h2>Centralize o controle das suas finanças</h2>
          <span>De forma rápida e segura</span>
          <button onClick={props.Function} type="submit">
            Iniciar
          </button>
        </div>
        <div className="divDireita">
          <img src={illustration} alt="Alguma coisa" />
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
