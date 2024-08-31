import styled from "styled-components";
import FormPesquisa from "../../common/FormPesquisa";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 2rem 0;
`;
const Cabecalho = () => {
  return(
    <Header>
      <FormPesquisa />      
    </Header>
  );
};

export default Cabecalho;