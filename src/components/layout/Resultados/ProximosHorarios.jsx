import { useContext } from "react";
import styled from "styled-components";
import { BuscaApiContext } from "../../../Context/buscaApiContext";

const Resultados = styled.div`
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

const ProximosHorarios = ()=> {

  const { dados } = useContext(BuscaApiContext);

  return(
    <Resultados>
      <h3>Veja a temperatura durante o dia:</h3>
      {dados.map( item => {

        const temp = item.main.temp;
        const temperaturaTratada = Number(String(temp).slice(0, 2));
        const horario = item.dt_txt.slice(11, 16);
        const ceu = item.weather[0].description;

        return(
          <Card key={item.dt}>
            <span>{horario}</span>
            <p>{ceu}</p>
            <span>{temperaturaTratada}°</span>
          </Card>
        );
      })}  
    </Resultados>
  );
};

export default ProximosHorarios;