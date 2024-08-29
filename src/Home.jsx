import Cabecalho from "./components/Cabecalho";
import Container from "./components/common/Container";
import Resultados from "./components/Resultados";

const Home = ()=> {
  return(
    <Container>
      <Cabecalho />
      <Resultados />
    </Container>
  );
};

export default Home;