import { useContext, useState } from "react";
import styled from "styled-components";
import { BuscaApiContext } from "../../../Context/buscaApiContext";

const Form = styled.form`
  width: 100%;
  display: flex;
`;

const CampoPesquisa = styled.input`
  width: 100%;
  padding: .5rem 1rem .5rem 2rem;
  outline: none;
  border: 1px solid #00000070;
  border-radius: 10px 0 0 10px ;
  position: relative;

  &::before{
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    background-color: red;
    position: absolute;
    left: 0;
    top: 50%;
  }
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
  const {buscarApi} = useContext(BuscaApiContext);
  const [cidadeDigitada, setCidadeDigitada] = useState("");

  const formatarPalavra = (palavra)=> {
    return palavra.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const pesquisarCidade = (e)=> {
    e.preventDefault();
    const palavraFormatada = formatarPalavra(cidadeDigitada);
    buscarApi(palavraFormatada);
    setCidadeDigitada("");
  };

  return(
    <Form onSubmit={(e) => pesquisarCidade(e)}>
      <label 
        className="esconder" 
        htmlFor="buscar"
      >
        Digite a cidade:
      </label>
      <CampoPesquisa 
        onChange={(e)=> setCidadeDigitada(e.target.value)}
        value={cidadeDigitada}
        placeholder="Buscar Cidade" 
        id="buscar" 
        required
      />
      <Botao className="bt-buscar">
        Buscar
      </Botao>
    </Form>
  );
};

export default FormPesquisa;