const Resumo = (props) => {
  let Posts = JSON.parse(localStorage.getItem("@NuKenzieJojo"))
  function Filtrar(type){
    if(type === "Despesa"){
      props.setPostNu(Posts)
      const ListaDespesa = props.listaNu.filter((item)=>{return item.ValueType === type })
      props.setPostNu(ListaDespesa)
    }
    else if(type === "Entrada"){
      props.setPostNu(Posts)

      const ListaEntrada = props.listaNu.filter((item)=>{return item.ValueType === type })
      props.setPostNu(ListaEntrada)
    }
    else{

      props.setPostNu(Posts)
    }
  }
    return (
        <div className="resumo-filtro">
        <h2>Resumo Financeiro</h2>
        <div>
          <button onClick={()=>{Filtrar("Todos")}}>Todos</button>
          <button onClick={()=>{Filtrar("Entrada")}}>Entradas</button>
          <button onClick={()=>{Filtrar("Despesa")}}>Despesas</button>
        </div>
      </div>
    );
  };
  
  export default Resumo;


