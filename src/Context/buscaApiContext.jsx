import axios from "axios";
import { createContext, useState } from "react";

export const BuscaApiContext = createContext();

// eslint-disable-next-line react/prop-types
export const BuscaApiProvider = ({children})=> {

  const key = import.meta.env.VITE_API_KEY;
  const [erro, setErro] = useState(null);
  const [cidade, setCidade] = useState("");
  const [dados, setDados] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [ceu, setCeu] = useState("");

  const buscarApi = async (cidadeDigitada)=>{    
    setCarregando(true);
    try{
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cidadeDigitada}&lang=pt_br&cnt=3&appid=${key}&units=metric`);
      setCeu(res.data.list[0].weather[0].main);
      setDados(res.data.list);
      setCidade(res.data.city.name);
      setErro(null);
      console.log(res.data);
    }catch(erro){
      setCarregando(false);
      setErro(erro.response.data.message);
    }finally{
      setCarregando(false);
    }
  };

  return(
    <BuscaApiContext.Provider value={{erro, cidade, dados, carregando, buscarApi, ceu}}>
      {children}
    </BuscaApiContext.Provider>
  );
};