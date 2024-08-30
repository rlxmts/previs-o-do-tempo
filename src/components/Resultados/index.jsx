import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaWind } from "react-icons/fa6";
import { IoWaterOutline } from "react-icons/io5";
import styled from "styled-components";
import  sol  from "../../assets/img/sol.webp";
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
  padding: 2rem 0;
  text-align: start;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Card = styled.div`
  border: 1px solid #00000070;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Resultados = () => {
  // eslint-disable-next-line no-unused-vars
  const [cidadeAtual, setCidadeAtual] = useState("Rio de Janeiro");

  return(
    <SecaoResultado>
      <Titulo>
        <FaLocationDot fill="#00205B" />
        {cidadeAtual}
      </Titulo>
      <TemperaturaAtual>
        <img src={sol}/>
        <p>Céu limpo</p>
        <span className="temperatura-atual">30°</span>
        <div className="info-adicionais">
          <span className="velocidade-vento">
            <FaWind />
            <span>6 km/h</span>
          </span>
          <span className="humidade">
            <IoWaterOutline />
            <span>50%</span>
          </span>
        </div>
      </TemperaturaAtual>
      <ProximosHorarios>
        <h3>Veja a temperatura durante o dia:</h3>
        <Card>
          <span>15:00</span>
          <p>Algumas Nuvens</p>
          <span>25°</span>
        </Card>
        <Card>
          <span>15:00</span>
          <p>Algumas Nuvens</p>
          <span>25°</span>
        </Card>
        <Card>
          <span>15:00</span>
          <p>Algumas Nuvens</p>
          <span>25°</span>
        </Card>
        <Card>
          <span>15:00</span>
          <p>Algumas Nuvens</p>
          <span>25°</span>
        </Card>
      </ProximosHorarios>
    </SecaoResultado>
  );
};

export default Resultados;