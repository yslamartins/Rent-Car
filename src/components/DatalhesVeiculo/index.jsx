import carros from "../../mocks/listaCarros";
import motos from "../../mocks/listaMotos";
import Logo from "../../assets/Logo";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function DetalhesVeiculo({ veiculo, type }) {
  let filterVeiculos = [];
  

  if (type === "moto") {
    filterVeiculos = motos.filter((moto) => moto.id !== veiculo.id);
  } else {
    filterVeiculos = carros.filter((carro) => carro.id !== veiculo.id);
  }
 const [dias,setDias] = useState(0)
 const [resultado,setResultado] = useState(0)
 
 function calculoDiarias() {
    if(dias >= 10){
        return setResultado((veiculo.diaria * dias)/2)
    }
    setResultado(veiculo.diaria * dias)
 }
  return (
    <div className="bg-white shadow-xl  w-[1200px] h-[600px] rounded-xl">
      {/* <div className=" flex bg-slate-700 ">
        <Logo/>
        </div> */}
      <div className="flex justify-center h-[60%]">
        <div className="flex">
          <img src={veiculo.foto} />
        </div>
        <div className="m-[12px] text-xl">
          <h1 className="font-[placa] text-3xl text-[#a52a2a]">Detalhes</h1>
          <div className="flex-col">
            <p className="mt-5">{veiculo.modelo}</p>
            <p className="m-[5px]">{veiculo.marca}</p>
            <p className="m-[5px]">{veiculo.categoria}</p>
            <p className="m-[5px] ">{veiculo.ano}</p>
            <p className="rounded-2xl text-black">
              R$ {veiculo.diaria}/dia
            </p>
            <input type="text"
            onChange={(e) => setDias(e.target.value)} />
            <label htmlFor=""></label>
            <button onClick={calculoDiarias}>Calcular</button>
            <p>{resultado}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className=" flex w-[90%] mx-10 justify-between">
          {filterVeiculos.map((veiculo) => (
            <div className=" flex w-[300px] shadow-2xl rounded-lg">
              <div className="">
                <img src={veiculo.foto} className="h-60" />
              </div>
              <div className="div">
              <p>{veiculo.modelo}</p>
              <p>{veiculo.marca}</p>
              <p>{veiculo.ano}</p>
              <p>R$ {veiculo.diaria}/dia</p>
              <Link to={`/${type}/${veiculo.id}`}>
                    <button>ALUGAR</button>
              </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
