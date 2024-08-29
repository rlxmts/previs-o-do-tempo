import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import styled from "styled-components";

const Titulo = styled.h2`
  display: flex;
  align-items: center;
  gap: 10px;
`;


const Resultados = () => {
  // eslint-disable-next-line no-unused-vars
  const [cidadeAtual, setCidadeAtual] = useState("Rio de Janeiro");

  return(
    <section>
      <Titulo>
        <FaLocationDot fill="#00205B" />
        {cidadeAtual}
      </Titulo>
    </section>
  );
};

export default Resultados;