import styled from "styled-components";
import Cabecalho from "./components/layout/Cabecalho";
import Container from "./components/common/Container";
import Resultados from "./components/layout/Resultados";
import { BuscaApiContext, BuscaApiProvider } from "./Context/buscaApiContext";
import Rodape from "./components/layout/Rodape";
import { useContext, useEffect, useState } from "react";

const AppStyle = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${props => props.backgroundColor};
`;

const Home = ()=> {
  return(
    <BuscaApiProvider>
      <App />
    </BuscaApiProvider>
  );
};

const App = ()=> {

  const { ceu } = useContext(BuscaApiContext);
  const [ corDeFundo, setCorDeFundo ] = useState("");

  useEffect(()=> {
    switch (ceu) {
    case "Clear":
      return setCorDeFundo("linear-gradient(10deg, #feffb6 51%, #fff0ac 100%)");
    case "Clouds":
      return setCorDeFundo("linear-gradient(0deg, #b2d7e6 71%, #7de2f8 100%)");
    case "Rain":
      return setCorDeFundo("linear-gradient(0deg, #b3dddc 51%, rgba(106,240,220,1) 100%)");
    default:
      return; 
    }
  }, [ceu]);

  return(
    <AppStyle backgroundColor={corDeFundo}>
      <Container>
        <Cabecalho />
        <Resultados />
      </Container>
      <Rodape />
    </AppStyle>
  );
};

export default Home;