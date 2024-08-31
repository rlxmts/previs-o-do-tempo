import styled from "styled-components";
import Cabecalho from "./components/Cabecalho";
import Container from "./components/common/Container";
import Resultados from "./components/Resultados";
import { BuscaApiProvider } from "./Context/buscaApiContext";

const App = styled.div`
  background: rgb(201,148,104);
  background: linear-gradient(10deg, #ffc596 51%, #fff0ac 100%);
  min-height: 100vh;
`;

const Home = ()=> {
  return(
    <App>
      <BuscaApiProvider>
        <Container>
          <Cabecalho />
          <Resultados />
        </Container>
      </BuscaApiProvider>
    </App>
  );
};
export default Home;