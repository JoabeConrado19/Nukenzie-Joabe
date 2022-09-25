const TotalPreco = (props) => {
  return (
    <div className="total-container">
      <div>
        <h4>Valor Total: </h4>
        <span>R$ {props.totalProps}</span>
      </div>
      <p>O valor se refere ao saldo</p>
    </div>
  );
};

export default TotalPreco;
