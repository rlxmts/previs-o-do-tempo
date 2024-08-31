import { FaLocationDot } from "react-icons/fa6";
import { FaWind } from "react-icons/fa6";
import { IoWaterOutline } from "react-icons/io5";
import styled from "styled-components";
import  sol  from "../../assets/img/sol.webp";
import { useContext, useEffect } from "react";
import { BuscaApiContext } from "../../Context/buscaApiContext";

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

  const { cidade, buscarApi, dados, erro } = useContext(BuscaApiContext);

  useEffect(()=> {    
    buscarApi("rio de janeiro");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);  

  if(dados.length < 1){
    return <p>Carregando...</p>;
  }

  if(erro){
    console.log("Erro obtido: ",erro);
    return <p>Parece que houve um erro ao carregar as informações.</p>;
  }

  return(
    <SecaoResultado>
      <Titulo>
        <FaLocationDot fill="#00205B" />
        {cidade}
      </Titulo>
      <TemperaturaAtual>
        <img src={sol}/>
        <p>{dados[0].weather[0].description}</p>
        <span className="temperatura-atual">{dados[0].main.temp}</span>
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
          return(
            <Card key={item.dt}>
              <span>{item.dt_txt}</span>
              <p>{item.weather[0].description}</p>
              <span>{item.main.temp}</span>
            </Card>
          );
        })}  
      </ProximosHorarios>       
    </SecaoResultado>
  );
};

export default Resultados;