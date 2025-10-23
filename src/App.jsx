import "./App.css";
import ApiMenu from "./ApiMenu/ApiMenu";
import MenuComponent from "./MenuComponent/MenuComponent";
import Title from "./TitleWeb/title";
import MenuTypeText from "./MenuType/MenuType";

function App() {
  return (
    <>
      <Title Titulo={"Menu del restaurante"} />
      <MenuTypeText TipoMenu={"Pescados"} />
      <MenuComponent
        tipoPlato={"seafood"}
        Plato1={"52959"}
        plato2={"52852"}
        plato3={"52944"}
        plato4={"52773"}
        plato5={"52777"}
        plato6={"53045"}
        plato7={"52960"}
        plato8={"52936"}
        plato9={"53023"}
      />
      
      <MenuTypeText TipoMenu={"Postres"} />

      <MenuComponent tipoPlato={"Dessert"} Plato1={"52990"} plato2={"52899"} plato3={"53007"} plato4={"52890"} plato5={"53015"} plato6={"52991"} plato7={"52924"} plato8={"52902"} plato9={"52861"}/>
    </>
  );
}

export default App;
