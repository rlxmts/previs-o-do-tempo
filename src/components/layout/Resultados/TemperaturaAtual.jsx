import { FaLocationDot } from "react-icons/fa6";
import { FaWind } from "react-icons/fa6";
import { IoWaterOutline } from "react-icons/io5";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { BuscaApiContext } from "../../../Context/buscaApiContext";
import nuvem from "../../../assets/img/Clouds.webp";
import sol from "../../../assets/img/Clear.webp";
import chuva from "../../../assets/img/Rain.webp";

const Titulo = styled.h2`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 1rem;
`;

const TempResultado = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  .img-tempo{
    width:150px;
  }

  .ceu{
    color: #00205B;
    font-family: "PoppinsMedium";
    text-transform: capitalize;
  }

  .temperatura-atual{
    font-size: 4rem;
    font-family: "PoppinsMedium";
    color: #00205B;
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

const TemperaturaAtual = () => {
  const { cidade, dados, ceu } = useContext(BuscaApiContext);
  const [imagem, setImagem] = useState("");

  useEffect(() => {
    switch (ceu) {
    case "Clear":
      return setImagem(sol);
    case "Clouds":
      return setImagem(nuvem);
    case "Rain":
      return setImagem(chuva);
    default:
      return setImagem(chuva); //
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const temperatura = dados[0].main.temp;
  const temperaturaTratada = Number(String(temperatura).slice(0, 2));
  const ceuDescricao = dados[0].weather[0].description;
  const vento = dados[0].wind.speed;
  const humidade = dados[0].main.humidity;

  return(
    <TempResultado>
      <Titulo>
        <FaLocationDot fill="#00205B" />
        {cidade}
      </Titulo>
      <img className="img-tempo" src={imagem} />
      <p className="Descricao">{ceuDescricao}</p>
      <span className="temperatura-atual">{temperaturaTratada}°</span>
      <div className="info-adicionais">
        <span className="velocidade-vento">
          <FaWind />
          <span>{vento} km/h</span>
        </span>
        <span className="humidade">
          <IoWaterOutline />
          <span>{humidade}%</span>
        </span>
      </div>
    </TempResultado>
  );
};

export default TemperaturaAtual;