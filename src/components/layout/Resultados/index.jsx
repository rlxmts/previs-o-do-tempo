
import styled, { keyframes } from "styled-components";
import { useContext, useEffect } from "react";
import { BuscaApiContext } from "../../../Context/buscaApiContext";
import TemperaturaAtual from "./TemperaturaAtual";
import ProximosHorarios from "./ProximosHorarios";

const girar = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const Carregando = styled.div`
        display: block;
        border: 3px solid #000000;
        border-bottom: 3px solid transparent;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        animation: ${girar} 2s linear infinite;
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%, -50%);
  `;

const MsgErro = styled.p`
  text-align: center;
  color: red;
  font-family: "PoppinsMedium";
`;

const Resultados = () => {

  const { buscarApi, dados, erro, carregando } = useContext(BuscaApiContext);

  useEffect(()=> {    
    buscarApi("rio de janeiro");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);  
  
  if(erro === "city not found"){
    console.log("Erro obtido: ",erro);
    return <MsgErro>Cidade não encontrada.</MsgErro>;
  }
  
  if(erro){
    return <p>Ops, parece que houve algum erro na busca.</p>;
  }
  
  if(carregando || dados.length < 1){
    return <Carregando></Carregando>;
  }
  
  return(
    <section>     
      <TemperaturaAtual />
      <ProximosHorarios />
    </section>
  );
};

export default Resultados;