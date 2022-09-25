import NuKenzie from "../Header/assets/NuKenzie.png";
const Header = (props) => {
  return (
    <header className="mainHeader">
      <img src={NuKenzie}></img>
      <button onClick={props.Function} type="submit">
        Início
      </button>
    </header>
  );
};

export default Header;
