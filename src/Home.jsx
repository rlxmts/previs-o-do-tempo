import styled from "styled-components";
import Cabecalho from "./components/layout/Cabecalho";
import Container from "./components/common/Container";
import Resultados from "./components/layout/Resultados";
import { BuscaApiProvider } from "./Context/buscaApiContext";
import Rodape from "./components/layout/Rodape";

const App = styled.div`
  background: rgb(201,148,104);
  background: linear-gradient(10deg, #ffc596 51%, #fff0ac 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Home = ()=> {
  return(
    <App>
      <BuscaApiProvider>
        <Container>
          <Cabecalho />
          <Resultados />
        </Container>
        <Rodape />
      </BuscaApiProvider>
    </App>
  );
};
export default Home;