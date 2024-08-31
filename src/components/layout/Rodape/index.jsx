import styled from "styled-components";
import Container from "../../common/Container";

const Creditos = styled.p`
  text-align: center;
  font-family: "PoppinsMeidum";
  font-size: 10px;
`;

const ListaRedes = styled.ul`
  display: flex;
  justify-content: center;
  gap: 1rem;

  li a {
    color: #25517c;
    font-family: "PoppinsMedium";
    font-size: 10px;
  }
`;
const Rodape = () => {
  return(
    <>
      <Container>
        <Creditos>Feito por: <a>Matheus Cruz</a></Creditos>
        <ListaRedes>
          <li><a href="https://linkedin.com/in/matheusw16" target="_blank" rel="noreferrer noopener">Linkedin</a></li>
          <li><a href="https://github.com/rlxmts" target="_blank" rel="noreferrer noopener">Github</a></li>
          <li><a href="https://wa.me/5521991537608" target="_blank" rel="noreferrer noopener">WhatsApp</a></li>
        </ListaRedes>
      </Container>
    </>
  );
};

export default Rodape;