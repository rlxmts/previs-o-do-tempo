import styled from "styled-components";
import Cabecalho from "./components/Cabecalho";
import Container from "./components/common/Container";
import Resultados from "./components/Resultados";

const App = styled.div`
  background: rgb(201,148,104);
  background: linear-gradient(10deg, #ffc596 51%, #fff0ac 100%);
  min-height: 100vh;
`;

const Home = ()=> {
  return(
    <App>
      <Container>
        <Cabecalho />
        <Resultados />
      </Container>
    </App>
  );
};

export default Home;