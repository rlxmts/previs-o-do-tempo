import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  display: flex;
`;

const CampoPesquisa = styled.input`
  width: 100%;
  padding: .5rem 1rem;
  outline: none;
  border: 1px solid #00000070;
  border-radius: 10px 0 0 10px ;
`;


const Botao = styled.button`
    background-color: #00205B;
    padding: 5px;
    width: 100%;
    max-width: 90px;
    border: none;
    color: #FFFFFF;
    border-radius: 0px 10px 10px 0px;
    cursor: pointer;
    transition:.5s;

    &:hover{
        background-color: #010d24;
    }
`;

const FormPesquisa = ()=> {
  return(
    <Form>
      <label className="esconder" htmlFor="buscar">Digite a cidade:</label>
      <CampoPesquisa placeholder="Rio de Janeiro" id="buscar" required/>
      <Botao className="bt-buscar">Buscar</Botao>
    </Form>
  );
};

export default FormPesquisa;