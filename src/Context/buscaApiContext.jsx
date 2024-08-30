import axios from "axios";
import { createContext, useState } from "react";

export const BuscaApiContext = createContext();

export const BuscaApiProvider = ({children})=> {

  const key = import.meta.env.VITE_API_KEY;
  const [erro, setErro] = useState(null);
  const [cidade, setCidade] = useState("Rio de Janeiro");
  const [dados, setDados] = useState([]);
  const [carregando, setCarregando] = useState(false);

  const buscarApi = async ()=>{
    try{
      setCarregando(true);
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&cnt=3&appid=${key}`);
      setDados(res.data);
      setCidade(res.data.city.name);  
    }catch(erro){
      setErro(erro);
    }finally{
      setCarregando(false);
    }

  };

  return(
    <BuscaApiContext.Provider value={{erro, cidade, setCidade, dados, carregando, buscarApi}}>
      {children}
    </BuscaApiContext.Provider>
  );
};