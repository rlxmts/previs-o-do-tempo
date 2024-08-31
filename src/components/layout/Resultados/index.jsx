import { FaLocationDot } from "react-icons/fa6";
import { FaWind } from "react-icons/fa6";
import { IoWaterOutline } from "react-icons/io5";
import styled, { keyframes } from "styled-components";
import  sol  from "../../../assets/img/sol.webp";
import { useContext, useEffect } from "react";
import { BuscaApiContext } from "../../../Context/buscaApiContext";

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

const Titulo = styled.h2`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 1rem;
`;

const SecaoResultado = styled.section`

  text-align: center;
  img{
    width: 150px;
  }
`;

const TemperaturaAtual = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  .temperatura-atual{
    font-size: 4rem;
    font-family: "PoppinsMedium";
  }

  .info-adicionais{
    display: flex;
    gap: 1rem;
    justify-content: center;
  }

  .velocidade-vento, .humidade{
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

const ProximosHorarios = styled.div`
  padding: 3rem 0;
  text-align: start;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Card = styled.div`
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);

  .horario, .temperatura{
    font-family: "PoppinsMedium";
  }
`;

const Resultados = () => {

  const { cidade, buscarApi, dados, erro, carregando } = useContext(BuscaApiContext);

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
  const temperatura = dados[0].main.temp;
  const temperaturaTratada = Number(String(temperatura).slice(0, 2));

  return(
    <SecaoResultado>
      <Titulo>
        <FaLocationDot fill="#00205B" />
        {cidade}
      </Titulo>
      <TemperaturaAtual>
        <img src={sol}/>
        <p>{dados[0].weather[0].description}</p>
        <span className="temperatura-atual">{temperaturaTratada}°</span>
        <div className="info-adicionais">
          <span className="velocidade-vento">
            <FaWind />
            <span>{dados[0].wind.speed} km/h</span>
          </span>
          <span className="humidade">
            <IoWaterOutline />
            <span>{dados[0].main.humidity}%</span>
          </span>
        </div>
      </TemperaturaAtual>      
      <ProximosHorarios>
        <h3>Veja a temperatura durante o dia:</h3>
        {dados.map( item => {

          const temp = item.main.temp;
          const temperaturaTratada = Number(String(temp).slice(0, 2));

          return(
            <Card key={item.dt}>
              <span>{item.dt_txt.slice(11, 16)}</span>
              <p>{item.weather[0].description}</p>
              <span>{temperaturaTratada}°</span>
            </Card>
          );
        })}  
      </ProximosHorarios>       
    </SecaoResultado>
  );
};

export default Resultados;